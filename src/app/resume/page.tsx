import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayoutWithLinks } from '@/components/SimpleLayoutWithLinks'
import { LinkedTextTeal } from '@/components/Links'
import { experiences, educations, Position } from '@/app/resume/data'

const RESUME_PDF_URL = "https://drive.google.com/file/d/1Yz8X71hB1UI8qQg5yL3A4w3Us1KNLphf/view?usp=drive_link"

/**
 * A position component.
 */
function PositionComponent({
    title,
    organization,
    summaryList,
    descriptionList,
    date,
    href,
}: Position) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                {/* Position Title */}
                <Card.Title href={href}>{title}</Card.Title>

                {/* Organization Name */}
                <Card.Subtitle>{organization}</Card.Subtitle>

                {/* Position Summary */}
                <Card.DescriptionList items={summaryList} />

                {/* Position Descriptions */}
                <Card.DescriptionBulletList items={descriptionList} />
            </Card>
            <Card.Eyebrow
                as="time"
                // dateTime={date} Uncomment this if you have a proper date format
                className="mt-1 hidden md:block"
            >
                {date}
            </Card.Eyebrow>
        </article>
    )
}

/* Page metadata */
export const metadata: Metadata = {
    title: 'Resume',
    description:
        'A detailed resume describing my professional experiences. Check out the PDF version.',
}

export default function Resume() {
    return (
        <SimpleLayoutWithLinks
            title="My resume."
            intro={
                <>
                    A detailed resume describing my professional experiences.
                    <br />
                    {LinkedTextTeal({ text: "PDF Version", link: RESUME_PDF_URL })}
                </>
            }
        >
            {/* Experience title */}
            <h2 className="flex font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-2xl mb-5 ml-5">Experience</span>
            </h2>

            {/* Experience list */}
            <div className="space-y-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {experiences.map((position) => (
                            <PositionComponent key={position.title} {...position} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Gap */}
            <div className="h-16" />

            {/* Education title */}
            <h2 className="flex font-semibold text-zinc-900 dark:text-zinc-100">
                <span className="text-2xl mb-5 ml-5">Education</span>
            </h2>

            {/* Education list */}
            <div className="space-y-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        {educations.map((position) => (
                            <PositionComponent key={position.title} {...position} />
                        ))}
                    </div>
                </div>
            </div>
        </SimpleLayoutWithLinks>
    )
}
