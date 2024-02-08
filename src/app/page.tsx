import Header from '../app/components/header'
import DiveIntoBody from '../app/components/diveIntoBody'
import Contact from '../app/components/contact'
import Intro from './components/intro'
import AboutHydra from './components/aboutHydra'
import BoxesData from './components/middleBoxes'
import FooterLegLady from './components/footerLegLady'
import WhyBuildHydra from './components/whyBuildHydra'
import Flowchart from './components/flowchart'
import HydraForm from './components/hydraForm'
import Footer from './components/footer'
export default function Home() {
  return (
    <div className="bg-[#343045] text-slate-200">
      <Header />
      <DiveIntoBody />
      <br />
      <Contact />
      <Intro />
      <AboutHydra />
      <BoxesData />
      <FooterLegLady />
      <WhyBuildHydra />
      <Flowchart />
      <HydraForm />
      <Footer />
    </div>
  )
}
