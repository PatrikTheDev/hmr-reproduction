import '../styles/globals.css'
import { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>My App</h1>
      {children}
    </div>
  )
}

export default Layout
