import React from "react"
import Layout from "../components/Layout"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"
import Hero from "../sections/Hero"
import MiniApps from "../sections/MiniApps"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"

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
