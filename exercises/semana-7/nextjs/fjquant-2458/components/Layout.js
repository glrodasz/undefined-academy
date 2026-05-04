import Head from 'next/head'
import Header from './Header'

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>Blog de perritos - {pagina}</title>
        <meta name="description" content="Generates by API dog" />
      </Head>
      <Header/>
      {children}
    </div>
  )
}

export default Layout