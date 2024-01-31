import React from "react";
import s from "../style/Page.module.css";

export default function Page(props) {
  return (
    <div className={s.info_details}>
      <h2>Бондарь Софья Витальевна</h2>
      <div className={s.div_info}>
        <div className={s.info}>
          <p>
            <span>Дата рождения : </span>
            {props.birth}
          </p>
          <p>
            <span>Телефон : </span> {props.phone}
          </p>
          <p>
            <span>Email : </span> {props.email}
          </p>
          <p>
            <span>Город проживания : </span>
            {props.city}
          </p>
          <p>
            <span>Место учёбы : </span>
            {props.studies}
          </p>
        </div>
        <img src={props.url} alt="Личная фотография" />
      </div>
    </div>
  );
}
