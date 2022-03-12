import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout title="TLDR">
      <main className="flex min-h-[92vh] w-full flex-col items-center justify-center bg-gray-100">
        <h1 className="text-[3rem]">
          Welcome to{" "}
          <a
            className="text-[#0070f3] hover:underline focus:underline active:underline"
            href="https://nextjs.org"
          >
            Next.js!
          </a>
        </h1>

        <p className="m-4 text-center text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-[#fafafa] p-3 text-[1.1rem]">
            pages/index.js
          </code>
        </p>

        <div className="flex max-w-[800px] flex-wrap items-center justify-center sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="m-4 max-w-[300px] rounded-lg border-2 border-solid border-[#eaeaea] p-[1.15rem] text-left text-inherit transition-colors duration-150 ease-in-out hover:text-[#0070f3] focus:text-[#0070f3] active:text-[#0070f3]"
          >
            <h2 className="mb-4 text-2xl">Documentation &rarr;</h2>
            <p className="text-[1.15rem]">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 max-w-[300px] rounded-lg border-2 border-solid border-[#eaeaea] p-[1.15rem] text-left text-inherit transition-colors duration-150 ease-in-out hover:text-[#0070f3] focus:text-[#0070f3] active:text-[#0070f3]"
          >
            <h2 className="mb-4 text-2xl">Learn &rarr;</h2>
            <p className="text-[1.15rem]">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="m-4 max-w-[300px] rounded-lg border-2 border-solid border-[#eaeaea] p-[1.15rem] text-left text-inherit transition-colors duration-150 ease-in-out hover:text-[#0070f3] focus:text-[#0070f3] active:text-[#0070f3]"
          >
            <h2 className="mb-4 text-2xl">Examples &rarr;</h2>
            <p className="text-[1.15rem]">
              Discover and deploy boilerplate example Next.js products
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 max-w-[300px] rounded-lg border-2 border-solid border-[#eaeaea] p-[1.15rem] text-left text-inherit transition-colors duration-150 ease-in-out hover:text-[#0070f3] focus:text-[#0070f3] active:text-[#0070f3]"
          >
            <h2 className="mb-4 text-2xl">Deploy &rarr;</h2>
            <p className="text-[1.15rem]">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="border-t-solid flex items-center justify-center border-t-2 border-t-[#eaeaea] py-8">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 flex h-[1em] items-center">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Layout>
  );
}
