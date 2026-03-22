export type Author = {
  id: number
  name: string
  email?: string
}

export type AuthorsResponse = {
  data: Author[]
  paging: {
    limit: number
    offset: number
    total: number
  }
}