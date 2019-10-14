import React from 'react';
import ListItem from './ListItem';
import './ResultList.css';

function ResultList(props) {
  return(
    <ul className="bookSearchResults">
      {props.store.map((item, index) => {
        return <ListItem item={item} key={index} />
      })}
    </ul>
  )
}


export default ResultList;