import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import githubLogo from '@/images/projects/github.png'
import npmLogo from '@/images/projects/npm.png'
import titanLogo from '@/images/projects/titan.png'
import fudstopsLogo from '@/images/projects/fudstops.png'
import { LinkIcon } from '@/components/Icons'


/**
 * Project details.
 */
const projects = [
    {
        name: 'SimpliStash',
        description: `A simple in-memory key-value database with a custom TCP-based protocol supporting features like TTL, LRU eviction, snapshots to disk, single-leader replication, off-heap storage, and a CLI.`,
        link: {
            href: 'https://github.com/youngbryanyu/SimpliStash',
            label: 'GitHub Repository'
        },
        logo: githubLogo,
        time: "2024"
    },
    {
        name: 'simple-app-config',
        description: `A simple easy-to-use configuration manager package for Node.js applications.`,
        link: {
            href: 'https://github.com/youngbryanyu/simple-app-config',
            label: 'GitHub Repository'
        },
        logo: npmLogo,
        time: "2024"
    },
    {
        name: 'Titan Health App',
        description: `An all-in-one fitness, nutrition, and health tracking web application that integrates with Purdue dining menus.`,
        link: {
            href: 'https://github.com/youngbryanyu/titan-health-app',
            label: 'GitHub Repository',
        },
        logo: titanLogo,
        time: "2023"
    },
    {
        name: 'Füdstops: Dining Recommendations for Students',
        description: `A dining court menu web application for Purdue students supporting features like recommendations, dietary preferences, ratings, popular menu items, search, filtering, and notifications.`,
        link: {
            href: 'https://github.com/youngbryanyu/fudstops',
            label: 'GitHub Repository',
        },
        logo: fudstopsLogo,
        time: "2022"
    },
]

/**
 * Page metadata.
 */
export const metadata: Metadata = {
    title: 'Projects',
    description: 'Things I’ve made trying to put my dent in the universe.', // TODO: update page metadata for all pages
}

/**
 * The complete projects page.
 */
export default function Projects() {
    return (
        <SimpleLayout
            title="Some projects I've built."
            intro="I've built a fair share of projects for fun in my free time."
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        {/* Project logo */}
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-11 w-11 rounded-full"
                                unoptimized
                            />
                        </div>

                        {/* Project name */}
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>

                        {/* Time */}
                        <p className="relative z-10 flex text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            <span className="">{project.time}</span>
                        </p>

                        {/* Project description */}
                        <Card.Description>{project.description}</Card.Description>

                        {/* Project link */}
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6 flex-none" />
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    )
}
