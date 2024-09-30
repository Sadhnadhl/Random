import React from "react";
class ListAndKeys extends React.Component {
  render() {
    const { id, title, paragraph1, paragraph2, paragraph3, paragraph4 } =
      this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
        <p>{paragraph4}</p>
      </div>
    );
  }
}

export default ListAndKeys;

// import React from 'react';
// import { vehicles } from './array';
// class VehicleList extends Component {
//   render() {

//     return (
//       <div>
//         <h1>Vehicle List</h1>
//         <ul>
//           {this.props.vehicles.map((vehicle) => (
//             <li key={vehicle.id}>
//               <h2>
//                 {vehicle.type}: {vehicle.name}
//               </h2>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default VehicleList;
