import { type Metadata } from 'next'
import Image from 'next/image'
import { VerboseSocialLink } from '@/components/SocialLinks'
import { Container } from '@/components/Container'
import {
    EmailIcon,
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/about/portrait.jpg'
import { ResumeIcon } from '@/components/Icons'
import { LinkedText } from '@/components/Links'
import 'animate.css' /* Need to import in this class or reload doesn't animate */


/**
 * Page metadata.
 */
export const metadata: Metadata = {
    title: 'About',
    description:
        'I’m Young Bryan Yu. I live in San Francisco Bay Area.',
}

/**
 * The about page.
 */
export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">

                {/* Photo of me */}
                <div className="lg:pl-20">
                    {/* Using animation in parent class doesn't override rotation of image */}
                    <div className="max-w-xs px-2.5 lg:max-w-none animate__animated animate__fadeInRight">
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
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl animate__animated animate__fadeInUp">
                        I’m Young Bryan Yu.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 animate__animated animate__fadeInUp">
                        <p>
                            I live in San Francisco Bay Area.
                        </p>
                        <p>
                            Currently, I am pursuing a MS in Computer Science at {LinkedText("Purdue University", "https://www.purdue.edu")}. I received my BS in Computer Science from Purdue University as well. I am interested in distributed systems, databases, and computing.
                        </p>
                        <p>
                            I am currently working at startup at {LinkedText("KeyByte LLC", "https://www.keybyte.xyz")} on database and VM tuning technologies. I have also worked at {LinkedText("Amazon", "https://www.amazon.com")} building services for Alexa devices.
                        </p>
                        <p>
                            When I am not working I enjoy working out and playing all kinds of sports. I also enjoy reading and dabble in poker. I love traveling as well.
                        </p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="lg:pl-20">
                    <ul role="list">
                        {[
                            {
                                href: "https://www.linkedin.com/in/youngbryanyu/",
                                icon: LinkedInIcon,
                                label: "LinkedIn",
                            },
                            {
                                href: "https://github.com/youngbryanyu",
                                icon: GitHubIcon,
                                label: "GitHub",
                            },
                            {
                                href: "mailto:youngyu19@gmail.com",
                                icon: EmailIcon,
                                label: "youngyu19@gmail.com",
                            },
                            {
                                href: "https://drive.google.com/file/d/1p-FvixBI4vU1n9HNTT0J_pcvMgQ7EQg-/view?usp=sharing",
                                icon: ResumeIcon,
                                label: "Resume",
                            },
                        ].map((link, index) => (
                            <div
                                key={index}
                                className="animate__animated animate__fadeInUp"
                                style={{ animationDelay: `${index * 0.1}s` }} /* Delay for staggered effect */
                            >
                                <VerboseSocialLink
                                    href={link.href}
                                    icon={link.icon}
                                    className="mt-4"
                                >
                                    {link.label}
                                </VerboseSocialLink>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>
        </Container>
    )
}
