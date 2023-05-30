import {addDoc, arrayUnion, collection, doc, getDoc, getDocs, updateDoc} from "firebase/firestore/lite";
import { db } from ".";

const servicesCollection = collection(db, 'services');

export const addServiceSegment = async (segmentName: string) => {
    const newSegmentRef = await addDoc(servicesCollection, {
        name: segmentName,
        services: []
    });

    return newSegmentRef.id;
};

export const addServiceToSegment = async (segmentId: string, serviceName: string, data: any) => {
    const segmentRef = doc(servicesCollection, segmentId);

    await updateDoc(segmentRef, {
        services: arrayUnion({
            name: serviceName,
            ...data
        })
    });
};


export const getAllServiceSegments = async () => {
    const querySnapshot = await getDocs(servicesCollection);
    const segments: any = [];
    querySnapshot.forEach((doc) => {
        segments.push({ id: doc.id, ...doc.data() });
    });
    return segments;
};

export const getServicesForSegment = async (segmentId: string) => {
    const segmentRef = doc(servicesCollection, segmentId);
    const segmentDoc = await getDoc(segmentRef);
    if (segmentDoc.exists()) {
        return segmentDoc.data().services;
    } else {
        return [];
    }
};