import React from 'react'
import style from '@/styles/aboutBox.module.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarRear, faDiagramSuccessor, faFaucet, faTransgenderAlt } from "@fortawesome/free-solid-svg-icons";

export default function AboutBox() {
  return (
    <section className={style.about_box}>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.about_box_item}>
                        <span className={style.about_box_itemIcon}>
                            <FontAwesomeIcon icon={faTransgenderAlt}/>
                        </span>
                        <h5 className={style.about_box_itemTitle}>رشد تجاری</h5>
                        <p className={style.about_box_itemDesc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.about_box_item}>
                        <span className={style.about_box_itemIcon}>
                            <FontAwesomeIcon icon={faCarRear}/>
                        </span>
                        <h5 className={style.about_box_itemTitle}>تمرکز تجاری</h5>
                        <p className={style.about_box_itemDesc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className={style.about_box_item}>
                        <span className={style.about_box_itemIcon}>
                            <FontAwesomeIcon icon={faDiagramSuccessor}/>
                        </span>
                        <h5 className={style.about_box_itemTitle}>هدف تجاری</h5>
                        <p className={style.about_box_itemDesc}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
