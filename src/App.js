import React from "react"
import {useState, useEffect} from "react"
import data from "./db/data.json"
import names from "./db/names.json"
import Accordion from "./components/components/Accordion"
import {useDispatch} from "react-redux";
import {dataApp} from "./redux/actions/app"

const App = () => {
	const merge = require('deepmerge')
	const [datadb, setDatadb] = useState([])
	const [namedb, setNamedb] = useState([])

	const dispatch = useDispatch()

	const getData = () => {
		if(names && data){
			setNamedb(names)
			const {Error, Value, Success} = data
			if(!Error && Success){
				return setDatadb(Value)
			}
			else{
				console.error(Value)
			}
		}
	}


	// let result = () => {
	// 	datadb.map((i, idx) =>
	// 		Object.keys(names) === i.G && names.push(i)
	// 	)
	// }



	const result = merge(datadb, namedb)


	console.log("govno2",result);

	console.log("1234",datadb)
	console.log("1234",namedb)

	useEffect(() => {
		getData()
	},[])

		dispatch(dataApp(result))



	return (
		<div className="container">
			<h1>Me fucking trying to do something by me</h1>
			<div>
				{/*{namedb.map((i, index) => ({...datadb[index], ...i})).map((item, index) => (*/}
				{/*				<Accordion title={item.G} key={index}>*/}
				{/*					{Object.values(item?.B).map((q, index) => (<div key={index}>{q.N} ({item?.p})</div>))}*/}
				{/*				</Accordion>*/}
				{/*))*/}
				{/*}*/}

				{/*{result.map((i, idx) => (*/}
				{/*	<Accordion title={i.G} key={idx}>*/}
				{/*		<div>{}</div>*/}
				{/*	</Accordion>*/}
				{/*))}*/}
			</div>
		</div>
	)
}

export default App
