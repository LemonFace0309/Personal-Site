import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />  
      <main className="">{children}</main>
    </>
  )
}

export default Layout
