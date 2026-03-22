import type { News } from '../types/news'
import NewsItem from './NewsItem'

type Props = {
  news: News[]
}

export default function NewsList({ news }: Props) {
  return (
    <div className="news-list">
      {news.map((n) => (
        <NewsItem key={n.id} news={n} />
      ))}
    </div>
  )
}