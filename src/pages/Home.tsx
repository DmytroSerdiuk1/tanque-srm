import {doc, setDoc } from 'firebase/firestore/lite';
import React, {useEffect} from 'react';
import { db } from '../firebase';

const Home = () => {
	useEffect(() => {
		setDoc(doc(db, 'cities', 'LA'), {
			name: 'Los Angeles',
			state: 'CA',
			country: 'USA'
		});
	}, []);

	return (
		<div>
            Home
		</div>
	);
};

export default Home;