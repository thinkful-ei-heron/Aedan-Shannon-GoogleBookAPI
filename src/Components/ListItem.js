import React from 'react';
import './ListItem.css';


function ListItem(props) {
  return(
    <li className="resultItem">
      <h2>{props.item.title}</h2>
      <div className="content">
        <img src={props.item.thumbnail} alt="bookcover" className="bookImage"/>
        <div className="separator">
          <span className="author">Author: {props.item.author}</span>
          <span className="price"> Price: ${props.item.price}</span>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </li>
  )
}


export default ListItem;