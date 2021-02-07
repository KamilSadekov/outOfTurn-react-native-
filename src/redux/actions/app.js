import {DATA, UPDATE } from "../types"

export const dataApp = data => {
	return dispatch => {
		localStorage.setItem("dataApp", JSON.stringify(data))

		dispatch({
			type: DATA,
			payload: data,
		})
	}
}

export const update = (data) => {
	return dispatch => {
		localStorage.setItem("userData", JSON.stringify(data))

		dispatch({
			type: UPDATE,
			payload: null,
		})
	}
}
