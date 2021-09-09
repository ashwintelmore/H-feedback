import React, { Children } from 'react'
import { FaYoutube, GrCircleInformation } from 'react-icons/all';
/**
* @author
* @function Input
**/

const Input = ({
    placeholder = "",
    className = "",
    label = "label",
    messege = "",
    type = "text",
    name = "",
    value = "",
    style,
    onChange = () => { },
    required = "",
    _className = "",
    youtubeLink = "",
    moreImfo = "",
    readOnly = ""
}) => {
    return (
        <div {...style} className={`input ${className}`} >
            <label >{label} {required !== "" ? <span className="red">*</span> : null} </label>
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={type === "file" ? null : value}
                onChange={onChange}
                required={required}
                className={_className}
                readOnly={readOnly === "" ? "" : readOnly}
            />
            <div className="flex">
                {moreImfo === "" ? "" : <a href={youtubeLink} target="_blank"><GrCircleInformation size="22" color="red" style={{ marginTop: "5px", marginRight: "5px" }} /></a>}
                {youtubeLink === "" ? "" : <a href={youtubeLink} target="_blank"><FaYoutube size="30" color="red" /></a>}

                <h5 className="error">{messege === "" ? "" : messege}</h5>
            </div>
        </div>
    )
}

const TextArea = ({
    placeholder = "placeholder",
    className = "",
    label = "label",
    messege = "",
    type = "text",
    name = "",
    value = "",
    style,
    onChange = () => { },
    required = "",
    _className = "",
    youtubeLink = "",
    moreImfo = "",
    readOnly = ""
}) => {
    return (
        <div {...style} className={`input ${className}`} >
            <label >{label} {required !== "" ? <span className="red">*</span> : null} </label>
            <textarea
            cols="70" rows="5"
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={_className}
                readOnly={readOnly === "" ? "" : readOnly}
            ></textarea>
            <div className="flex">
                {moreImfo === "" ? "" : <a href={youtubeLink} target="_blank"><GrCircleInformation size="22" color="red" style={{ marginTop: "5px", marginRight: "5px" }} /></a>}
                {youtubeLink === "" ? "" : <a href={youtubeLink} target="_blank"><FaYoutube size="30" color="red" /></a>}

                <h5 className="error">{messege === "" ? "" : messege}</h5>
            </div>
        </div>
    )
}




export default Input
export {   TextArea };