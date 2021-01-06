import React from 'react';
import axios from 'axios';

class CreatePlane extends React.Component {

  state = {
    plane: '',
    rows: 0,
    columns: 0
  }

  handlePlane = (ev) => {
    this.setState({plane: ev.target.value});
  }
  handleRows = (ev) => {
    this.setState({rows: ev.target.value});
  }
  handleColumns = (ev) => {
    this.setState({columns: ev.target.value});
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    axios.post('http://localhost:3000/airplanes', {
      name: this.state.plane,
      rows: this.state.rows,
      columns: this.state.columns,
    })
    .then(response => {
      console.log('Success: ', response);
    })
    .catch(error => {
      console.warn(error);
    });
  }

  render() {

    return (
      <div>
        <h2>Create New Plane:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Plane name:
            <input type="text" onChange={this.handlePlane} />
          </label><br />
          <label>Number of Rows:
            <input type="text" onChange={this.handleRows} />
          </label><br />
          <label>Number of Columns:
            <input type="text" onChange={this.handleColumns} />
          </label><br />
          <button>Create Plane!</button>
        </form>
      </div>
    );

  } // render()

} // class CreatePlane

export default CreatePlane
