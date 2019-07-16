import React from "react";

class Search extends React.Component {
    state = {
        bookInput: "",
        bookData: []
    };

    // componentDidMount() {
    //     this.setState({  })
    // }


    handleSearchInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    handleSearchSubmit = event => {
        event.preventDefault();
        console.log('search submitted');
        // API.searchBooks(this.state.bookInput)
        //     .then(res => {
        //         this.setState({ bookData: res.data, bookInput: "" });
            // })
    }

    render() {
        return (
            <h1>Search bar and results here</h1>
        )
    }
}

export default Search;