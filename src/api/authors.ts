const API = import.meta.env.VITE_API_URL

export async function getAuthors() {
  const res = await fetch(`${API}/authors`)

  if (!res.ok) {
    throw new Error('Failed to fetch authors')
  }

  return res.json()
}