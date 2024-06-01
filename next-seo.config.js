let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export default {
    title: 'Young Bryan Yu',
    description: "Young Bryan Yu's Home Page",
    openGraph: {
      type: 'website',
      url: 'https://youngbryanyu.com',
      title: 'Young Bryan Yu',
      description: "Young Bryan Yu's Home Page",
      images: [
        {
          url: 'https://youngbryanyu.com/avatar.jpg',
          width: 800,
          height: 600,
          alt: 'Young Bryan Yu',
        },
      ],
    },
    additionalMetaTags: [
      {
        name: 'author',
        content: 'Young Bryan Yu',
      },
    ],
    additionalLinkTags: [
      {
        rel: 'icon',
        href: `${siteUrl}/favicon.ico`,
      },
    ],
    jsonLd: {
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Young Bryan Yu",
      "alternateName": "Young Yu",
      "url": "https://youngbryanyu.com",
      "sameAs": [
        "https://www.linkedin.com/in/youngbryanyu",
        "https://www.github.com/youngbryanyu"
      ]
    }
  };
  