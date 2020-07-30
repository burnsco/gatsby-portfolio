import React from 'react'

import Layout from '../components/Layout'
import Hero from '../sections/Hero'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import MiniApps from '../sections/MiniApps'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'

export default function IndexPage() {
  return (
    <Layout>
      <Hero title="Home" />
      <Skills title="Skills" />
      <Projects title="Projects" />
      <MiniApps title="Apps" />
      <About title="About" />
      <Contact title="Contact" />
      <Footer />
    </Layout>
  )
}
