CREATE TABLE `blogs` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`excerpt` text NOT NULL,
	`content` text,
	`category` varchar(100) NOT NULL,
	`readTime` varchar(50) NOT NULL,
	`link` varchar(500) NOT NULL,
	`publishedDate` timestamp NOT NULL,
	`isPublished` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blogs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`quote` text NOT NULL,
	`author` varchar(255) NOT NULL,
	`role` varchar(255) NOT NULL,
	`company` varchar(255) NOT NULL,
	`isPublished` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
