import { peopleUrl, pastActivitiesUrl, upcomingActivitiesUrl } from "../initConfig";
import { PeopleAPI } from "../PeopleAPI";
import { renderHook } from '@testing-library/react-hooks';
import "regenerator-runtime/runtime.js";

describe('PEOPLE API', () => {
  const { result } = renderHook(() => PeopleAPI());

  it('should be defined', () => {
    expect(PeopleAPI).toBeDefined();
  });
  describe('getPeopleData', () => {
    const people_schema = {
      "id": 1,
      "display_name": "Gary Glover",
      "email_address": "gary@fake.com",
      "phone": "+1 444 555 6666",
      "linkedin_url": "https://www.linkedin.com",
    }
    it('should be defined', () => {
      expect(result.current.getPeopleData).toBeDefined();
    });

    it('the fetch of getPeopleData fails with an error', async () => {
      try {
        await result.current.getPeopleData();
      } catch (e) {
        expect(e).toMatch('error');
      }
    });

    it('the display name contains something and that is Gary Glover (the user)', () => {
      return result.current.getPeopleData().then(data => {
        expect(data['display_name']).toBe(people_schema['display_name']);
      });
    });
  });
  describe('getPastActivities', () => {
    const past_activities_schema = {
      "data": [
        {
          "created_at": "2020-04-09T01:50:06.951221Z",
          "id": "call-1",
          "occurred_at": "2019-10-03T15:00:57.089927Z",
          "dynamic_data": {
            "user_name": "Sean Jones",
            "voicemail_duration": 118
          },
          "type": "voicemail"
        },
      ]
    }
    it('should be defined', () => {
      expect(result.current.getPastActivities).toBeDefined();
    });

    it('the fetch of getPastActivities fails with an error', async () => {
      try {
        await result.current.getPastActivities();
      } catch (e) {
        expect(e).toMatch('error');
      }
    });

    it('the response contains data[]', () => {
      return result.current.getPastActivities().then(data => {
        expect(data['data']).toEqual(expect.arrayContaining(past_activities_schema['data']));
      });
    });
  });
  describe('getUpComingActivities', () => {
    it('should be defined', () => {
      expect(result.current.getUpcomingActivities).toBeDefined();
    });
  });

});