// components/JsonLd.tsx
import React from 'react';
import Head from 'next/head';

/**
 * JSON-LD interface.
 */
interface JsonLdProps {
    data: Record<string, any>;
}

/**
 * JSON-LD component for SEO.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
            />

        </Head>
    );
};

export default JsonLd;
