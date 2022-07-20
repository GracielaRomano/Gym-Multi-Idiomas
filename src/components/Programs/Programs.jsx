import React from 'react'
import './Programs.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
import { useTranslation } from 'react-i18next'


const Programs = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div className="Programs" id="programs">
        {/* header */}
        <div className="programs-header">
            <span className='stroke-text'>{t("programs.title_1")}</span>
            <span>{t("programs.title_2")}</span>
            <span className='stroke-text'>{t("programs.title_3")}</span>
        </div>
        <div className="program-categories">
            {programsData.map((program)=>(
                <div className="category">
                    {program.image}
                    <span>{t (program.heading)}</span>
                    <span>{t (program.details)}</span>
                    <div className="join-now">
                        <span>{t("programs.button")}</span>
                        <img src={RightArrow} alt="" srcset="" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Programs