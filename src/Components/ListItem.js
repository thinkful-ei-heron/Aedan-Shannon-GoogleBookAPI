import React from 'react';
import './ListItem.css';


function ListItem(props) {
  return(
    <li className="resultItem">
      <h2>{props.item.previewLink ? <a href={props.item.previewLink}>{props.item.title}</a> : props.item.title} </h2>
      <div className="content">
        <img src={props.item.thumbnail ? props.item.thumbnail : 'http://www.4motiondarlington.org/wp-content/uploads/2013/06/No-image-found.jpg'} alt="bookcover" className="bookImage"/>
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