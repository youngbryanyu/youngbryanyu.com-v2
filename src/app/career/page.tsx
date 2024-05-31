import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

import keybyteLogo from '@/images/home/keybyteLogo.png'
import amazonLogo from '@/images/home/amazonLogo.jpg'
import purdueLogo from '@/images/home/purdueLogo.jpg'
import { BriefcaseIcon, GraduationCapIcon } from '@/components/Icons'
import React from 'react'

/**
 * Page metadata.
 */
export const metadata: Metadata = {
    title: 'About',
    description: 'My Experiences.',
}

/**
 * Interface for a role within the `Experience` section.
 */
interface Role {
    company: string
    title: string
    logo: ImageProps['src']
    start: string | { label: string; dateTime: string }
    end: string | { label: string; dateTime: string }
    description?: string
    link?: string
}

/**
 * A role within the `Experience` section.
 */
function Role({ role }: { role: Role }) {
    let startLabel =
        typeof role.start === 'string' ? role.start : role.start.label
    let startDate =
        typeof role.start === 'string' ? role.start : role.start.dateTime

    let endLabel =
        typeof role.end === 'string' ? role.end : role.end.label
    let endDate =
        typeof role.end === 'string' ? role.end : role.end.dateTime

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
                <div className="absolute inset-0 z-0 transform scale-95 bg-zinc-100 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 rounded-lg" />
                <div className="relative z-10 flex gap-4 items-center">
                    {/* The company logo */}
                    <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <Image
                            src={role.logo}
                            alt=""
                            className="h-9 w-9 rounded-full"
                            unoptimized
                        />
                    </div>
                    <dl className="flex flex-auto flex-wrap gap-x-2 items-center">
                        {/* The role name */}
                        <div className="flex items-baseline w-full">
                            <dt className="sr-only">Role</dt>
                            <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.title}
                            </dd>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${startLabel} until ${endLabel}`}
                            >
                                <time dateTime={startDate}>{startLabel}</time>{' '}
                                <span aria-hidden="true">—</span>{' '}
                                <time dateTime={endDate}>{endLabel}</time>
                            </dd>
                        </div>
                        {/* The company */}
                        <dt className="sr-only">Company</dt>
                        <dd className="w-full text-xs text-zinc-900 dark:text-zinc-100 mt-0.5">
                            {role.company}
                        </dd>
                        {/* The description */}
                        {role.description && (
                            <dd
                                className="w-full text-xs text-zinc-500 dark:text-zinc-400 mt-0.5"
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
            company: 'KeyByte LLC',
            title: 'Software Engineer Intern',
            logo: keybyteLogo,
            start: 'Nov 2020',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
            description: 'Working on OptimusCloud',
            link: 'https://www.keybyte.com'
        },
        {
            company: 'Amazon',
            title: 'Software Development Engineer Intern',
            logo: amazonLogo,
            start: 'Aug 2023',
            end: 'Mar 2023',
            description: 'Alexa Food',
            link: 'https://www.amazon.com'
        },
        {
            company: 'Amazon',
            title: 'Software Development Engineer Intern',
            logo: amazonLogo,
            start: 'Aug 2023',
            end: 'Mar 2023',
            description: 'Alexa Kitchen',
            link: 'https://www.amazon.com'
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Experience</span>
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
            start: 'Nov 2020',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear().toString(),
            },
            link: 'https://www.purdue.edu'
        },
        {
            company: 'Purdue University',
            title: 'BS, Computer Science',
            logo: purdueLogo,
            start: 'Aug 2020',
            end: 'Dec 2023',
            description: 'Certificate in Entrepreneurship and Innovation',
            link: 'https://www.purdue.edu'
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <GraduationCapIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Education</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <Role key={roleIndex} role={role} />
                ))}
            </ol>
        </div>
    )
}

export default function Career() {
    return (
        <>
            <SimpleLayout
                title="My career so far."
                intro="All my professional experiences and education so far, collected in chronological order."
            >
            </SimpleLayout>
            {/* Experience Section */}
            <Container className="mt-12 md:mt-14">
                <div className="mx-auto max-w-xl lg:max-w-none">
                    <div className="space-y-10">
                        <Experience />
                    </div>
                </div>
            </Container>
            {/* Education Section */}
            <Container className="mt-12 md:mt-14">
                <div className="mx-auto max-w-xl lg:max-w-none">
                    <div className="space-y-10">
                        <Education />
                    </div>
                </div>
            </Container>
        </>
    )
}
