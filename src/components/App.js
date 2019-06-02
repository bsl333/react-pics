import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

export default class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async searchTerm => {

    const resp = await unsplash.get('search/photos', {
      params: { query: searchTerm }
    });

    this.setState({ images: resp.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Results {this.state.images.length}
      </div>
    );
  }
}