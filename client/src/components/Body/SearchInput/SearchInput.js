import React from "react";

const SearchInput = props => {
    return (
        <div>
            <h3>Search for books to add to your list:</h3>
            <div className="row">
                <form className="form-inline">
                    <div>
                        <input className="form-control form-control-lg" type="text" name="bookInput" onChange={event => props.handleSearchInput(event)} required />
                        <small id="searchbar" className="form-text text-muted">search for a book or author</small>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success mb-4 ml-2" onClick={event => props.handleSearchSubmit(event)}>Go</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SearchInput;
