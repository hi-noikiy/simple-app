import ApiClient from 'helpers/apiClient';

const API_ENDPOINT = 'http://localhost:3333/exchange';
const lendingApiClient = new ApiClient(API_ENDPOINT, true)

export const fetchLendingData = (startIndex) => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_LENDING_DATA'
    })

    lendingApiClient.get(startIndex)
      .then(result => {
        return dispatch({
          type: 'FETCH_LENDING_SUCCESS',
          payload: result.rates,
        })
      })
  }
}

export const updateLendingData = (id, body) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_LENDING_DATA',
    })

    lendingApiClient.update(id, body)
      .then((result) => {
        dispatch({
          type: 'UPDATE_LENDING_DATA_SUCCESS',
          payload: {
            id: result.id,
            ...body,
          }
        })
      }, (error) => {
        dispatch({
          type: 'UPDATE_LENDING_DATA_FAILED',
        })
      })
  }
}
