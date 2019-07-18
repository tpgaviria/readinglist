import React from 'react';
import ResultItem from '../components/Body/ResultItem';
import API from '../utilities/API';
import SearchInput from '../components/Body/SearchInput/SearchInput';


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
    }

    handleSearchInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        console.log('search submitted');
    };

    render() {
        console.log(this.state);
        return (
            <SearchInput handleSearchInput={this.handleSearchInput.bind(this)} handleSearchSubmit={this.handleSearchSubmit.bind(this)} />
        )
    }
};

export default Search;