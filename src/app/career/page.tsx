import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

import keybyteLogo from '@/images/career/keybyte.png'
import stealthLogo from '@/images/career/stealth.jpg'
import amazonLogo from '@/images/career/amazon.jpg'
import purdueLogo from '@/images/career/purdue.jpg'
import React from 'react'

import 'animate.css' /* Need to import in this class or reload doesn't animate */

/**
 * Page metadata.
 */
export const metadata: Metadata = {
    title: 'Career',
    description: "All my professional experiences and education so far, in chronological order. If you're curious, you can click on an entry to go to the organization's website.",
}

/**
 * Interface for a role within the `Experience` section.
 */
interface Role {
    company: string
    title: string
    logo: ImageProps['src']
    time: string
    description?: string
    link?: string
}

/**
 * A role within the `Experience` section.
 */
function Role({ role }: { role: Role }) {
    // Convert newlines to <br />
    const formatDescription = (description: string) => {
        return description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br style={{ lineHeight: '0.3em' }} />
            </React.Fragment>
        ))
    }

    return (
        <li className="relative group transition rounded-lg -m-2">
            <Link href={role.link || '#'} target="_blank" rel="noopener noreferrer" className="block p-6 m-2">
                {/* This empty div gives the hover outline effect */}
                <div className="absolute inset-0 z-0 transform scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 rounded-lg" />

                <div className="relative z-10 flex gap-4 items-center">

                    {/* The company logo */}
                    <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <Image
                            src={role.logo}
                            alt=""
                            className="h-11 w-11 rounded-full"
                            unoptimized
                        />
                    </div>
                    <dl className="flex flex-auto flex-wrap gap-x-2 items-center">

                        {/* The role name */}
                        <div className="flex items-baseline w-full">
                            <dt className="sr-only">Role</dt>
                            <dd className="text-m font-semibold text-zinc-900 dark:text-zinc-100">
                                {role.title}
                            </dd>
                            <dd
                                className="ml-auto text-sm text-zinc-400 dark:text-zinc-500"
                            >
                                <span>{role.time}</span>
                            </dd>
                        </div>

                        {/* The company */}
                        <dt className="sr-only">Company</dt>
                        <dd className="flex items-center w-full text-sm text-zinc-900 dark:text-zinc-100 mt-0.5 transition group-hover:text-teal-500">
                            {role.company}
                            {/* <ChevronRightIcon className="ml-0 h-4 w-4 stroke-current" /> */}
                        </dd>
                        {/* The description */}
                        {role.description && (
                            <dd
                                className="w-full text-sm text-zinc-500 dark:text-zinc-400 mt-0.5"
                            >
                                {formatDescription(role.description)}
                            </dd>
                        )}
                    </dl>
                </div>
            </Link>
        </li>
    )
}

/**
 * The `Experience` section.
 */
function Experience() {
    let resume: Array<Role> = [
        {
            company: 'Stealth Startup',
            // company: 'KeyByte LLC',
            title: 'Software Engineer Intern',
            logo: stealthLogo,
            // logo: keybyteLogo
            time: 'Summer 2024',
            description: 'Building the MVP',
            link: 'https://www.linkedin.com/company/stealth-startup-51/'
            // link: 'https://www.keybyte.xyz'
        },
        {
            company: 'Amazon',
            title: 'Software Development Engineer Intern',
            logo: amazonLogo,
            time: 'Summer 2023',
            description: 'Alexa Food',
            link: 'https://www.amazon.com'
        },
        {
            company: 'Amazon',
            title: 'Software Development Engineer Intern',
            logo: amazonLogo,
            time: 'Summer 2022',
            description: 'Alexa Kitchen',
            link: 'https://www.amazon.com'
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl ml-3">Experience</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
        </div>
    )
}

/**
 * The `Education` section.
 */
function Education() {
    let resume: Array<Role> = [
        {
            company: 'Purdue University',
            title: 'MS, Computer Science',
            logo: purdueLogo,
            time: '2024 - 2026',
            link: 'https://www.purdue.edu'
        },
        {
            company: 'Purdue University',
            title: 'BS, Computer Science',
            logo: purdueLogo,
            time: '2020 - 2023',
            description: 'Certificate in Entrepreneurship and Innovation',
            link: 'https://www.purdue.edu'
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-xl ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
        </div>
    )
}

/**
 * The career page.
 */
export default function Career() {
    return (
        <>
            <SimpleLayout
                title="My career so far."
                intro="All my professional experiences and education so far, in chronological order. If you're curious, you can click on an entry to go to the organization's website."
            >
            </SimpleLayout>
            
            {/* Experience Section */}
            <div className='animate__animated animate__fadeInUp'>
                <Container className="mt-12 md:mt-14">
                    <div className="mx-auto max-w-xl lg:max-w-none space-y-10">
                        <Experience />
                    </div>
                </Container>
            </div>

            {/* Education Section */}
            <div className='animate__animated animate__fadeInUp'>
                <Container className="mt-12 md:mt-14">
                    <div className="mx-auto max-w-xl lg:max-w-none space-y-10">
                        <Education />
                    </div>
                </Container>
            </div>
        </>
    )
}
