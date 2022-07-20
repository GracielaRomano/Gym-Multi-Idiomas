import React from 'react'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
import './Plans.css'
import { useTranslation } from 'react-i18next'

const Plans = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div> {/*difumina y da el color naranja a una parte de la pantalla*/}
        <div className="blur plans-blur-2"></div>
        <div className="plans-header">
            <span className='stroke-text'> {t("plans.title1")}</span>
            <span>{t("plans.title2")}</span>
            <span className='stroke-text'>{t("plans.title3")}</span>
        </div>

        {/* plans card*/}
        <div className="plans">
            {plansData.map((plan, i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{t(plan.name)}</span>
                    <span>$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feature, i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt=''/>
                                <span key={i}>{t(feature)}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>{t("plans.benefits")}</span>
                        </div>
                        <button className="btn">{t("plans.button")}</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Plans