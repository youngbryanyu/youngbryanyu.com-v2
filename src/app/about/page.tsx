import { type Metadata } from 'next'
import Image from 'next/image'
import { VerboseSocialLink } from '@/components/SocialLinks'
import { Container } from '@/components/Container'
import {
    EmailIcon,
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import headshot from '@/images/about/headshot.jpg'
import { ResumeIcon } from '@/components/Icons'
import { LinkedText } from '@/components/Links'
import 'animate.css' /* Need to import in this class or reload doesn't animate */

/**
 * List of socials.
 */
const socials = [
    {
        href: "https://www.linkedin.com/in/youngbryanyu/",
        ariaLabel: "Connect on LinkedIn",
        icon: LinkedInIcon,
        label: "LinkedIn",
    },
    {
        href: "https://github.com/youngbryanyu",
        ariaLabel: "Connect on GitHub",
        icon: GitHubIcon,
        label: "GitHub",
    },
    {
        href: "mailto:youngyu19@gmail.com",
        ariaLabel: "Connect through email",
        icon: EmailIcon,
        label: "Email",
    },
    {
        href: "https://drive.google.com/file/d/1p-FvixBI4vU1n9HNTT0J_pcvMgQ7EQg-/view?usp=sharing",
        ariaLabel: "Resume",
        icon: ResumeIcon,
        label: "Resume",
    },
]

/**
 * Page metadata.
 */
export const metadata: Metadata = {
    title: 'About',
    description:
        "I'm Young Bryan Yu. I grew up in San Francisco Bay Area (more precisely, Silicon Valley, home of Apple). I was born in Montana (middle of nowhere), but my family moved to California when I was around 5. I am interested in distributed systems, databases, and cloud computing. Currently, I am pursuing a MS in Computer Science at Purdue University. I received my BS in Computer Science from Purdue University as well.  I am currently working at startup at KeyByte LLC on some cutting edge database and VM tuning technologies. I have also worked at Amazon building services for Alexa devices. When I am not working I enjoy working out and playing all kinds of sports. I also enjoy reading and dabble in poker. I love traveling and trying new foods. I used to do photography but the busyness of life has gotten to me and I haven't had too much time for it lately.",
}

/**
 * The about page.
 */
export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                {/* Photo of me */}
                <div className='animate__animated animate__fadeInUp'>
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none ">
                            <Image
                                src={headshot}
                                alt="Young Bryan Yu Headshot"
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>


                <div className="lg:order-first lg:row-span-2">
                    {/* Title */}
                    <div className='animate__animated animate__fadeInUp'>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            A little bit about myself.
                        </h1>
                    </div>

                    {/* About me */}
                    <div className='animate__animated animate__fadeInUp'>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                I&apos;m Young Bryan Yu. I grew up in San Francisco Bay Area (more precisely, Silicon Valley, home of Apple). I was born in Montana (middle of nowhere), but my family moved to California when I was around 5.
                            </p>
                            <p>
                                I am interested in distributed systems, databases, and cloud computing. Currently, I am pursuing a MS in Computer Science at {LinkedText("Purdue University", "https://www.purdue.edu")}. I received my BS in Computer Science from Purdue University as well.
                            </p>
                            <p>
                                I am currently working at startup at {LinkedText("KeyByte LLC", "https://www.keybyte.xyz")} on some cutting edge database and VM tuning technologies. I have also worked at {LinkedText("Amazon", "https://www.amazon.com")} building services for Alexa devices.
                            </p>
                            <p>
                                When I am not working I enjoy working out and playing all kinds of sports. I also enjoy reading and dabble in poker. I love traveling and trying new foods. I used to do photography but the busyness of life has gotten to me and I haven&apos;t had too much time for it lately.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Social Icons */}
                <div className="lg:pl-20">
                    <ul role="list">
                        {socials.map((link, index) => (
                            <div
                                key={index}
                                className="animate__animated animate__fadeInUp"
                                style={{
                                    animationDelay: `${index * 0.1}s` /* Stagger animations */
                                }}
                            >
                                <VerboseSocialLink
                                    href={link.href}
                                    icon={link.icon}
                                    aria-label={link.ariaLabel}
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
