import React from "react";
import css from "./Payment.module.css";

const Payment = () => {
  return (
    <div className={css.payment}>
      <div className={css.name}>Оплата</div>
      <div className={css.text}>
          Оплата возможна тремя способами: наложенный платеж, перевод на карту и
          конечно же самовывоз. Наложенный платеж совершается на "Нова Пошта"
          после проверки товара. Перевод денег на карту возможен перед отправкой
          товара, информацию и номер карты можете узнать по любому телефону в
          "Контакты". Самовывоз возможен по определённому адресу в Киеве, для
          точной информации звоните нам.
      </div>
    </div>
  );
};

export default Payment;
