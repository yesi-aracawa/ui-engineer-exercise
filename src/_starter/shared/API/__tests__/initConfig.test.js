import {
    headers,
    peopleUrl,
    pastActivitiesUrl, 
    upcomingActivitiesUrl
} from '../initConfig.js';

describe('URLs', () => {
    const people_url =  'https://ui-offline-exercise.s3.amazonaws.com/data/people.json';
    const past_activities_url = 'https://ui-offline-exercise.s3.amazonaws.com/data/past_activities/1.json';
    const up_activities_url = 'https://ui-offline-exercise.s3.amazonaws.com/data/upcoming_activities/1.json';
    it('should be defined', () => {
      expect(peopleUrl).toBeDefined();
      expect(pastActivitiesUrl).toBeDefined();
      expect(upcomingActivitiesUrl).toBeDefined();
    });
    it('Should call the right url', () => {
        expect(peopleUrl).toEqual(people_url);
        expect(pastActivitiesUrl).toEqual(past_activities_url);
        expect(upcomingActivitiesUrl).toEqual(up_activities_url);
    });
});
  
describe('Headers', () => {
    const headers_schema = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }
    it('should use the right headers', () => {
         expect(headers).toMatchObject(headers_schema);
         expect(headers['headers']['Content-Type']).toBe(headers_schema['headers']['Content-Type']);
         expect(headers['headers']['Accept']).toBe(headers_schema['headers']['Accept']);
      });
});