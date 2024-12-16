import React from 'react';
import './List.css';

export const List = () => {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/1785001/pexels-photo-1785001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>

        <div className='carousel-item'>
          <img
            className='carousel-item__img'
            src='https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            alt='people'
          />
          <div className='carousel-item__details'>
            <div className='controls'>
              <span className='fas fa-play-circle'></span>
              <span className='fas fa-plus-circle'></span>
            </div>
            <h5 className='carousel-item__details--title'>Descriptive Title</h5>
            <h6 className='carousel-item__details--subtitle'>
              Date and Duration
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default List;
