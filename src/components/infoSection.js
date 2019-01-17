import React from 'react';

import intro1 from '../img/intro-img-1.png';
import intro2 from '../img/intro-img-2.png';
import arrow from '../img/arrow-right.png';

class InfoSection extends React.Component{
	render() {
    return(
		<div className='infoSection'>
			<div className="infoSection__container">
				<div className='infoSection__top'>
					<div className='infoSection__top__left'>
						<div className='infoSection__top__left__bold medium'>
							Bellotero.io is the digital solution that gives you fast, accurate, 
							automated accounts payable and smart, business-transforming insights. 
						</div>
						<div className='infoSection__top__left__full'>
							<div className='infoSection__top__left__full__get light'>
								Get the full picture. <br />In half the time.
							</div>
							<div className='infoSection__top__left__full__threads light'>
								Threads keep all your conversations clearly separated by topic so replies 
								won’t get buried in an endless stream of group chat. 
							</div>
							<div className='infoSection__top__left__full__learn medium'>
								Learn more <img src={arrow} alt="arrow"></img>
							</div>
						</div>
					</div>
					<div className='infoSection__top__right'>
						<img src={intro1} alt="intro-1"></img>
					</div>
				</div>
				<div className='infoSection__bottom'>
					<div className='infoSection__bottom__left'>
						<img src={intro2} alt="intro-2"></img>
					</div>
					<div className='infoSection__bottom__right'>
						<div className='infoSection__top__left__full'>
							<div className='infoSection__top__left__full__get light'>
								Timesaving,<br />moneymaking.
							</div>
							<div className='infoSection__top__left__full__threads light'>
								Bellotero.io automatically turns your threaded conversations into 
								a searchable catalog of topics. 
							</div>
							<div className='infoSection__top__left__full__learn medium'>
								Learn more <img src={arrow} alt="arrow"></img>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

export default InfoSection;