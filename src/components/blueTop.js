import React from 'react';

import TopMenu from './topMenu';
import Digitize from './digitize';

class BlueTop extends React.Component{
	render() {
    return(
		<div className='blueTop'>
			<TopMenu />
			<Digitize />
		</div>
    );
  }
}

export default BlueTop;