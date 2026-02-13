import { getPost } from "@/lib/api";

export default async function PostDetailsPage({ params }) {
  // unwrap the promise
  const { id } = await params;

  if (!id) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">No post ID provided</h1>
      </main>
    );
  }

  const post = await getPost(id);

  if (!post) {
    return (
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <p className="text-red-500">The post with ID {id} does not exist.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </main>
  );
}
