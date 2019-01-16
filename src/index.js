import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

//Components
import TopMenu from './components/topMenu';
import Digitize from './components/digitize';
import GetStarted from './components/getStarted';
import BottomMenu from './components/bottomMenu';

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
class Bellotero extends React.Component{
  render() {
    return(
	    <div>
	      <BlueTop />
	      <GetStarted />
	      <BottomMenu />
	    </div>
    );
  }
}
ReactDOM.render(
  <Bellotero />,
  document.getElementById('root')
);