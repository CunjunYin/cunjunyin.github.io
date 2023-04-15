import React from 'react';
import {
	Container,
	Box
} from '@mui/material';

export default class Banner extends React.Component {

	render() {
		return (
			<div className='banner' style={{ justifyContent: 'center', alignItems: 'center', color: '#f8f9fa' }}>
				<Container className='banner-content'>
					<h1 className='title' style={{ textAlign: 'center', fontSize: '3rem', marginTop: 0 }}> Feel Free to click around</h1>
				</Container>
			</div>
		)
	}
}