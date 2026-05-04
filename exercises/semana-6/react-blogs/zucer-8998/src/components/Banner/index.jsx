import { Layout } from '../../components'

import astronaut from '/src/assets/astronaut.png'

import './Banner.css'

const Banner = () => (
  <div className="banner">
    <Layout className="banner-body">
      <div className="banner-title">
        <h1 className="title-1">
          Hi 👋,I&apos;m
          <br />
          Julián Sucerquia
        </h1>
        <span className="badge">Web Developer</span>
      </div>
      <div className="banner-image">
        <img src={astronaut} alt="" />
      </div>
    </Layout>
  </div>
)

export default Banner
