import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <h1>Vefforritun 2</h1>
        <nav>
          <Link to="/">Forsíða</Link> |{' '}
          <Link to="/admin">Admin</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>© 2026</p>
      </footer>
    </div>
  )
}