import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

/**
 * Home Page Metadata.
 */
let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.youngbryanyu.com';
export const metadata: Metadata = {
    title: {
        /* Title of every page in the format `<title> - Young Bryan Yu`*/
        template: '%s - Young Bryan Yu',

        /* Title of the home page of the site on search engines */
        default: "Young Bryan Yu",
    },
    /* This is the description under the title on search */
    description: `I'm Young, a software engineer based in Silicon Valley who is interested in big data, distributed systems, databases, and cloud computing. I'm currently pursuing a MS in Computer Science at Purdue University. I'm currently working at a stealth-mode startup on some cutting edge database and VM tuning technologies.`,
    keywords: [
        /* Name */
        'Young Bryan Yu',
        'Young Yu',
        'Young',
        'Bryan',
        'Yu',
        'youngbryanyu',

        /* Affiliations */
        'Software Engineer',
        'Purdue University',
        'Amazon',
        'KeyByte LLC'
    ],
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
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
                {/* Favicon */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
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