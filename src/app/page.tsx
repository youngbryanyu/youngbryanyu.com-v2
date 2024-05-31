import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { getAllArticles } from '@/lib/articles'
import React from 'react'

// TODO: add resume button
function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
            <path
                d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

/**
 * A social link.
 */
function SocialLink({
    icon: Icon,
    ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props} target='_blank'>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

/**
 * The photos section.
 */
function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length],
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
/**
 * The full home page.
 */
export default async function Home() {
    let articles = (await getAllArticles()).slice(0, 4)

    return (
        <>
            {/* Introduction Section */}
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Software Engineer, tech enthusiast, fitness aficionado.
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I&apos;m Young, a software engineer who is currently pursuing a master&apos;s degree in Computer Science at Purdue University. I am based in San Fraencisco Bay Area. I&apos;m currently working at startup KeyByte LLC with Dr. Saurabh Bagchi and Dr. Somali Chaterji on some cutting edge database and VM tuning technologies.
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://www.linkedin.com/in/youngbryanyu/"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                        <SocialLink
                            href="https://github.com/youngbryanyu"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                    </div>
                </div>
            </Container>
            {/* Photos Section */}
            <Photos />
        </>
    )
}
