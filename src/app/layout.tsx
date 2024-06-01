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
        template: '%s - Young Bryan Yu',
        default: 'Young Bryan Yu\'s Home Page',
    },
    description: `I'm Young, a software engineer who is currently pursuing a master's degree in Computer Science at Purdue University. I am based in San Francisco Bay Area. I'm currently working at startup KeyByte LLC with Dr. Saurabh Bagchi and Dr. Somali Chaterji on some cutting edge database and VM tuning technologies.

  `,
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
                <SpeedInsights/>
            </body>
        </html>
    )
}
