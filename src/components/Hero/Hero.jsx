import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'

 
const Hero = () => {
   const transition = {type: 'spring', duration: 3}
   const mobile = window.innerWidth<=768 ? true: false;
   const [t, i18n] = useTranslation("global")
   return (
     <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
        <div className='left-h'>
            <Header/>
            {/*the best ad*/}
            <div className="the-best-ad">
               {/*se crea la transicion en el titulo*/}
               <motion.div
               initial={{left: mobile?'165px': '238px'}}
               whileInView={{left: '8px'}}
               transition={{...transition, type: 'tween'}}
               ></motion.div>
               <span>{t("hero.title")}</span>
            </div>
            {/*Hero Heading */}
            <div className="hero-text">
               <div>
                  <span className='stroke-text'>{t("hero.title2")} </span>
                  <span>{t("hero.title3")} </span>
               </div>
               <div>
                  <span>{t("hero.title4")} </span>
               </div>
               <div>
                  <span>
                  {t("hero.content")}
                  </span>
               </div>
            </div> 
            {/* figures*/}
            <div className="figures">
               <div>
                  {/*contador que se activa cuando ingresa a la pagina, como animacion*/}
                  <span>
                     <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                  </span>
                  <span>{t("hero.items1")}</span>
               </div>
               <div>
                  <span>
                     <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                  </span>
                  <span>{t("hero.items2")}</span>
               </div>
               <div>
                  <span>
                     <NumberCounter end={50} start={25} delay='4' preFix='+'/>
                  </span>
                  <span>{t("hero.items3")}</span>
               </div>
            </div>
            {/*hero botton*/} 
            <div className="hero-buttons">
               <buttons className="btn">{t("hero.buttons1")}</buttons>
               <buttons className="btn">{t("hero.buttons2")}</buttons>
            </div>
         </div>
         <div className='right-h'>
            <button className='btn'>{t("hero.buttons3")}</button>

            <motion.div
            initial={{ right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition} 
            className="heart-rate">
               <img src={Heart} alt=""/>
               <span>{t("hero.heart")}</span>
               <span>{t("hero.beat")}</span>
            </motion.div>

            {/* hero imagen */}
            <img src={hero_image} alt=""  className='hero-image'/>
            <motion.img 
            initial={{ right: "11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition} 
            src={hero_image_back} alt=""  className='hero-image-back'/>
            {/* calories*/}
            <motion.div
             initial={{ right: "37rem"}}
             whileInView={{right: "28rem"}}
             transition={transition} 
            className="calories">
               <img src={Calories} alt=""  />
               <div>
                  <span>{t("hero.calories")}</span>
                  <span>220 Kcal</span>
               </div>
            </motion.div>
         </div>
     </div>
   )
}
 
export default Hero