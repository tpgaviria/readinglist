import React from 'react';
import ResultItem from '../components/Body/ResultItem';
import API from '../utilities/API';
import SearchInput from '../components/Body/SearchInput/SearchInput';


class SavedPage extends React.Component {
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
        API.searchBooks(this.state.bookInput)
            .then(res => {
                this.setState({ bookData: res.data });
                this.setState({ bookInput: "" });
            })
        console.log('search submitted');
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Saved books:</h1>
                <SearchInput handleSearchInput={this.handleSearchInput.bind(this)} handleSearchSubmit={this.handleSearchSubmit.bind(this)} />
                <ResultItem />
            </div>
        )
    }
};

export default SavedPage;