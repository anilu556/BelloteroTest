import React from 'react';
import SimpleSlider from './simpleSlider';

class Carousel extends React.Component{
	render() {
    return(
		<div className='carousel'>
			<div className='carousel__container'>
				<div className='carousel__title medium'>
					Our customers love us
				</div>
				<div className='carousel__actualCarousel'>
					<SimpleSlider />
				</div>
			</div>
		</div>
    );
  }
}

export default Carousel;