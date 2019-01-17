import React from 'react';

import { Slider, Handles, Tracks } from 'react-compound-slider';

const sliderStyle = {  // Give the slider some width
	position: 'relative',
	width: '100%',
	height: 80,
}
const railStyle = { 
	position: 'absolute',
	width: '100%',
	height: 3,
	marginTop: 70,
	borderRadius: 5,
	backgroundColor: '#bfbfbf',
}
const domain = [10, 100];
const domain2 = [1,10];
const defaultValues = [35];
const defaultValues2 = [2];

function Track({ source, target, getTrackProps }) { 
  return (
    <div
      style={{
        position: 'absolute',
        height: 3,
        zIndex: 1,
        marginTop: '-3px',
        backgroundColor: '#546C91',
        borderRadius: 5,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()} 
    />
  )
}

export function Handle({ handle: { id, value, percent }, getHandleProps}) {
  return (
  	<div>
		<input className='savingsCalc__input__area light' readOnly value={value}/>
		<div
			style={{
				left: `${percent}%`,
				position: 'absolute',
				marginLeft: -10,
				marginTop: '-8px',
				zIndex: 2,
				width: 15,
				height: 15,
				border: 0,
				textAlign: 'center',
				cursor: 'pointer',
				borderRadius: '50%',
				backgroundColor: '#00b896',
				color: '#fff',
			}}
			{...getHandleProps(id)}
		>
		</div>
    </div>
  )
}

class SavingsCalc extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			values: defaultValues.slice(),
			values2: defaultValues2.slice(),
		   	update: defaultValues.slice(),
		   	update2: defaultValues.slice(),
		   	efcs: defaultValues.slice() * 0.3,
		   	eas: defaultValues.slice() * 1337 + 10.5,
		};
	}

	onUpdate = (update) => {
		this.setState({ update })
		console.log(update);
	}

	onChange = (values) => {
		this.setState({ values })
		let x = Math.round(values * 0.3);
		let y = Math.round(this.state.values2 * 1337 + this.state.efcs);
		this.setState({
			efcs: x,
			eas: y,
		})
		console.log(this.state);
	}

	onUpdate2 = update2 => {
		this.setState({ update2 })
		console.log(update2);
	}

	onChange2 = values2 => {
		this.setState({ values2 })
		let x = Math.round(values2 * 1337 + this.state.efcs);
		this.setState({
			eas: x,
		})
	}
	render() {
		/*const { state: { values, values1, updates1,values2,updates2 } } = this*/
		return(
			<div className='savingsCalc'>
				<div className='savingsCalc__left'>
					<div className='savingsCalc__title medium'>
						Monthly ingredient spending
					</div>
					<div className='savingsCalc__input'>
						<Slider
							rootStyle={sliderStyle}
							domain={domain}
							step={1}
							mode={2}
							onUpdate={this.onUpdate}
							onChange={this.onChange}
							values={this.state.values}
						>
							<div style={railStyle} />
							<Handles>
								{({ handles, getHandleProps }) => (
									<div className="slider-handles">
										{handles.map(handle => (
											<Handle
												key={handle.id}
												handle={handle}
												getHandleProps={getHandleProps}
											/>
										))}
									</div>
								)}
							</Handles>
							<Tracks right={false}>
								{({ tracks, getTrackProps }) => (
								<div className="slider-tracks">
								  {tracks.map(({ id, source, target }) => (
								    <Track
								      key={id}
								      source={source}
								      target={target}
								      getTrackProps={getTrackProps}
								    />
								  ))}
								</div>
								)}
							</Tracks>
						</Slider>
					</div>
					<div className='savingsCalc__title medium'>
						Full-time employees that process invoices
					</div>
					<div className='savingsCalc__input'>
						<Slider
							rootStyle={sliderStyle}
							domain={domain2}
							step={1}
							mode={2}
							values={this.state.values2}
							onUpdate={this.onUpdate2}
							onChange={this.onChange2}
						>
						<div style={railStyle} />
						<Handles>
							{({ handles, getHandleProps }) => (
								<div className="slider-handles">
									{handles.map(handle => (
										<Handle
											key={handle.id}
											handle={handle}
											getHandleProps={getHandleProps}
										/>
									))}
								</div>
							)}
						</Handles>
						</Slider>
					</div>
				</div>
				<div className='savingsCalc__right'>
					<div className='savingsCalc__right__block'>
						<div className='savingsCalc__right__text light'>
							Your estimated annual savings
						</div>
						<div className='savingsCalc__right__result slabLight'>
							<span className="savingsCalc__right__sign slabThin">$</span>{this.state.eas}
						</div>
					</div>
					<div className='savingsCalc__right__block'>
						<div className='savingsCalc__right__text light'>
							Estimated food cost savings
						</div>
						<div className='savingsCalc__right__result slabLight'>
							<span className="savingsCalc__right__sign slabThin">$</span>{this.state.efcs}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SavingsCalc;