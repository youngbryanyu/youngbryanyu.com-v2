import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

/**
 * Home Page Metadata.
 */
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://youngbryanyu.com';
export const metadata: Metadata = {
    title: {
        /* Title of every page in the format `<title> - Young Bryan Yu`*/
        template: '%s - Young Bryan Yu',

        /* Title of the home page of the site on search engines */
        default: "Young Bryan Yu",
    },
    authors: [
        {
            name: "Young Bryan Yu",
            url: `${siteUrl}`
        },
        {
            name: "Young Yu",
            url: `${siteUrl}`
        }
    ],

    /* This is the description under the title on search */
    description: `I'm Young, a software engineer based in Silicon Valley who is interested in distributed systems, databases, and cloud computing. I'm currently pursuing a MS in Computer Science at Purdue University. I'm currently working at startup KeyByte LLC on some cutting edge database and VM tuning technologies.`,
    
    keywords: [
        /* Name */
        'Young Bryan Yu',
        'Young Yu',
        'Young',
        'Bryan',
        'Yu',

        /* Affiliations */
        'Software Engineer',
        'Purdue University',
        'Amazon',
        'KeyByte LLC'
    ],
    openGraph: {
        title: 'Projects - Young Bryan Yu',
        description: "Check out some of the projects I've built in my free time.",
        url: `${siteUrl}`,
        type: 'website',
        images: [
            {
                url: 'https://youngbryanyu.com/avatar.jpg',
                width: 800,
                height: 600,
                alt: 'Avatar - Young Bryan Yu'
            }
        ]
    },
    icons: [
        {
            url: `${siteUrl}/favicon.ico`,
            rel: 'icon'
        }
    ],

    alternates: {
        canonical: `${siteUrl}`,
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
    robots: {
        index: true,
        follow: true
    },
}

/**
 * Root layout of app.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body className="flex h-full bg-zinc-50 dark:bg-black">
                <Providers>
                    <div className="flex w-full">
                        <Layout>{children}</Layout>
                    </div>
                </Providers>

                {/* Vercel speed insights and analytics (next) */}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

/**
 * Seems like everything in `/src/app` is accessably through the url just like `/public`.
 */