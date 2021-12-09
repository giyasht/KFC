import React from 'react'
import { NavLink } from 'react-router-dom'
import './Card.css'

const Card = (props) => {

    const { name, email, img, facebook, instagram, linkdin } = props
    return (
        <div className="card">
            <div className="content">
                <div className="imgBx"><img src={img} alt="..."/></div>
                <div className="contentBx">
                    <h3>{name}<br /><span className="subheading">{email}</span></h3>
                </div>
            </div>
            <ul className="sci">
                <li>
                    <NavLink to={{pathname:facebook}} ><i className="fab fa-facebook-f" style={{color: 'black'}} aria-hidden="true"></i> </NavLink>
                </li>
                <li>
                    <NavLink to={{pathname:instagram}} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" style={{color: 'black'}} aria-hidden="true"></i> </NavLink>
                </li>
                <li>
                    <NavLink to={{pathname:linkdin}} target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" style={{color: 'black'}} aria-hidden="true"></i> </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Card;

// style="--i: 1" style="--i: 2"  style="--i: 3"