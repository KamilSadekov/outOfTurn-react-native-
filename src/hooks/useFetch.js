import { useEffect, useState } from "react"
import { apiGet } from "../api"

export const useFetch = ({
	url = null,
	defaultValue = null,
	headerList = {},
}) => {
	const [loading, setLoading] = useState(true)
	const [response, setResponse] = useState(defaultValue)

	const fetchData = async () => {
		apiGet({ url, headerList })
			.then(res => setResponse(res.data))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		if(url){
			fetchData()
		}else{
			setLoading(false)
		}
	}, [url])

	return { response, setResponse, loading, fetchData }
}
