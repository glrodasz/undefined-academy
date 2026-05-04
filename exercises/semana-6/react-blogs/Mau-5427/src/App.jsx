import React from 'react'
import Nav from './components/Nav'
import IntroPosts from './components/IntroPosts'
import PostsList from './components/PostsList'

function App() {

  return (
    <>
      <Nav></Nav>
      <main>
        <IntroPosts></IntroPosts>
        <PostsList></PostsList>
      </main>
    </>
  )
}

export default App
