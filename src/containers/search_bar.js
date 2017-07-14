import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions";

class SearchBar extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            term: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: "" });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group" >
                <input
                    className="form-control"
                    placeholder="Get five days forecast forecast on  your favorite cities"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

// We are passing "null" as the second parameters because we don't need any
// app state here.
export default connect(null, mapDispatchToProps)(SearchBar);
