import React from 'react';

const SearchResults = ( props ) => {

    return (
      <div>
        <table className="table">
              <thead>
                <tr>
                  <th scope="col" >Number</th>
                  <th scope="col">Origin</th>
                  <th scope="col">Destination</th>
                  <th scope="col">Plane</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {props.search.map( r => <tr key={r.id}>
                  <td>{r.number}</td>
                  <td>{r.origin}</td>
                  <td>{r.destination}</td>
                  <td>{r.plane}</td>
                  <td></td>
                  </tr>
                )}
              </tbody>
            </table>
      </div>
    );

} // SearchResults

export default SearchResults;
