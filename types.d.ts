type POST={
    id: number
    slug: string
    url: string
    title: string
    content: string
    image: string
    thumbnail: string
    status: string
    category: string
    publishedAt: string
    updatedAt: string
    userId: number
}

type COMMENTS={
    postId: number
    id: number
    userId: string
    comment: string
}