import React from "react";
import "./About.css";
import about_image from "../../images/aboutImg.jpg";
import about_imageWoman from "../../images/aboutImgWithWoman.jpg";
import about_imageManHands from "../../images/aboutImgWithManHands.jpg";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__title">
          <span className="about__title-break">почему</span> мы это делаем
        </h2>
        <p className="about__paragraph">
          Мы сами действующие селлеры, знаем этот бизнес изнутри. У нас самих
          был положительный и отрицательный опыт работы с другими фулфилментами.
          Поэтому мы учли все ошибки и оказываем услуги профессионально.
        </p>
        <p className="about__paragraph">
          Нам нравится дружеская атмосфера с нашими клиентами, мы всегда рады
          помочь, а иногда даже научить.
        </p>
        <img
          className="about__image"
          src={about_image}
          alt="A man in warehouse"
        />
        <p className="about__paragraph">
          Возьмём “под ключ” оказание всех услуг от поиска товара в Китае
          до конечной доставки на склад маркетплейса.
        </p>
        <p className="about__paragraph">
          Атмосфера “исполнитель-клиент” — командная. Мы помогаем нашим клиентам
          развиваться и расти в доходе, подсказываем лайфхаки и нюансы работы.{" "}
        </p>
        <p className="about__paragraph element_margin-bottom_none"> С нами просто и спокойно.</p>
        <ul className="about__images-list">
          <li className="about__images-item">
            <img className="about__image element_margin-bottom_none" src={about_imageWoman} />
          </li>
          <li className="about__images-item">
            <img className="about__image element_margin-bottom_none" src={about_imageManHands} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
