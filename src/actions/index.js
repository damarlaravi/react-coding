//import axios from 'axios';
import SampleData from './data';

/*
    this function call's when click on Save button, from here will make service call
 */
const ROOT_URL = `http://localhost:8080/data/index.json`;
export const EDIT_FORM = 'EDIT_FORM';
export const READ_DATA = "READ_DATA";

export function getProfileData() {
    const response = {
        "id": 1,
        "name": "Ravi",
        "Title": "Remote Developer",
        "profile": "https://www.linkedin.com/in/",
        "selectionData": [ "Champion", "Friend", "Neutral", "Negative", "Competitive camp"]
    };

    //console.log("Response is :: ", response);
    return {
        type: READ_DATA,
        payload: response,
    };
}

export function onSave(formData) {
    console.log(" Form Data is :::  ", formData);
    return {
        type: EDIT_FORM,
        payload: formData,
    };
}