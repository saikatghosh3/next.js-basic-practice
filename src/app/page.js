import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <p className="mb-4">Welcome to Simple Next.js Blog</p>

      <Link
        href="/posts"
        className="inline-block rounded bg-blue-600 px-4 py-2 text-white"
      >
        Go to Posts
      </Link>
    </main>
  );
}
