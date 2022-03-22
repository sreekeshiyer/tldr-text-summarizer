import Head from "next/head";

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="TLDR Text Summarizer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-[rgb(19,25,44)] text-white">{children}</div>
        </>
    );
}
