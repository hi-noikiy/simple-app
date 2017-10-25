import _ from 'lodash';

const INITIAL_STATE = {
  data: [],
  startIndex: 1,
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
      data: [
        ...state.data,
        ...action.payload
      ],
      startIndex: state.startIndex + 20.
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
    console.log(action.payload);

    let newData = _.filter(state.data, (item) => item.id !== action.payload.id)


    newData.push(action.payload);

    newData = _.sortBy(newData, (item) => item.id)

    // 얘를 삭제하고
    // 새로운 애를 추가하고
    // id 기준으로 다시 soryBy
    return {
      ...state,
      data: newData,
    }
  }

  if (action.type === 'UPDATE_LENDING_DATA_FAILED') {
    return {
      ...state,
    }
  }

  return {
    ...state,
  }
}
