import React, { useEffect, useState } from 'react';
import SingleApplication from './SingleApplication';
import { getSingleApplicationFixture } from './__fixtures__/applications.fixture';
import styles from './Applications.module.css';
import { Button } from './ui/Button/Button';
import axios from 'axios';

const Applications = () => {
	const [applications, setApplications] = useState<unknown[]>([]);
	const [pages, setPages] = useState(1);
	const [error, setError] = useState('');

	const getApplicationData = async (page: number) => {
		try {
			const { data } = await axios.get(
				`http://localhost:3001/api/appliations?_page=${page}&_limit=5`
			);
			return data;
		} catch (err) {
			setError('There was an error fetching the applications data.');
			console.log(error);
		}
	};

	useEffect(() => {
		(async () => {
			const apps = await getApplicationData(1);
			setApplications(apps);
		})();
	}, []);

	if (error) {
		return <div className={styles.Applications}>{error}</div>;
	}

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
					onClick={async () => {
						const moreApps = await getApplicationData(pages + 1);
						setApplications([...applications, ...moreApps]);
						setPages(pages + 1);
					}}>
					Load more
				</Button>
			</div>
		</div>
	);
};

export default Applications;
