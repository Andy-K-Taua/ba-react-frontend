import React from 'react';

const SearchResults = ( props ) => {
  console.log('props', props);
    return (
      <div>
        // <table className="table">
        //       <thead>
        //         <tr>
        //           <th scope="col">Flight Number</th>
        //           <th scope="col">Origin</th>
        //           <th scope="col">Destination</th>
        //           <th></th>
        //           <th></th>
        //         </tr>
        //       </thead>
        //       <tbody>
        //         {props.match.params.search.map( r => <tr key={r.id}>
        //           <td>{r.number}</td>
        //           <td>{r.origin}</td>
        //           <td>{r.destination}</td>
        //           <td></td>
        //           </tr>
        //         )}
        //       </tbody>
        //     </table>
      </div>
    );

} // SearchResults

export default SearchResults;
