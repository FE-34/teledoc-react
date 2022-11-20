import MaleDoctor from '../assets/Male-Doctor.svg'
import { useSelector } from 'react-redux'

function Header({link}) {
    const acc = useSelector(state => state.login)
    console.log(acc)
  return (
    <header className="homepage-header">
        <div id="header-left">
            <div>
                <img src={MaleDoctor} alt="Male Doctor" />
            </div>
        </div>
        <div id="header-right">
            <div>
                <p name="find-doctor">Temukan Dokter</p>
                <h1>Konsultasi Dengan Pilihan Dokter Kompeten Ada Di Sini</h1>
                <p name="recommendation">Lihat rekomendasi dokter dan mulai konsultasi sekarang</p>
            </div>
            <div>
                <a href={link}>Lihat Dokter</a>
            </div>
        </div>
    </header>
  )
}

export default Header