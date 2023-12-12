import React, { useState } from 'react'
import style from '@/styles/navbar.module.css'

export default function Navbar() {
    const [activeMenu , setActiveMenu]= useState("خانه")
    const handlerActiveMenu= (MenuID)=>{
        setActiveMenu(MenuID)
    }
  return (
    <section className={style.navbar}>
        <div className="container">
            <div className={style.navbar_wrapper}>
                <div className={style.navbar_right}>
                    <img src="/img/logo.png" alt="logo" className={style.navbar_logo_img} />
                </div>
                <div className={style.navbar_left}>
                    <ul className={style.navbar_menu_items}>
                        <li className={`${style.navbar_menu_item} ${activeMenu === "خانه"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("خانه")}>خانه</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="درباه ما"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("درباه ما")}>درباه ما</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="خدمات ما"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("خدمات ما")}>خدمات ما</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="نمونه کار ما"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("نمونه کارما")}>نمونه کارها</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="تیم"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("تیم ")}>تیم</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="قیمت"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("قیمت")}>قیمت</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="بلاگ"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("بلاگ")}>بلاگ</li>
                        <li className={`${style.navbar_menu_item} ${activeMenu ==="ارتباط با ما"?  style.navbar_menu_itemActive :""}`} onClick={()=>handlerActiveMenu("ارتباط با ما")}>ارتباط باما</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
