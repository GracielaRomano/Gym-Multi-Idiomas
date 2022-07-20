import React, {useRef} from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'

const Join = () => {
    const form = useRef()
    const [t, i18n] = useTranslation("global")

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_z43l7eo', 'template_19ofy1f', form.current, 'r-1cjjGG-SXr7qlsT')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr/>
            <div>
                <span className='stroke-text'>{t("join.title1")}</span>
                <span> {t("join.title2")}</span>
            </div>
            <div>
                <span>{t("join.title3")}</span>
                <span className='stroke-text'> {t("join.title4")}</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email-container'onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder={t("join.email")}></input>
                <button className='btn btn-j'>{t("join.button")}</button>
            </form>
        </div>
    </div>
  )
}

export default Join