import { type Metadata } from 'next'
import Image from 'next/image'
import { VerboseSocialLink } from '@/components/SocialLinks'
import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/about/portrait.jpg'
import { MailIcon, ResumeIcon } from '@/components/Icons'

export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Young Bryan Yu. I live in San Francisco Bay Area, where I engineer the future.',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

                {/* Photo of me */}
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>

                {/* Title and about me */}
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        I’m Young Bryan Yu.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I live in San Francisco Bay Area.
                        </p>
                        <p>
                            Currently, I am pursuing a MS in Computer Science at Purdue University. I received my BS in Computer Science from Purdue University as well. I am interested in distributed systems, databases, and computing.
                        </p>
                        <p>
                            I am currently working at startup at KeyByte LLC on database and VM tuning technologies. I have also worked at Amazon building services for Alexa devices.
                        </p>
                        <p>
                            When I am not working I enjoy working out and playing all kinds of sports. I also enjoy reading and dabble in poker. I love traveling as well.
                        </p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="lg:pl-20">
                    <ul role="list">
                        <VerboseSocialLink
                            href="https://www.linkedin.com/in/youngbryanyu/"
                            icon={LinkedInIcon}
                            className="mt-4"
                        >
                            LinkedIn
                        </VerboseSocialLink>
                        <VerboseSocialLink
                            href="https://github.com/youngbryanyu"
                            icon={GitHubIcon}
                            className="mt-4"
                        >
                            GitHub
                        </VerboseSocialLink>
                        <VerboseSocialLink
                            href="mailto:youngyu19@gmail.com"
                            icon={MailIcon}
                            className='mt-4'
                        >
                            youngyu19@gmail.com
                        </VerboseSocialLink>
                        <VerboseSocialLink
                            href="https://drive.google.com/file/d/1p-FvixBI4vU1n9HNTT0J_pcvMgQ7EQg-/view?usp=sharing"
                            icon={ResumeIcon}
                            className='mt-4'
                        >
                            Resume
                        </VerboseSocialLink>
                    </ul>
                </div>

            </div>
        </Container>
    )
}
