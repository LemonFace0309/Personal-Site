import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import WorkExperience from '../components/WorkExperience'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
      </main>
      <footer></footer>
    </>
  )
}
