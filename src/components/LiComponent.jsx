import React from 'react'
import { Link } from 'react-router-dom'


const LiComponent = (props) => {
  return (
    <li key={props.idx}>
        <Link to={props.path}>{props.link}</Link>
    </li>
  )
}

export default LiComponent
