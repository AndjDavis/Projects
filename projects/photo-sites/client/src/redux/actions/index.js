import axios from "axios";

let url = "http://localhost:8000/markers/";
// const key = "AIzaSyBtzWzc1tAj0mODGR4dV-lClSUn0ZU3Vis";

export function setData(markers) {
  return {
    type: "SET_DATA",
    markers
  }
}

export function loadData() {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        dispatch(setData(response.data))
      })
      .catch((err) => {
        console.error(err)
      })
  }
}