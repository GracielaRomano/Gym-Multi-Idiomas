import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'




const Header = () => {
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false)
  const [t, i18n] = useTranslation("global")
  return (
    <div className="header">
      <img src={Logo} alt ='' className='logo' />
      {(menuOpened===false && mobile===true)? (
        <div style={{backgroundColor: 'var(--appColor)',
          padding:'0.5rem',
          borderRadius: '5px'}}
          
          onClick={() => setMenuOpened(true)}
          >
          <img src={Bars} alt="" style={{width:'1.5rem', height:'1.5rem'}}/>
        </div>
      ): (

      <ul className='header-menu'>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='home'
            span={true}
            smooth={true}>{t("header.home")}
          </Link>
        </li>
        <li >
          <Link
            onClick={()=>setMenuOpened(false)}
            to='Programs'
            span={true}
            smooth={true}>{t("header.programs")}
          </Link>
        </li>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='Reasons'
            span={true}
            smooth={true}>{t("header.why-us")}
          
          </Link>
        </li>
        <li>
          <Link
            onClick={()=>setMenuOpened(false)}
            to='plans'
            span={true}
            smooth={true}>{t("header.plans")}
          </Link>
        </li>
        <li >
          <Link
            onClick={()=>setMenuOpened(false)}
            to='testimonials'
            span={true}
            smooth={true}>{t("header.testimonials")}
          </Link>
        </li>
      </ul>
      )}
    </div>
    
  )
  
}

export default Header