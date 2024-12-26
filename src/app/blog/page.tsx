import Link from "next/link";

interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

const Blog = async () => {
  const data = await fetch("https://dummyjson.com/posts");
  const result = await data.json();

  return (
    <div>
      <h2>Segment</h2>
      <ul>
        {result.posts.map((post: IPost) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
