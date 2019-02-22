import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <form>
          <div className="form-group">
            <label htmlFor="searchbar">Search</label>
            <input
              type="text"
              className="form-control"
              id="searchbar"
              placeholder="Enter search here"
              value={this.props.searchString}
              onChange={event => this.props.handleSearch(event)}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox"
              onChange={event => this.props.handleCheckbox(event)}
            />
            <label className="form-check-label" htmlFor="checkbox">
              Only show products in stock
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
