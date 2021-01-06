import React from 'react';

class CreateFlight extends React.Component {

  state = {
    number: '',
    origin: '',
    destination: '',
    date: '',
    plane: '',
    plane_id: ''
  }

  handleNumber = (ev) => {
    this.setState({number: ev.target.value});
  }
  handleOrigin = (ev) => {
    this.setState({origin: ev.target.value});
  }
  handleDestination = (ev) => {
    this.setState({destination: ev.target.value});
  }
  handleDate = (ev) => {
    this.setState({date: ev.target.value});
  }
  handlePlane = (ev) => {
    this.setState({plane: ev.target.value});
  }
  handlePlaneID = (ev) => {
    this.setState({plane_id: ev.target.value});
  }

  render() {

    return (
      <div>
        <h2>Create New Flight:</h2>
        <form>
          <label>Enter flight number:
            <input type="text" placeholder="Flight number" onChange={this.handleNumber} />
          </label><br />
          <label>Enter Origin:
            <input type="text" placeholder="Origin" onChange={this.handleOrigin} />
          </label><br />
          <label>Enter Destination:
            <input type="text" placeholder="Destination" onChange={this.handleDestination} />
          </label><br />
          <label>Enter Date:
            <input type="date" onChange={this.handleDate} />
          </label><br />
          <label>Enter Plane:
            <input type="text" placeholder="Plane" onChange={this.handlePlane} />
          </label><br />
          <label>Enter Plane ID:
            <input type="text" placeholder="Plane ID" onChange={this.handlePlaneID} />
          </label><br />
          <button>Create Flight!</button>
        </form>
      </div>
    );

  } // render()

} // class CreateFlight

export default CreateFlight
