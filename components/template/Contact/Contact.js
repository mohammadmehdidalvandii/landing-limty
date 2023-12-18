import React from 'react'
import style from '@/styles/contact.module.css'
import Title from '@/components/modules/Title/Title'
export default function Contact() {
  return (
    <section className={style.contact}>
        <div className="container">
        <div className="row">
            <div className="col-12">
                <Title title='ارتباط باما'/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12">
                    <form action="#" className={style.contact_form}>
                        <input type="text" className={style.contact_form_input} placeholder='نام شما'/>
                        <input type="text" className={style.contact_form_input} placeholder='آدرس ایمیل'/>
                        <input type="text" className={style.contact_form_input} placeholder='موضوع'/>
                        <textarea  className={style.contact_form_text} placeholder='متن پیام'></textarea>
                        <button className={style.contact_form_btn}>ارسال پیام</button>
                    </form>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.contact_content}>
                        <div className={style.contact_content_info}>
                            <h6 className={style.contact_content_title}>اطلاعات تماس</h6>
                            <p className={style.contact_content_desc}>تماس مهمترین بخش کسب و کار است. اگر به اطلاعاتی در مورد کسب و کار ما نیاز دارید، با اطلاعات ارائه شده در زیر تماس بگیرید</p>
                        </div>
                        <ul className={style.contact_items}>
                            <li className={style.contact_item}>ایران، تهران، شهرک غرب، بلوار ایران زمین، برج آسمان</li>
                            <li className={style.contact_item}>021888999666</li>
                            <li className={style.contact_item}>support@limty.com</li>
                            <li className={style.contact_item}>www.limty.com</li>
                        </ul>
                    </div>
            </div>
        </div>
        </div>
    </section>
  )
}
