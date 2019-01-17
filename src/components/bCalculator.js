import React from 'react';

import SavingsCalc from './savingsCalc'

class BCalculator extends React.Component{
	render() {
    return(
		<div className='bCalculator'>
			<div className='bCalculator__container'>
				<div className='bCalculator__top'>
					<div className='bCalculator__top__bold medium'>
						See how much you can save with Bellotero.io
					</div>
					<div className='bCalculator__top__normal light'>
						With Bellotero.io you save time and money make real-time 
						decisions that boost your business and your bottom line. 
						Get less wrongfully blocked payments, save time on bookkeeping 
						and no need to worry about safety. 
					</div>
				</div>
				<SavingsCalc />
			</div>
		</div>
    );
  }
}

export default BCalculator;