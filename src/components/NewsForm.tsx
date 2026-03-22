import { useEffect, useState } from 'react'
import { getAuthors } from '../api/authors'
import { createNews } from '../api/news'
import type { Author, AuthorsResponse } from '../types/author'

export default function NewsForm() {
  const [authors, setAuthors] = useState<Author[]>([])
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [published, setPublished] = useState(false)

  const [loadingAuthors, setLoadingAuthors] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAuthors() {
      try {
        const data: AuthorsResponse = await getAuthors()
        setAuthors(data.data)
      } catch {
        setError('Tókst ekki að sækja höfunda')
      } finally {
        setLoadingAuthors(false)
      }
    }

    void fetchAuthors()
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setSubmitting(true)
    setError(null)
    setSuccess(null)

    try {
      await createNews({
        title,
        excerpt,
        content,
        authorId: Number(authorId),
        published,
      })

      setSuccess('Frétt var búin til')
      setTitle('')
      setExcerpt('')
      setContent('')
      setAuthorId('')
      setPublished(false)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Óþekkt villa kom upp')
      }
    } finally {
      setSubmitting(false)
    }
  }

  if (loadingAuthors) return <p>Hleð höfundum...</p>

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titill</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={200}
        />
      </div>

      <div>
        <label htmlFor="excerpt">Útdráttur</label>
        <input
          id="excerpt"
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          required
          maxLength={300}
        />
      </div>

      <div>
        <label htmlFor="content">Efni</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={8}
        />
      </div>

      <div>
        <label htmlFor="author">Höfundur</label>
        <select
          id="author"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          required
        >
          <option value="">Veldu höfund</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="published">Útgefin</label>
        <input
          id="published"
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
        />
      </div>

      <button type="submit" disabled={submitting}>
        {submitting ? 'Vista...' : 'Búa til frétt'}
      </button>

      {success && <p>{success}</p>}
      {error && <p>{error}</p>}
    </form>
  )
}