import React from 'react'
import style from '@/styles/prices.module.css'
import Title from '@/components/modules/Title/Title'
export default function Prices() {
  return (
    <section className={style.price}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='قیمت ها'/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={style.price_card}>
                            <img src="/img/price-img1.png" alt="price-img" className={style.price_card_img} />
                            <h6 className={style.price_card_priceName}>اقتضادی</h6>
                            <h3 className={style.price_card_price}>190,000 تومان</h3>
                            <ul className={style.price_card_items}>
                                <li className={style.price_card_item}>پشتیبانی رایگان 24/7</li>
                                <li className={style.price_card_item}>دانلود پایگاه داده</li>
                                <li className={style.price_card_item}>ایمیل تعمیر و نگهداری</li>
                                <li className={style.price_card_item}>ترافیک نامحدود</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={style.price_card}>
                            <img src="/img/price-img2.png" alt="price-img" className={style.price_card_img} />
                            <h6 className={style.price_card_priceName}>ویژه</h6>
                            <h3 className={style.price_card_price}>290,000 تومان</h3>
                            <ul className={style.price_card_items}>
                                <li className={style.price_card_item}>پشتیبانی رایگان 24/7</li>
                                <li className={style.price_card_item}>دانلود پایگاه داده</li>
                                <li className={style.price_card_item}>ایمیل تعمیر و نگهداری</li>
                                <li className={style.price_card_item}>ترافیک نامحدود</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className={style.price_card}>
                            <img src="/img/price-img3.png" alt="price-img" className={style.price_card_img} />
                            <h6 className={style.price_card_priceName}>بینهایت</h6>
                            <h3 className={style.price_card_price}>490,000 تومان</h3>
                            <ul className={style.price_card_items}>
                                <li className={style.price_card_item}>پشتیبانی رایگان 24/7</li>
                                <li className={style.price_card_item}>دانلود پایگاه داده</li>
                                <li className={style.price_card_item}>ایمیل تعمیر و نگهداری</li>
                                <li className={style.price_card_item}>ترافیک نامحدود</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
