import React from 'react';
import style from './Status.module.css';

const Status = () => {
  return (
    <div className={style.container}>
      <div className={style.deliveryOptions}>
        <input
          type='radio'
          value='standard'
          id='delivery-standard'
          name='deliveryOption'
        />
        <label htmlFor='delivery-standard' className={style.option}>
          <h4 className={style.optionTitle}>Gamer</h4>
          <p className={style.optionDetails}>4-5 business days</p>
          <div className={style.price}>$0.00</div>
        </label>

        <input
          type='radio'
          value='express'
          id='delivery-express'
          name='deliveryOption'
          defaultChecked
        />
        <label htmlFor='delivery-express' className={style.option}>
          <h4 className={style.optionTitle}>Vlogger</h4>
          <p className={style.optionDetails}>2-3 business days</p>
          <div className={style.price}>$9.99</div>
        </label>

        <input
          type='radio'
          value='superfast'
          id='delivery-superfast'
          name='deliveryOption'
        />
        <label htmlFor='delivery-superfast' className={style.option}>
          <h4 className={style.optionTitle}>Content Creator</h4>
          <p className={style.optionDetails}>1 business day</p>
          <div className={style.price}>$14.99</div>
        </label>
      </div>
    </div>
  );
};

export default Status;
