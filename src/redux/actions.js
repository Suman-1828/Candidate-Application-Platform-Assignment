export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';
export const SET_FILTERS = 'SET_FILTERS';

export const fetchJobs = () => {
  return async dispatch => {
    dispatch({ type: FETCH_JOBS_REQUEST });

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        "limit": 10,
        "offset": 0
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
      };

      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      const data = await response.json();

      dispatch({ type: FETCH_JOBS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_JOBS_FAILURE, payload: error.message });
    }
  };
};

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters
});
