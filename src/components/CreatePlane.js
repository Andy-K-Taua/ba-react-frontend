import React from 'react';

class CreatePlane extends React.Component {

  render() {

    return (
      <div>
        <h2>Create New Flight:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Plane name:
            <input type="text" onChange={this.handleNumber} />
          </label><br />
          <label>Number of Rows:
            <input type="text" placeholder="Origin" onChange={this.handleOrigin} />
          </label><br />
          <label>Number of Columns:
            <input type="text" placeholder="Destination" onChange={this.handleDestination} />
          </label><br />
          <button>Create Plane!</button>
        </form>
      </div>
    );

  } // render()

} // class CreatePlane

export default CreatePlane
