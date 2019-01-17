import React, { Component } from "react";
import Slider from "react-slick";

import qMarks from '../img/quotation-marks.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className='carousel__quoteContainer'>
              <div className="carousel__leftBlock">
                <div className='carousel__quote light'>
                  It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail. 
                </div>
                <img className="carousel__qMarks" src={qMarks} alt=""></img>
              </div>
              <div className="carousel__rightBlock">
                <div className='carousel__author light'>
                  Molly O’Keefe
                </div>
                <div className='carousel__profes'>
                  American Author
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__quoteContainer'>
              <div className="carousel__leftBlock">
                <div className='carousel__quote light'>
                  And I will strike down upon thee with great vengeance and furious anger those who attempt 
                  to poison and destroy my brothers. And you will know my name is 
                  the Lord when I lay my vengeance upon you! 
                </div>
                <img className="carousel__qMarks" src={qMarks} alt=""></img>
              </div>
              <div className="carousel__rightBlock">
                <div className='carousel__author light'>
                  Jules
                </div>
                <div className='carousel__profes'>
                  Pulp Fiction
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__quoteContainer'>
              <div className="carousel__leftBlock">
                <div className='carousel__quote light'>
                  You don't understand! I coulda had class. I coulda been a contender. 
                  I could've been somebody, instead of a bum, which is what I am.
                </div>
                <img className="carousel__qMarks" src={qMarks} alt=""></img>
              </div>
              <div className="carousel__rightBlock">
                <div className='carousel__author light'>
                  On The Waterfront
                </div>
                <div className='carousel__profes'>
                  1954
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__quoteContainer'>
              <div className="carousel__leftBlock">
                <div className='carousel__quote light'>
                  Oh, I see, what I should do is, er, come home and say 'Hi honey! Guess what? 
                  I walked into this house today, where this junkie a*****e just fried his baby in a microwave, 
                  because it was crying to loud. So let me share that with you. Come on, let's share that,
                   and in sharing it, we'll somehow, er, cathartically dispel all that heinous s**t'. Right?
                </div>
                <img className="carousel__qMarks" src={qMarks} alt=""></img>
              </div>
              <div className="carousel__rightBlock">
                <div className='carousel__author light'>
                  Al Pacino
                </div>
                <div className='carousel__profes'>
                  Heat
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='carousel__quoteContainer'>
              <div className="carousel__leftBlock">
                <div className='carousel__quote light'>
                  Don’t ever let somebody tell you you can’t do something, not even me. 
                  Alright? You dream, you gotta protect it. People can’t do something themselves, 
                  they wanna tell you you can’t do it. If you want something, go get it. Period.
                </div>
                <img className="carousel__qMarks" src={qMarks} alt=""></img>
              </div>
              <div className="carousel__rightBlock">
                <div className='carousel__author light'>
                  Chris Gardner
                </div>
                <div className='carousel__profes'>
                  The Pursuit of Happyness
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}