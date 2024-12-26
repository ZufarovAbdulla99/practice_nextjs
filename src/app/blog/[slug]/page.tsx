const slug = async ({
    params,
  }: {
    params: { slug: string }
  }) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.slug}`)
  const post = await response.json()

  return (
    <div>
        Leaf segment: {params.slug}
        <p>{post.body}</p>
    </div>
  )
}

export default slug