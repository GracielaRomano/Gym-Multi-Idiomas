import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
import { useTranslation } from 'react-i18next'

const Reasons = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div className="Reasons"id="reasons">
        {/* se divide la pagina en dos (izq. der.)*/}
        <div className="left-r">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>{t("reasons.title_1")}</span>
            <div>
                <span className='stroke-text'>{t("reasons.title_2")}</span>
                <span> {t("reasons.title_3")}</span>
            </div>
            <div className='details-r'>
                <div >
                    <img src={tick} alt=""></img>
                    <span>{t("reasons.details_1")}</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>{t("reasons.details_2")}</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>{t("reasons.details_3")}</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>{t("reasons.details_4")}</span>
                </div>
            </div>
            <span
            style={{
                color: "var(--gray)",
                fontWeight:"normal",
            }}>{t("reasons.title_4")}</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons