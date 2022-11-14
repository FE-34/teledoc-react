import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import '../components/Homepage.css'
import TeleDocLogo from '../assets/TeleDoc-logo.svg'
import MaleDoctor from '../assets/Male-Doctor.svg'
import MaleFemaleDoctor from '../assets/Group-86.svg'
import Copyright from '../components/Copyright'

function Homepage() {

  return (
    <>
        <Nav TeleDocLogo={TeleDocLogo} />
        <Header MaleDoctor={MaleDoctor} link={"/login"} />
        <AboutUs MaleFemaleDoctor={MaleFemaleDoctor} />
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Homepage