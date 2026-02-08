import Parser from 'rss-parser';
import { getBlogVisibility, type BlogVisibility } from './supabase';

const SUBSTACK_RSS_URL = 'https://productoped.substack.com/feed';

export interface SubstackPost {
    id: string;
    title: string;
    excerpt: string;
    link: string;
    publishedDate: string;
    category: string;
    readTime: string;
    isVisible: boolean;
}

const parser = new Parser({
    customFields: {
        item: ['content:encoded', 'dc:creator']
    }
});

// Cache for RSS feed (5 minute TTL)
let cache: { data: SubstackPost[]; timestamp: number } | null = null;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function estimateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, ''); // Strip HTML
    const wordCount = textContent.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
}

function extractExcerpt(content: string, maxLength = 150): string {
    const textContent = content.replace(/<[^>]*>/g, ''); // Strip HTML
    if (textContent.length <= maxLength) return textContent;
    return textContent.substring(0, maxLength).trim() + '...';
}

export async function fetchSubstackPosts(): Promise<SubstackPost[]> {
    // Check cache
    if (cache && Date.now() - cache.timestamp < CACHE_TTL) {
        return cache.data;
    }

    try {
        const feed = await parser.parseURL(SUBSTACK_RSS_URL);
        const visibilityMap = await getVisibilityMap();

        const posts: SubstackPost[] = (feed.items || []).map(item => {
            const id = item.guid || item.link || item.title || '';
            const content = (item as any)['content:encoded'] || item.contentSnippet || '';

            return {
                id,
                title: item.title || 'Untitled',
                excerpt: extractExcerpt(content),
                link: item.link || '',
                publishedDate: item.pubDate || new Date().toISOString(),
                category: item.categories?.[0] || 'Product Thinking',
                readTime: estimateReadTime(content),
                isVisible: visibilityMap.get(id) ?? true // Default to visible
            };
        });

        // Update cache
        cache = { data: posts, timestamp: Date.now() };
        return posts;
    } catch (error) {
        console.error('[Substack] Error fetching RSS:', error);
        return cache?.data || [];
    }
}

async function getVisibilityMap(): Promise<Map<string, boolean>> {
    const visibility = await getBlogVisibility();
    return new Map(visibility.map(v => [v.substack_id, v.is_visible]));
}

export async function getVisiblePosts(): Promise<SubstackPost[]> {
    const posts = await fetchSubstackPosts();
    return posts.filter(post => post.isVisible);
}

export async function getAllPostsForAdmin(): Promise<SubstackPost[]> {
    return fetchSubstackPosts();
}
