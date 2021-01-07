import React from 'react';
import axios from 'axios';

class CreateFlight extends React.Component {

  state = {
    number: '',
    origin: '',
    destination: '',
    date: '',
    planeID: '',
    planes: []
  }

  componentDidMount() {
    this.fetchPlanes();
    window.setInterval(this.fetchPlanes, 5000);
  }

  fetchPlanes = () => {
    axios.get('http://localhost:3000/airplanes')
    .then(response => {
      this.setState({planes: response.data});
    })
    .catch(error => {
      console.warn(error);
    })
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
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <div className="navbar-brand">Create New Flight</div>
          </div>
        </nav>
        <div className="createFlight">
        <form className="row g-3" onSubmit={this.handleSubmit}>
          <div className="col-md-4">
            <label htmlFor="inputFlightNumber4" className="form-label">Enter flight number:
              <input type="text" className="form-control" placeholder="Flight number" onChange={this.handleNumber} />
            </label><br />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEnterOrigin4" className="form-label">Enter Origin:
              <input type="text" className="form-control" placeholder="Origin" onChange={this.handleOrigin} />
            </label><br />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputEnterDestination" className="form-label">Enter Destination:
              <input type="text" className="form-control" placeholder="Destination" onChange={this.handleDestination} />
            </label><br />
          </div>
          <div className="col-md-4">
            <label htmlFor="Enter" className="form=label">Enter Date:
              <input type="date" className="form-control" onChange={this.handleDate} />
            </label><br />
          </div>

          <div className="col-md-4">
          <label htmlFor="inputSelectPlane" className="form-label">Select Plane:
            <select name="plane" className="form-control">
            {
              this.state.planes.length > 0
              &&
              this.state.planes.map(plane => <option key={plane.id}>{plane.name}</option>)
            }
            {/* <input type="text" className="form-control" placeholder="Plane ID" onChange={this.handlePlaneID} /> */}
            </select>
          </label><br />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">Create Flight!</button>
          </div>
        </form>
        </div>
      </div>
    );

  } // render()

} // class CreateFlight

export default CreateFlight
