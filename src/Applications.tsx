import React, { useEffect, useState } from 'react';
import SingleApplication from './SingleApplication';
import { getSingleApplicationFixture } from './__fixtures__/applications.fixture';
import styles from './Applications.module.css';
import { Button } from './ui/Button/Button';
import axios from 'axios';

const Applications = () => {
	const [applications, setApplications] = useState([]);
	// const applications = getSingleApplicationFixture;
	useEffect(() => {
		const getApplicationData = async () => {
			try {
				const { data } = await axios.get(
					'http://localhost:3001/api/applications?_page=2&_limit=5'
				);
				setApplications(data);
			} catch (err) {
				console.log(
					'There was an error fetching the application data.'
				);
			}
		};
		getApplicationData();
	}, []);

	return (
		<div className={styles.Applications}>
			{applications.map(app => (
				<SingleApplication key={app.id} application={app} />
			))}
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					marginTop: '10px',
				}}>
				<Button
					className={''}
					onClick={() => {
						// do stuff
					}}>
					Load more
				</Button>
			</div>
		</div>
	);
};

export default Applications;
