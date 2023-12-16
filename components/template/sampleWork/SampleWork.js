import React from 'react'
import style from '@/styles/sampleWork.module.css'
import Title from '@/components/modules/Title/Title'

export default function SampleWork() {
  return (
    <section className={style.sampleWork}>
        <div className="container"> 
            <div className="row">
                <div className="col-12">
                    <Title title='آخرین پروژه ها'/>
                </div>
            </div>
            <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.sampleWork_item}>
                            <img src="/img/project1.jpg" alt="sampleWork" className={style.sampleWork_item_img} />
                            <div className={style.sampleWork_item_content}>
                                <h6 className={style.sampleWork_item_title}>sampleWork</h6>
                                <span className={style.sampleWork_item_job}>seo</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.sampleWork_item}>
                            <img src="/img/project2.jpg" alt="sampleWork" className={style.sampleWork_item_img} />
                            <div className={style.sampleWork_item_content}>
                                <h6 className={style.sampleWork_item_title}>sampleWork</h6>
                                <span className={style.sampleWork_item_job}>seo</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.sampleWork_item}>
                            <img src="/img/project3.jpg" alt="sampleWork" className={style.sampleWork_item_img} />
                            <div className={style.sampleWork_item_content}>
                                <h6 className={style.sampleWork_item_title}>sampleWork</h6>
                                <span className={style.sampleWork_item_job}>seo</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className={style.sampleWork_item}>
                            <img src="/img/project4.jpg" alt="sampleWork" className={style.sampleWork_item_img} />
                            <div className={style.sampleWork_item_content}>
                                <h6 className={style.sampleWork_item_title}>sampleWork</h6>
                                <span className={style.sampleWork_item_job}>seo</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}
