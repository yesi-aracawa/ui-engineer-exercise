import {headers, peopleUrl, pastActivitiesUrl, upcomingActivitiesUrl} from "./initConfig";

export const PeopleAPI = () => {

  const getPastActivities = async () => {
    const response = await fetch(pastActivitiesUrl,{headers})
    if (!response.ok) {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
    return response.json()
  }
  const getPeopleData = async () => {
    const response = await fetch(peopleUrl,{headers})
    if (!response.ok) {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
    return response.json()
  }
  const getUpcomingActivities = async () => {
    const response = await fetch(upcomingActivitiesUrl,{headers})
    if (!response.ok) {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
    }
    return response.json()
  }

  return {
    getPeopleData,
    getPastActivities,
    getUpcomingActivities,
  };

}
