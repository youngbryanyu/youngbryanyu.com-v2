/**
 * Position interface.
 */
export interface Position {
    href: string;
    title: string;              /* Use university name for education section */
    organization: string;       /* Use degree name for education section */
    summaryList: string[];
    descriptionList: string[];
    date: string;
}

/**
 * Industry experiences.
 */
export const experiences: Position[] = [
    {
        href: "https://www.linkedin.com/company/stealth-startup-51/",
        title: "Software Engineer",
        organization: "Stealth Startup",
        summaryList: ["Building an automated NoSQL database tuning service to maximize performance and minimize cost with no downtime"],
        descriptionList: [
            "Developed and maintained several containerized microservices and REST APIs essential to the core product function. Created and maintained internal developer documentation and external customer documentation.",
            "Led the design and development of a backend orchestration service to process trace data from database clusters, predict future workload patterns, determine optimal cluster configurations, and dynamically apply database/VM reconfigurations to database clusters running on EC2 with no downtime. Decoupled scheduling and execution of reconfigurations using a Redis queue, handled I/O-bound tasks asynchronously, and used micro batch processing to maximize throughput.",
            "Built a CI/CD pipeline to automate unit testing, building/tagging/pushing Docker images, updating applications in multiple environments with zero-downtime rolling deployments, and managing infrastructure. Improved image build times by leveraging an external layer cache with BuildKit. Optimized overall pipeline efficiency by parallelizing independent pipeline steps, using shallow clones, caching dependencies, and processing commits in batches.",
            "Created and managed Docker Swarm mode clusters for container orchestration in multiple environments across multiple on-premise machines. Utilized an Nginx reverse proxy on manager nodes to route external HTTPS requests to the ingress routing mesh. Integrated Cloudflare for DNS and SSL/TLS management.",
            "Developed idempotent Ansible playbooks for installing dependencies on host machines, configuring network settings, setting up Nginx, deploying application updates, and managing Docker Swarm mode clusters. Ensured seamless cluster management by automating node operations (e.g., scaling up/down, promotion/demotion, labeling) based on inventory file changes.",
            "Set up monitoring with Prometheus and Grafana to track the performance metrics and health of all backend and infrastructure services. Set up alerts for when services reached an unhealthy state.",
            "Created a scheduled job to regularly aggregate and archive old time-series trace data collected from database clusters.",
            "Created a tool to simplify building, running, pruning, and management of Dockerized services locally, which significantly boosted developer productivity.",
            "Developed a web console for users to manage their accounts, connect their database clusters to our service, manage API keys, and view their database cluster metrics.",
            "Designed the schema for the PostgreSQL database, utilizing indexes to optimize for read queries. Leveraged TimescaleDB to efficiently index and partition time-series data. Implemented keyset pagination on paginated queries for efficiency.",
            "Developed a dashboard for administrators to manage user accounts, which includes managing access permissions, monitoring user activity, and performing account-level operations (e.g. deactivation, reactivation, etc).",
            "Technologies: AWS, Bash, Cassandra, Cloudflare, Docker, Docker Swarm mode, DNS, EC2, FastAPI, Fastify, GCP, Git, GitHub Actions, Grafana, HTTP, IAM, Linux, Next.js, Node.js, Nginx, Python, PostgreSQL, Prometheus, React, Redis, REST APIs, SSL/TLS, TimescaleDB, TypeScript",
        ],
        date: "May 2024 - Present",
    },
    {
        href: "https://www.amazon.com",
        title: "Software Development Engineer Intern",
        organization: "Amazon",
        summaryList: ["Alexa Food"],
        descriptionList: [
            "Designed and developed a backend service to automate data cleaning data across multiple databases through a decoupled event-driven orchestration workflow, resulting in a 99.97% increase in data cleaning speed, data quality improvement, and better recipe recommendations. Implemented the service's infrastructure (with IaC), CI/CD pipeline, business logic, unit tests, monitoring, and documentation.",
            "Migrated the team's AWS CDK utility library from the deprecated AWS CDK v1 to the latest AWS CDK v2, ensuring the utility library was up to date with AWS CDK v2 while maintaining continued support for existing services using AWS CDK v1.",
            "Technologies: AWS, CloudFormation, CloudWatch, DynamoDB, Elasticsearch, Git, Gradle, IAM, Java, Kibana, Lambda, Node.js, S3, SQS, Step Functions, TypeScript"
        ],
        date: "May 2023 - Aug 2023",
    },
    {
        href: "https://www.amazon.com",
        title: "Software Development Engineer Intern",
        organization: "Amazon",
        summaryList: ["Alexa Kitchen"],
        descriptionList: [
            "Designed and developed an ETL pipeline to ingest customer shopping data from unstructured logs and integrated the data into Alexa's recipe recommendation algorithm, resulting in more relevant recommendations which improved user engagement (25% increase in click-through rate).",
            "Fixed major bugs across several distributed backend services that caused incorrect aggregation of recipe search results from search filters and the display of irrelevant filters matching 0 search results, improving the relevance and accuracy of search filters.",
            "Implemented optimizations for the recipe recommendation system by adjusting recipe ranking based on image availability and refining Elasticsearch relevance score calculations.",
            "Utilized A/B testing to evaluate the impact of code changes while ensuring seamless rollout across different marketplaces and locales.",
            "Technologies: AWS, DynamoDB, Elasticsearch, Git, IAM, Java, Kibana, Lambda, S3",
        ],
        date: "May 2022 - Aug 2022",
    }
];

/**
 * Educations.
 */
export const educations: Position[] = [
    {
        href: "https://www.cs.purdue.edu/",
        title: "MS, Computer Science",
        organization: "Purdue University",
        summaryList: ["Coursework:"],
        descriptionList: [
            "CS 536: Data Communication And Computer Networks",
            "CS 541: Database Systems",
            "CS 573: Data Mining",
            "CS 593-MLT: Machine Learning Theory",
        ],
        date: "Aug 2024 - May 2026",
    },
    {
        href: "https://www.cs.purdue.edu/",
        title: "BS, Computer Science",
        organization: "Purdue University",
        summaryList: [
            "Entrepreneurship Student Ambassador",
            "Coursework:"
        ],
        descriptionList: [
            "CS 180: Problem Solving and Object-Oriented Programming",
            "CS 182: Foundations of Computer Science",
            "CS 240: Programming in C",
            "CS 250: Computer Architecture",
            "CS 251: Data Structures and Algorithms",
            "CS 252: Systems Programming",
            "CS 307: Software Engineering I",
            "CS 348: Information Systems",
            "CS 354: Operating Systems",
            "CS 381: Introduction To The Analysis Of Algorithms",
            "CS 407: Software Engineering Senior Project",
            "CS 408: Software Testing",
            "CS 422: Computer Networks",
            "CS 426: Computer Security",
        ],
        date: "Aug 2020 - Dec 2023",
    },
];