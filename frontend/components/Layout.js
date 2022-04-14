import Head from "next/head";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="TLDR Text Summarizer" />
                <meta
                    name="google-site-verification"
                    content="No9LiZohp8gQ1mxx46zISCzQveI4G69fnWW8O93NjR0"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-[rgb(19,25,44)] text-white">{children}</div>
        </>
    );
}
