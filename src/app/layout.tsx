import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

/**
 * Home Page Metadata.
 */
export const metadata: Metadata = {
    title: {
        /* Title of every page in the format `<title> - Young Bryan Yu`*/
        template: '%s - Young Bryan Yu',

        /* Title of the home page of the site on search engines */
        default: "Young Bryan Yu",
    },

    /* This is the description under the title on search */
    description: `I'm Young Bryan Yu, a software engineer who is interested in distributed systems, databases, and cloud computing. I'm currently pursuing a MS in Computer Science at Purdue University. Some places I've worked include Amazon and startup KeyByte LLC.`,

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
