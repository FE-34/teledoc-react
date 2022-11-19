import { Icon } from 'react-icons-kit'
import {user} from 'react-icons-kit/feather/user'
import {ic_logout} from 'react-icons-kit/md/ic_logout'
import { Link } from 'react-router-dom'

function ProfilMenu({style1}) {
  return (
    <div className="col-4 bg-white">
        <div className='profil-left'>
            <ul>
                <li className='my-4 border border-0 profil-menu' style={{backgroundColor: style1}}>
                    <div className="row align-items-center">
                        <div className='col-1 w-auto'><Icon className='profil-icon' icon={user} size={'100%'} /></div>
                        <div className='col'><span className='profil-menu-title'>Profil Saya</span></div>
                    </div>
                </li>
                <li className='my-4'>
                    <div className="row ms-2">
                        <div className='bg-black bg-opacity-10 horizontal-rule'></div>
                    </div>
                </li>
                <Link to={'/'}>
                    <li className='my-4 border border-0 profil-menu'>
                        <div className="row align-items-center">
                            <div className='col-1 w-auto'><Icon className='profil-icon' icon={ic_logout} size={'100%'} /></div>
                            <div className='col'><span className='profil-menu-title'>Keluar</span></div>  
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default ProfilMenu