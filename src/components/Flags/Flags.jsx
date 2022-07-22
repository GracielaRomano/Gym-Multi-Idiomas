import React from 'react'
import es from '../../assets/spain.png';
import en from '../../assets/british.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
import './Flags.css'

const Flags = () => {
    const [t, i18n] = useTranslation("global")
    const traducir = (newLang) => {
        i18n.changeLanguage(newLang)
        localStorage.setItem("lang", newLang)
      };
  
  return (
        <div className="flag">
           
            <div className="banderas">
                <button onClick={() => traducir("es")}><img src={es} alt=""/></button>
                <button onClick={() => traducir("en")}><img src={en} alt=""/></button>
            </div>
       
        
        </div>
  )
}

export default Flags