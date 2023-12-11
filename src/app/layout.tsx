import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Amit Mirgal',
    default: 'Amit Mirgal - Software Engineer, and entrepreneur',
  },
  description: `I am a Software Engineer who is good at using JavaScript,
    TypeScript, and React. For the past 8 years, I have been working
    on creating software. I really like how technology can bring about
    new and better ways of doing things. I always try to learn new
    things and get the right qualifications to be a great Software
    Developer in today's ever-changing tech world.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

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
      </body>
    </html>
  )
}
