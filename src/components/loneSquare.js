import React from 'react';

function LoneSquare(props){
	return(
		<div className='loneSquare'>
			<img src={props.img} alt="img" className='loneSquare__img'></img>
			<div className='loneSquare__centerText'>
				<div className='loneSquare__number'>
					<span className='loneSquare__number__big slabLight'>
					{props.number}
					</span>
					<span className='loneSquare__number__small slabThin'>
					{props.sign}
					</span>
				</div>
				<div className='loneSquare__text bold'>
					{props.text}
				</div>
			</div>
		</div>
    );
}

export default LoneSquare;