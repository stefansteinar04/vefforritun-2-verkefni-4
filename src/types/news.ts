import type { Paging } from './paging'

export type Author = {
  id: number
  name: string
}

export type News = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: Author
}

export type NewsResponse = {
  data: News[]
  paging: Paging
}