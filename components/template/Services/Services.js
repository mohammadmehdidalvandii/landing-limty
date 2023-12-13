import React from 'react'
import style from '@/styles/services.module.css'
import Title from '@/components/modules/Title/Title'

export default function Services() {
  return (
   <section className={style.services}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Title title='خدمات'/>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.services_item}>
                    <img src="/img/service1.png" alt="services-img" className={style.services_item_img} />
                    <div className={style.services_item_content}>
                    <h5 className={style.services_item_title}>جلسات کسب وکار</h5>
                    <p className={style.services_item_desc}>جلسه زمانی است که دو یا چند نفر گرد هم می آیند تا درباره یک یا چند موضوع اغلب در یک جلسه رسمی یا تجاری بحث کنند</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.services_item}>
                    <img src="/img/service2.png" alt="services-img" className={style.services_item_img} />
                    <div className={style.services_item_content}>
                    <h5 className={style.services_item_title}>رشد کسب وکار</h5>
                    <p className={style.services_item_desc}>جلسه زمانی است که دو یا چند نفر گرد هم می آیند تا درباره یک یا چند موضوع اغلب در یک جلسه رسمی یا تجاری بحث کنند</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className={style.services_item}>
                    <img src="/img/service3.png" alt="services-img" className={style.services_item_img} />
                    <div className={style.services_item_content}>
                    <h5 className={style.services_item_title}>آنالیزکسب و کار</h5>
                    <p className={style.services_item_desc}>جلسه زمانی است که دو یا چند نفر گرد هم می آیند تا درباره یک یا چند موضوع اغلب در یک جلسه رسمی یا تجاری بحث کنند</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}
