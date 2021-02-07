import { useEffect, useState } from "react"

const useDebounce = (value, timeout) => {
	const [state, setState] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setState(value), timeout)

		return () => clearTimeout(handler)
	}, [value])

	return state
}

export default useDebounce
