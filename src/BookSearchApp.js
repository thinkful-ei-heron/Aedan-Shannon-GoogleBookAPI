import React from 'react';
import SearchFeature from './Components/SearchFeature';
import ResultList from './Components/ResultList';

class BookSearchApp extends React.Component {
  state = {
    form: {
      printType: 'all',
      bookType: 'noFilter',
    }
    
  }
  render() {

  
  return (
    <main className='App'>
      <h1>Google Book Search</h1>
      <SearchFeature form={this.state.form} />
      <ResultList />
    </main>
  );
  }
}

export default BookSearchApp;