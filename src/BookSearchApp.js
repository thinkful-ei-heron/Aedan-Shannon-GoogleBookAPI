import React from 'react';
import SearchFeature from './Components/SearchFeature';
import ResultList from './Components/ResultList';

class BookSearchApp extends React.Component {
  state = {
    store: [],
    form: {
      searchParameter: null,
      printType: 'all',
      bookType: 'noFilter',
    },
    error: null,

  }

  fetchData = () => {
    const URL = 'https://www.googleapis.com/books/v1/volumes?';
    let endUrl = [];
    if (this.state.form.searchParameter) {
      endUrl.push(`q={${this.state.form.searchParameter}}`);
      endUrl.push(`printType=${this.state.form.printType}`);
      if (this.state.form.bookType !== 'noFilter') {
        endUrl.push(`filter=${this.state.form.bookType}`);
      }
      let finalUrl = endUrl.join('&');
      fetch(URL + finalUrl)
        .then(res => {
          return res.json()
        })
        .then(res => {
          if (res.error) {
            throw res
          }
          if (res.totalItems === 0) {
            this.setState({
              error: 'No items found'
            })
            return [];
          } else {
            this.setState({
              error: null,
            })
            const newData = res.items.map(book => {
              return {
                title: book.volumeInfo.title,
                author: (book.volumeInfo.authors ? book.volumeInfo.authors.join(' ') : 'No Author Information'),
                price: (book.saleInfo.listPrice ? book.saleInfo.listPrice.amount : 0),
                description: book.volumeInfo.description,
                thumbnail: (book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : null),
                previewLink: (book.volumeInfo.previewLink ? book.volumeInfo.previewLink : null),
              }
            })
            return newData;
          }
        })
        .then(data => {
          this.setState({
            store: data
          })
        })
        .catch(err => {
          console.log(err);
          this.setState({
            error: err.error.message
          })
        })
    }
  }

  search = (event) => {
    event.preventDefault();

    let newForm = { ...this.state.form };
    newForm.searchParameter = event.target[0].value;
    event.target[0].value = '';

    this.setState({
      form: newForm
    }, () => this.fetchData());
  }

  changeFilter = (type, value) => {
    let changedForm = { ...this.state.form };
    changedForm[type] = value;

    this.setState({
      form: changedForm
    }, () => this.fetchData());
  }

  render() {

    return (
      <main className='App'>
        <header>
          <h1>Google Book Search</h1>
        </header>
        <h2>{this.state.error}</h2>
        <SearchFeature form={this.state.form} changeFilter={this.changeFilter} search={this.search} />
        <ResultList store={this.state.store} />
      </main>
    );
  }
}

export default BookSearchApp;