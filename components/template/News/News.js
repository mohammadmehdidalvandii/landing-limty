import React from 'react'
import style from '@/styles/news.module.css'
import Title from '@/components/modules/Title/Title'
export default function News() {
  return (
    <section className={style.news}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='آخرین اخبار'/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.news_card}>
                        <img src="/img/blog1.png" alt="news img" className={style.news_card_img} />
                        <div className={style.news_card_content}>
                            <span className={style.news_Card_creator}>توسط ادمین</span>
                            <h5 className={style.news_card_title}>طرح تجاری یک سند مکتوب رسمی اهداف تجاری است</h5>
                            <p className={style.news_card_desc}>طرح کسب و کار یک سند مکتوب رسمی حاوی اهداف تجاری است. روش هایی که چگونه این اهداف می توانند [...]</p>
                            <span className={style.news_card_date}>06 آذر 1401</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.news_card}>
                        <img src="/img/blog2.png" alt="news img" className={style.news_card_img} />
                        <div className={style.news_card_content}>
                            <span className={style.news_Card_creator}>توسط ادمین</span>
                            <h5 className={style.news_card_title}>کسب و کار فعالیتی است که برای امرار معاش خود انجام می دهد</h5>
                            <p className={style.news_card_desc}>کسب و کار ممکن است به بسیاری از فعالیت های متفاوت، مانند خرید یا فروش در تجارت، ارائه دهد. فعالیت تجاری [....]</p>
                            <span className={style.news_card_date}>06 آذر 1401</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.news_card}>
                        <img src="/img/blog3.png" alt="news img" className={style.news_card_img} />
                        <div className={style.news_card_content}>
                            <span className={style.news_Card_creator}>توسط ادمین</span>
                            <h5 className={style.news_card_title}>آمار کسب و کار علم تصمیم گیری خوب است</h5>
                            <p className={style.news_card_desc}>آمار کسب و کار علم تصمیم گیری خوب در مواجهه با ابهام است و در بسیاری از سیستم های انفرادی مقلوب شکست اما در [....]</p>
                            <span className={style.news_card_date}>06 آذر 1401</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
