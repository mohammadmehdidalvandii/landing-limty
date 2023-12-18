import React from "react";
import style from "@/styles/footer.module.css";
export default function Footer() {
  return (
    <section className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.footer_content}>
              <img
                src="/img/logo.png"
                alt="footer"
                className={style.footer_img}
              />
              <p className={style.footer_desc}>
                ما می فهمیم و شما را در مسیر پیشرفت و توسعه راهنمایی و کمک
                خواهیم کرد. با قدرت و استفاده از تکنولوژی و تخصص متخصصین منتظر
                شما هستیم.
              </p>
              <span className={style.footer_creator}>لیمتی آذر 1401 راستچین شده توسط mm.dal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
