import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import amazonLogo from '@/images/home/amazonLogo.jpg'

/**
 * The speaking section page in the template. Currently unused.
 */

function SpeakingSection({
    children,
    ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
    return (
        <Section {...props}>
            <div className="space-y-16">{children}</div>
        </Section>
    )
}

function Position({
    title,
    organization,
    description,
    event,
    cta,
    href,
}: {
    title: string
    organization: string
    description: string
    event: string
    cta: string
    href: string
}) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">

            <Card className="md:col-span-3">
                {/* Company Logo */}
                {/* <div className="mb-2 relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                        src={amazonLogo}
                        alt=""
                        className="h-11 w-11 rounded-full"
                        unoptimized
                    />
                </div> */}
                {/* Position Title */}
                <Card.Title href={`${href}`}>{title}</Card.Title>
                {/* Organization Name */}
                <Card.Subtitle>{organization}</Card.Subtitle>
                <Card.Description>{description}</Card.Description>
            </Card>
            <Card.Eyebrow
                as="time"
                dateTime={"date??"}
                className="mt-1 hidden md:block"
            >
                {"May 2022 - Aug 2023"}
            </Card.Eyebrow>

        </article>
    )
}

export const metadata: Metadata = {
    title: 'Speaking',
    description:
        'I’ve spoken at events all around the world and been interviewed for many podcasts.',
}

export default function Speaking() {
    return (
        <SimpleLayout
            title="My speaking so far."
            intro="All my professional experiences and education so far, collected in chronological order."
        >
            <div className="space-y-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    {/* Try to get like Articles */}
                    <div className="flex max-w-3xl flex-col space-y-16">
                        <Position href="https://www.keybyte.xyz"
                            title="Software Development Engineer Intern"
                            organization="KeyByte LLC"
                            description="Building OptimusCloud."
                            event="Amazon"
                            cta="Amazon" />
                        <Position href="https://www.amazon.com"
                            title="Software Development Engineer Intern"
                            organization="Amazon"
                            description="Alexa Food"
                            event="Amazon"
                            cta="Amazon" />
                        <Position href="https://www.amazon.com"
                            title="Software Development Engineer Intern"
                            organization="Amazon"
                            description="Alexa Kitchen"
                            event="Amazon"
                            cta="Amazon" />
                    </div>
                </div>
            </div>
        </SimpleLayout>
    )
}
