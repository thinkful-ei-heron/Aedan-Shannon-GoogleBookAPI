import React from 'react';
import SearchFeature from './Components/SearchFeature';
import ResultList from './Components/ResultList';

class BookSearchApp extends React.Component {
  state = {
    form: {
      searchParameter: null,
      printType: 'all',
      bookType: 'noFilter',
    }
    
  }

  fetchData = () => {
    const URL = 'https://www.googleapis.com/books/v1/volumes?';
    let endUrl = [];
    if(this.state.form.searchParameter) endUrl.push(`q={${this.state.form.searchParameter}}`);
    if(this.state.form.bookType !== 'noFilter') endUrl.push(`filter=${this.state.form.bookType}`);
    endUrl.push(`printType=${this.state.form.printType}`);
    let finalUrl = endUrl.join('&');
    console.log(URL + finalUrl);
  }

  search = (event) => {
    event.preventDefault();

    let newForm = {...this.state.form};
    newForm.searchParameter = event.target[0].value;

    this.setState({
      form:newForm
    }, () => this.fetchData());
  }

  changeFilter = (type, value) => {
    let changedForm = {...this.state.form};
    changedForm[type] = value;

    this.setState({
      form: changedForm
    }, () => this.fetchData());
  }

  render() {

  
    return (
      <main className='App'>
        <h1>Google Book Search</h1>
        <SearchFeature form={this.state.form} changeFilter={this.changeFilter} search={this.search}/>
        <ResultList />
      </main>
    );
  }
}

export default BookSearchApp;