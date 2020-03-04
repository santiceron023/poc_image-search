import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit(event) {
        //no refresh the page
        event.preventDefault();
        this.props.onUserSubmit(this.state.term);        
    }
    
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <div className="field">
                        <label>Image search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;