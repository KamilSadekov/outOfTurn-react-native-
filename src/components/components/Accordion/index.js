import PropType from "prop-types"
import { useRef, useState } from "react"
import { Icon } from "../Icon"
import  "./index.scss"

const Accordion = ({ title, children }) => {
    const [height, setHeight] = useState(0)

    const content = useRef()

    const toggleAccordion = () => {
        const { clientHeight, scrollHeight } = content.current
        setHeight(clientHeight > 0 ? 0 : scrollHeight)
    }

    return (
        <div
            className={`${
                height > 0 ? "opened" : ""
            } border-1 border-radius mb-2 bg-wh`}
        >
            <div
                className="header f-600 pos cursor-pointer bg-wh p-md-0 p-2"
                onClick={toggleAccordion}
            >
                <div className="d-flex ai-center">
                    <div className="arrowWrap col-auto">
                        <Icon
                            name="arrowDown"
                            size={15}
                            className="arrow trns-03"
                            color="#000"
                        />
                    </div>
                    <div className="col name">{title}</div>
                </div>
            </div>
            <div
                ref={content}
                className="content trns-03"
                style={{ height }}
            >
                <div className="innerWrap h5 pre">
                    {children}
                </div>
            </div>
        </div>
    )
}
Accordion.propTypes = {
    title: PropType.string,
    children: PropType.any,
}

export default Accordion
