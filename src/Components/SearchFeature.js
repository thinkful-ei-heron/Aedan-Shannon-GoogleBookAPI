import React from 'react';


function SearchFeature(props) {
  return (
    <form>
      <label htmlFor="bookSearch">Search:</label>
      <input id="bookSearch" name="bookSearch" type="text" />
      <button type='submit'>Submit</button>
      <div className="filterOptions">
        <label htmlFor="printType">Print Type:</label>
        <select id="printType" name="printType" value={props.form.printType}>
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
        <label htmlFor="bookType">Book Type:</label>
        <select id="bookType" name="bookType" value={props.form.bookType}>
          <option value="noFilter">No Filter</option>
          <option value="ebooks">eBooks</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="full">Full Volumes</option>
          <option value="paid-ebooks">Paid eBooks</option>
          <option value="partial">Partial Text</option>
        </select>
      </div>
    </form>
  )
}

export default SearchFeature;
