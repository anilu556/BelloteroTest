import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

//Components
import BlueTop from './components/blueTop';
import LogoStrip from './components/logoStrip';
import InfoSection from './components/infoSection';
import ThreeSquares from './components/threeSquares';
import Carousel from './components/carousel';
import BCalculator from './components/bCalculator';
import GetStarted from './components/getStarted';
import BottomMenu from './components/bottomMenu';

class Bellotero extends React.Component{
  render() {
    return(
	    <div>
	      <BlueTop />
        <LogoStrip />
        <InfoSection />
        <ThreeSquares />
        <Carousel />
        <BCalculator />
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