import React from 'react'
import style from '@/styles/services.module.css'
import Title from '@/components/modules/Title/Title'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faComputer, faPerson, faPersonArrowUpFromLine } from "@fortawesome/free-solid-svg-icons";

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

        <div className="row mt-5">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.services_card}>
                    <span className={style.services_card_icon}>
                        <FontAwesomeIcon icon={faPersonArrowUpFromLine}/>
                    </span>
                    <span className={style.services_card_number}>999</span>
                    <span className={style.services_card_text}>مشتری راضی</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.services_card}>
                    <span className={style.services_card_icon}>
                        <FontAwesomeIcon icon={faComputer}/>
                    </span>
                    <span className={style.services_card_number}>185</span>
                    <span className={style.services_card_text}>وبسایت ساهت شده</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.services_card}>
                    <span className={style.services_card_icon}>
                        <FontAwesomeIcon icon={faPerson}/>
                    </span>
                    <span className={style.services_card_number}>100</span>
                    <span className={style.services_card_text}>متخصص</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className={style.services_card}>
                    <span className={style.services_card_icon}>
                        <FontAwesomeIcon icon={faCaretUp}/>
                    </span>
                    <span className={style.services_card_number}>20</span>
                    <span className={style.services_card_text}>سال تجربه</span>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}
