import Header from '../components/Header'
import Nav from '../components/Nav'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import '../pages/Homepage.css'
import Copyright from '../components/Copyright'

function Homepage() {

  return (
    <>
        <Nav/>
        <Header link={"/login"} />
        <AboutUs/>
        <Footer/>
        <Copyright/>
    </>
  )
}

export default Homepage