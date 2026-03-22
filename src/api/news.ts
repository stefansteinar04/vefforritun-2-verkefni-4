const API = import.meta.env.VITE_API_URL

export async function getNews(limit = 10, offset = 0) {
  const res = await fetch(`${API}/news?limit=${limit}&offset=${offset}`)

  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }

  return res.json()
}

export async function getNewsBySlug(slug: string) {
  const res = await fetch(`${API}/news/${slug}`)

  if (res.status === 404) {
    throw new Error('NOT_FOUND')
  }

  if (!res.ok) {
    throw new Error('Failed to fetch news item')
  }

  return res.json()
}

export async function createNews(data: {
  title: string
  excerpt: string
  content: string
  authorId: number
  published: boolean
}) {
  const res = await fetch(`${API}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (res.status === 400) {
    const json = await res.json()
    throw new Error(json.error ?? 'Bad request')
  }

  if (res.status >= 500) {
    throw new Error('Server villa kom upp')
  }

  if (!res.ok) {
    throw new Error('Ekki tókst að búa til frétt')
  }

  return res.json()
}