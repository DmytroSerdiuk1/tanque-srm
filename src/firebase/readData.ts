import {DocumentData, QuerySnapshot } from 'firebase/firestore/lite';

export const readData = (data: QuerySnapshot<DocumentData>): any => {
	return data.docs.map((doc) => {
		return doc.data();
	});
};