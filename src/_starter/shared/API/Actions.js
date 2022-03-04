import {peopleUrl, pastActivitiesUrl, upcommingActivitiesUrl} from "../../../_starter/shared/API/baseUrls";


export const fetchPeopleData = () => (dispatch) => {
  
    return fetch(peopleUrl,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => console.log(response.json()))
    .catch(error => console.log('Something went wrong fetching the people data'));
  }
