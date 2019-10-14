import React from 'react';
import './ListItem.css';


function ListItem() {
  return(
    <li className="resultItem">
      <h2>Book Title</h2>
      <div className="content">
        <img src="http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api" alt="book" className="bookImage"/>
        <div className="separator">
          <span className="author">Author: name</span>
          <span className="price"> Price: $100.00</span>
          <p className="description">this is the result description</p>
        </div>
      </div>
    </li>
  )
}


export default ListItem;