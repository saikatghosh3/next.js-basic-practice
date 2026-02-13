import Link from "next/link";
import { getPosts } from "@/lib/api";


export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>

      <div className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block rounded border p-3 hover:bg-red-500"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
