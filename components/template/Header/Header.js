import React from 'react'
import style from "@/styles/header.module.css"

export default function Header() {
  return (
    <section className={style.header}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.header_content}>
                        <h1 className={style.header_content_title}>با ما خلاقیت و نوآوری را تجربه کنید!</h1>
                        <p className={style.header_content_desc}>فرایند ساخت  واصلاح مدل کسب وکار نوآوری مدل کسب وکار نیز نامیده میشود.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img className={style.Header_img} src="/img/hero-img.png" alt="header-img" />
                </div>
            </div>
        </div>
    </section>
  )
}
