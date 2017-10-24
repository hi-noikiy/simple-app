import _ from 'lodash';

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isPending: false,
  errorMessage: '',
}

const deleteLendingDataReducer = (state, action) => {
  if (action.type === 'DELETE_LENDING_DATA') {
    return {
      ...state,
    }
  }
  if (action.type === 'DELETE_LENDING_DATA') {
    return {
      ...state,
    }
  }
  if (action.type === 'DELETE_LENDING_DATA') {
    return {
      ...state,
    }
  }
}

export default (state = INITIAL_STATE, action) => {
  if (action.type === 'FETCH_LENDING_DATA') {
    return {
      ...state,
    }
  }

  if (action.type === 'FETCH_LENDING_SUCCESS') {
    return {
      ...state,
    }
  }

  if (action.type === 'FETCH_LENDING_FAILED') {
    return {
      ...state,
    }
  }

  if (action.type === 'POST_LENDING_DATA') {
    return {
      ...state,
    }
  }

  if (action.type === 'POST_LENDING_DATA_SUCCESS') {
    return {
      ...state,
    }
  }

  if (action.type === 'POST_LENDING_DATA_FAILED') {
    return {
      ...state,
    }
  }

  if (action.type === 'UPDATE_LENDING_DATA') {
    return {
      ...state,
    }
  }

  if (action.type === 'UPDATE_LENDING_DATA_SUCCESS') {
    return {
      ...state,
    }
  }

  if (action.type === 'UPDATE_LENDING_DATA_FAILED') {
    return {
      ...state,
    }
  }

  deleteLendingDataReducer(state, action);

  return {
    ...state,
  }
}
