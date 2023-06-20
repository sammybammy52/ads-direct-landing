import Image from 'next/image'
import About from './components/About'
import CtaSection from './components/CtaSection'
import ExploreSection from './components/ExploreSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Newsletter from './components/Newsletter'
import Partners from './components/Partners'
import PopularAds from './components/PopularAds'

export default function Home() {
  return (
    <div className="">
      <NavBar/>
     <Hero/>
     <ExploreSection/>
     <About/>
     <PopularAds/>
     <CtaSection/>
     <Partners/>
     <Newsletter/>
     <Footer/>
    </div>
  )
}
