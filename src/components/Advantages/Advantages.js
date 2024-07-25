import React from "react";
import Card from "../Card/Card";
import { initialCards } from "../../utils/constants";
import "./Advantages.css";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__content">
        <h2 className="advantages__title">terminal</h2>
        <p className="advantages__subtitle">
          ваш надёжный партнёр в мире маркетплейсов
        </p>
      </div>
      <nav className="advantages__markets">
        <button className="advanatges__btn">ozon</button>
        <button className="advanatges__btn">wildberries</button>
      </nav>
      <ul className="advantages__cards-list">
        <Card 
        title='прозрачность'
        info='никаких неожиданных наценок и подводных камней, даём быструю и честную обратную связь и отчёты'
        linkText='ознакомиться с прайсом'
        />
        <Card 
        title='неравнодушие'
        info='личный менеджер на связи с вами 7 дней в неделю и оперативно решит любой вопрос'
        linkText='получить консультацию'
        />
        <Card 
        title='точность'
        info='отточили все процессы склада и логистики, чтобы доставлять ваши товары качественно и вовремя'
        linkText='сделать расчёт'
        />
        <Card 
        title='простота'
        info='ценим ваше время и репутацию у клиентов, поэтому понятно и предсказуемо организуем все процессы'
        linkText='как мы работаем'
        />
        <Card 
        title='для всех'
        info='работаем с новичками, действующими продавцами на маркетплейсах и крупными компаниями'
        linkText='кому подойдёт'
        />
        
      </ul>
    </section>
  );
}

export default Advantages;
