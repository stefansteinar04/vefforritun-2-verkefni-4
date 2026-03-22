import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getNewsBySlug } from '../api/news'
import type { News } from '../types/news'

export default function NewsPage() {
  const { slug } = useParams()
  const [news, setNews] = useState<News | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      if (!slug) {
        setError('Frétt fannst ekki')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const data: News = await getNewsBySlug(slug)
        setNews(data)
      } catch (err) {
        if (err instanceof Error && err.message === 'NOT_FOUND') {
          setError('Frétt fannst ekki')
        } else {
          setError('Villa kom upp við að sækja frétt')
        }
      } finally {
        setLoading(false)
      }
    }

    void fetchNews()
  }, [slug])

  if (loading) return <p>Hleð frétt...</p>
  if (error) return <p>{error}</p>
  if (!news) return <p>Frétt fannst ekki</p>

  return (
    <article>
      <h2>{news.title}</h2>
      <p>{news.excerpt}</p>
      <p>
        <strong>Höfundur:</strong> {news.author.name}
      </p>
      <div>
        <p>{news.content}</p>
      </div>
    </article>
  )
}