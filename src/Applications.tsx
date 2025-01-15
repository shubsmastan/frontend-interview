import React from 'react';
import SingleApplication from './SingleApplication';
import { getSingleApplicationFixture } from './__fixtures__/applications.fixture';
import styles from './Applications.module.css';
import { Button } from './ui/Button/Button';

const Applications = () => {
	const applications = getSingleApplicationFixture;

	return (
		<div className={styles.Applications}>
			<SingleApplication application={applications[0]} />
			<Button
				className={''}
				onClick={() => {
					// alert('hey');
				}}>
				Load More
			</Button>
		</div>
	);
};

export default Applications;
