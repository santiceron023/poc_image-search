import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = (term) => {
        unsplash.get('search/photos', {
            params: {
                query: term
            }
        }).then(
            (rta) => {
                console.log(rta);
                return this.setState({ images: rta.data.results });
            }
        );
    }

    render() {
        return (
            //  className="ui container" style={{ marginTop: '10px' }}>
            <div>
                <SearchBar onUserSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;