import React from "react";

export class SearchBar extends React.Component {
  state = {
    term: ""
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleOnSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
