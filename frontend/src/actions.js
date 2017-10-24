const API_ENDPOINT = 'http://localhost:3333/exchange';


export const fetchLendingData = () => {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_LENDING_DATA'
    })

    fetch(API_ENDPOINT)
      .then(resp => resp.json())
      .then((result) => {
        return dispatch({
          type: 'FETCH_LENDING_SUCCESS',
          payload: result.rates,
        })
      }, (error) => {
        return dispatch({
          type: 'FETCH_LENDING_FAILED',
        })
      })
  }
}
