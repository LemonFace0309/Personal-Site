import Header from '../components/Navigation/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
