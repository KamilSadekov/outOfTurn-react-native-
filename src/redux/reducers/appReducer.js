/* eslint-disable indent */
import { DATA, UPDATE } from "../types"

const initialState = {
	authToken: null,
	profile: {}
}

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case DATA:
			return { ...state, authToken: payload }
		case UPDATE:
			return { ...state, profile: payload }
		default:
			return state
	}
}
