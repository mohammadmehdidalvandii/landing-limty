import Title from "@/components/modules/Title/Title";
import React from "react";
import style from "@/styles/about.module.css";

function About() {
  return (
    <section className={style.about}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Title title="درباره ما" />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src="/img/about-img1.png"
              alt="about-img"
              className={style.about_img}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className={style.about_content}>
              <h2 className={style.about_content_title}>
                ما یک تیم کاری عالی برای رویای تجاری شما هستیم.
              </h2>
              <p className={style.about_content_desc}>
                کسب و کار فعالیتی است که برای امرار معاش یا کسب درآمد انجام می
                شود. یک تجارت با دیگری معامله تجاری انجام می دهد. یک نهاد تجاری،
                نهادی است که بر اساس یک شرکت تشکیل شده و اداره می شود.
              </p>
              <ul className={style.about_items}>
                <li className={style.about_item}>کسب و کار شخص برای انجام وظایف خود.</li>
                <li className={style.about_item}>کسب و کار ممکن است به بسیاری از فعالیت های متفاوت اشاره داشته باشد.</li>
                <li className={style.about_item}>نمایندگی تجاری که توسط و برای افراد تجاری انجام شده است.</li>
                <li className={style.about_item}>اطلاعات تجاری درباره یک شرکت یا فرد.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
