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
 * JSON-LD component for better indexing. This may offer more control over certain things in search indexing like the image to display along with the search result.
 */
const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
    return (
        <Head>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Head>
    );
};

// TODO: if new indexing doesn't work, move avatar image onto home page gallery. If doing that doesn't work,  edit comment above and let it be.

export default JsonLd;