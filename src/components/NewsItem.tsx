import { Link } from 'react-router-dom'
import type { News } from '../types/news'

type Props = {
  news: News
}

export default function NewsItem({ news }: Props) {
  return (
    <div className="news-item">
      <h3>
        <Link to={`/news/${news.slug}`}>{news.title}</Link>
      </h3>
      <p>{news.excerpt}</p>
      <small>Höfundur: {news.author.name}</small>
    </div>
  )
}