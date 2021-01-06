import React from 'react';
import axios from 'axios';

class CreateFlight extends React.Component {

  state = {
    number: '',
    origin: '',
    destination: '',
    date: '',
    plane: '',
    planeID: ''
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
    this.setState({planeID: ev.target.value});
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    axios.post('http://localhost:3000/flights', {
      number: this.state.number,
      origin: this.state.origin,
      destination: this.state.destination,
      date: this.state.date,
      plane: this.state.plane,
      airplane_id: this.state.planeID
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
        <h2>Create New Flight:</h2>
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-6">
            <label for="inputFlightNumber4" className="form-label">Enter flight number:
              <input type="text" className="form-control" placeholder="Flight number" onChange={this.handleNumber} />
            </label><br />
          </div>
          <div className="col-md-6">
            <label for="inputEnterOrigin4" className="form-label">Enter Origin:
              <input type="text" className="form-control" placeholder="Origin" onChange={this.handleOrigin} />
            </label><br />
          </div>
          <div className="col-12">
            <label for="inputEnterDestination" className="form-label">Enter Destination:
              <input type="text" className="form-control" placeholder="Destination" onChange={this.handleDestination} />
            </label><br />
          </div>
          <div className="col-md-6">
            <label for="Enter" className="form=label">Enter Date:
              <input type="date" className="form-control" onChange={this.handleDate} />
            </label><br />
          </div>
          <div className="col-md-4">
          <label>Enter Plane:
            <input type="text" placeholder="Plane" onChange={this.handlePlane} />
          </label><br />
          </div>
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
