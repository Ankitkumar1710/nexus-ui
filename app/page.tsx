import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import CareersForm from './components/JobApplyForm'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'



export default function Home() {
  return (
    <div className="min-h-screen">

      <Header />

      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Industries />
        <CareersForm/>
        <WhyChooseUs />
        <FAQ/>
        <Contact />
      </main>
      <Footer />

    </div>
  )
}
