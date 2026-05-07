import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import About from '@/components/Home/About'
import Packages from '@/components/Home/Packages'
import Reviews from '@/components/Home/Reviews'
import Contact from '@/components/Home/Contact'

const Main = () => {
  return (
    <div>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Reviews />
        <Contact />
    </div>
  )
}

export default Main