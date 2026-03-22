import { useEffect, useState } from 'react'
import { getNews } from '../api/news'
import type { News, NewsResponse } from '../types/news'
import NewsList from '../components/NewsList'
import Pagination from '../components/Pagination'

export default function HomePage() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [limit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const data: NewsResponse = await getNews(limit, offset)
        setNews(data.data)
        setTotal(data.paging.total)
      } catch {
        setError('Villa við að sækja fréttir')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [limit, offset])

  function handlePrevious() {
    setOffset((current) => Math.max(0, current - limit))
  }

  function handleNext() {
    setOffset((current) => current + limit)
  }

  if (loading) return <p>Hleð...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h2>Fréttir</h2>
      <NewsList news={news} />
      <Pagination
        offset={offset}
        limit={limit}
        total={total}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  )
}