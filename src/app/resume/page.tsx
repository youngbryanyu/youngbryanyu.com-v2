import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SimpleLayoutWithLinks } from '@/components/SimpleLayoutWithLinks'
import Link from 'next/link'
import { LinkedText, LinkedTextTeal } from '@/components/Links'
import { ChevronRightIcon } from '@/components/Icons'

/**
 * The speaking section page in the template. Currently unused.
 */
function Position({
    title,
    organization,
    summary,
    descriptionList,
    date,
    href,
}: {
    title: string
    organization: string
    summary: string
    descriptionList: string[]
    date: string
    href: string
}) {
    return (
        <article className="md:grid md:grid-cols-4 md:items-baseline">
            <Card className="md:col-span-3">
                {/* Position Title */}
                <Card.Title href={`${href}`}>{title}</Card.Title>

                {/* Organization Name */}
                <Card.Subtitle>{organization}</Card.Subtitle>

                {/* Position Summary */}
                <Card.Description>{summary}</Card.Description>

                {/* Position Descriptions */}
                <Card.DescriptionList items={descriptionList} />
            </Card>
            <Card.Eyebrow
                as="time"
                // dateTime={"date??"}
                className="mt-1 hidden md:block"
            >
                {date}
            </Card.Eyebrow>
        </article>
    )
}

export const metadata: Metadata = {
    title: 'Resume.',
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
                    <br/> 
                    {LinkedTextTeal("PDF Version", "https://drive.google.com/file/d/19htqvv_xU_dVxawwc3YR0-TiMeeHV8Vr/view")}
                </>
            }
        >
            <div className="space-y-20">
                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div className="flex max-w-3xl flex-col space-y-16">
                        <Position
                            href="https://www.linkedin.com/company/stealth-startup-51/"
                            title="Software Engineer"
                            organization="Stealth Startup" // KeyByte LLC
                            summary="Building a service to dynamically reconfigure heterogeneous database clusters in the cloud for optimal performance and cost with no downtime"
                            descriptionList={[
                                "Led the design and development of a backend orchestration service to process trace data from database clusters, predict future workloads and optimal cluster configurations, and dynamically apply database/VM reconfigurations to database clusters running on EC2 with no downtime. Decoupled scheduling and execution of reconfigurations using a Redis queue, handled I/O-bound tasks asynchronously, and used micro batch processing to maximize throughput.",
                                "Built a CI/CD pipeline to automate unit testing, building/tagging/pushing Docker images, rolling deployment of Docker containers, and infrastructure management. Parallelized builds and leveraged an external cache with BuildKit for faster builds. Processed commits in batches, parallelized independent pipeline steps, and cached dependencies to improve build times.",
                                "Created and managed a Docker Swarm mode cluster for container orchestration across multiple on-premise machines. Utilized an Nginx reverse proxy on manager nodes to route external HTTPS requests to the ingress routing mesh. Integrated Cloudflare for DNS and SSL/TLS management.",
                                "Developed idempotent Ansible playbooks for installing dependencies on host machines, configuring network settings, setting up Nginx, deploying Docker containers, and managing the Docker Swarm mode cluster. Ensured seamless cluster management by automating node operations (e.g., removal, promotion, labeling) based on inventory file changes. Utilized rolling deployments of containers with new image versions to ensure zero downtime.",
                                "Set up monitoring with Prometheus and Grafana to track the performance metrics and health of all backend and infrastructure services. Set up alerts for when services reached an unhealthy state.",
                                "Created a scheduled job to regularly aggregate and archive old time-series trace data.",
                                "Created a tool to simplify building, running, pruning, and management of Dockerized services locally, which significantly boosted developer productivity.",
                                "Developed an interactive console for users to manage their accounts, and a dashboard for users to view their database cluster metrics.",
                                "Designed the schema for the PostgreSQL database, utilizing indexes to optimize for read queries. Leveraged TimescaleDB to efficiently index and partition time-series data. Implemented keyset pagination on paginated queries for efficiency.",
                                "Technologies: AWS, Bash, Cassandra, Docker, Docker Swarm Mode, DNS, EC2, FastAPI, Fastify, Git, GitHub Actions, Grafana, HTTP, IAM, Linux, Next.js, Node.js, Nginx, Python, PostgreSQL, Prometheus, React, Redis, REST APIs, SSL/TLS, TimescaleDB, TypeScript",
                            ]}
                            date="May 2024 - Present"
                        />
                        <Position
                            href="https://www.amazon.com"
                            title="Software Development Engineer Intern"
                            organization="Amazon"
                            summary="Alexa Food"
                            descriptionList={[
                                "Designed and developed a backend microservice to automate data cleaning data across multiple databases through a decoupled event-driven orchestration workflow, resulting in a 99.97% increase in data cleaning speed, data quality improvement, and better recipe recommendations. Implemented the service's infrastructure (with IaC), CI/CD pipeline, business logic, unit tests, monitoring, and documentation",
                                "Migrated the team's AWS CDK utility library from the deprecated AWS CDK v1 to the latest AWS CDK v2, ensuring the utility library was up to date with AWS CDK v2 while maintaining continued support for existing services using AWS CDK v1.",
                                "Technologies: AWS, CloudFormation, CloudWatch, DynamoDB, Elasticsearch, Git, Gradle, IAM, Java, Kibana, Lambda, Node.js, S3, SQS, Step Functions, TypeScript"
                            ]}
                            date="May 2023 - Aug 2023"
                        />
                        <Position
                            href="https://www.amazon.com"
                            title="Software Development Engineer Intern"
                            organization="Amazon"
                            summary="Alexa Kitchen"
                            descriptionList={[
                                "Designed and developed an ETL pipeline to ingest customer shopping data from unstructured logs and integrated the data into Alexa's recipe recommendation algorithm, resulting in more relevant recommendations which improved user engagement (25% increase in click-through rate).",
                                "Fixed major bugs across several distributed backend services that caused incorrect aggregation of recipe search results from search filters and the display of irrelevant filters matching 0 search results, improving the relevance and accuracy of search filters.",
                                "Implemented optimizations for the recipe recommendation system by adjusting recipe ranking based on image availability and refining Elasticsearch relevance score calculations.",
                                "Utilized A/B testing to evaluate the impact of code changes while ensuring seamless rollout across different marketplaces and locales.",
                                "Technologies: AWS, DynamoDB, Elasticsearch, Git, IAM, Java, Kibana, Lambda, S3",
                            ]}
                            date="May 2022 - Aug 2022"
                        />
                    </div>
                </div>
            </div>
        </SimpleLayoutWithLinks>
    )
}