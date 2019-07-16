import React from "react";
import ResultItem from "../ResultItem/ResultItem";

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
        console.log(this.state);
        return (
            <div>
                <h3>Search for books to add to your list:</h3>
                <div className="row">
                    <form className="form-inline">
                        <div>
                            <input className="form-control form-control-lg" type="text" name="bookInput" onChange={this.handleSearchInput} />
                            <small id="searchbar" className="form-text text-muted">search for a book or author</small>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success mb-4 ml-2">Go</button>
                        </div>
                    </form>

                    <ResultItem />
                </div>
            </div>
        )
    }
}

export default Search;