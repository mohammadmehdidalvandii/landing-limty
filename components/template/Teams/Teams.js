import React from 'react'
import style from '@/styles/teams.module.css'
import Title from '@/components/modules/Title/Title'
export default function Teams() {
  return (
    <section className={style.team}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Title title='تیم خلاق'/>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.team_card}>
                        <img src="/img/team1.png" alt="team-img" className={style.team_card_img} />
                        <h5 className={style.team_card_userName}>محمد مهدی</h5>
                        <span className={style.team_card_jobName}>تحلیل گر کسب وکار</span>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.team_card}>
                        <img src="/img/team2.png" alt="team-img" className={style.team_card_img} />
                        <h5 className={style.team_card_userName}> سارا راد</h5>
                        <span className={style.team_card_jobName}>توسعه دهند وب</span>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.team_card}>
                        <img src="/img/team3.png" alt="team-img" className={style.team_card_img} />
                        <h5 className={style.team_card_userName}>کریم باقری</h5>
                        <span className={style.team_card_jobName}>مشاوره بازرگانی</span>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className={style.team_card}>
                        <img src="/img/team4.png" alt="team-img" className={style.team_card_img} />
                        <h5 className={style.team_card_userName}> علی محمدی</h5>
                        <span className={style.team_card_jobName}>ui \ ux کار</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
