import React from 'react';

class CreatePlane extends React.Component {


  handleNumber = (ev) => {
    this.setState({number: ev.target.value});
  }
  handleOrigin = (ev) => {
    this.setState({origin: ev.target.value});
  }
  handleDestination = (ev) => {
    this.setState({destination: ev.target.value});
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
