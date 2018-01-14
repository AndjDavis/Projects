let defaultState = {
  lat: 40.7608,
  lng: -111.8910,
  markers: []
}

const mainReducer = function (state = defaultState, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        markers: action.markers
      }
    default: 
      return {
        ...defaultState
      }
  }
}

export default mainReducer;