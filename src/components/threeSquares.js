import React from 'react';

import LoneSquare  from './loneSquare';

import photo1 from '../img/photo-1.png';
import photo2 from '../img/photo-2.png';
import photo3 from '../img/photo-3.png';

class ThreeSquares extends React.Component{
	render() {
    return(
		<div className='threeSquares'>
			<LoneSquare 
				img={photo1} 
				number="50"
				sign='%' 
				text="SAVED IN BOOKKEEPING COSTS"
			/>
			<LoneSquare 
				img={photo2} 
				number="100"
				sign='h'
				text="AND MORE SAVED IN BOOKKEEPING TIME" 
			/>
			<LoneSquare 
				img={photo3} 
				number="25"
				sign='%'
				text="DECREASE IN FOOD COSTS" 
			/>
		</div>
    );
  }
}

export default ThreeSquares;