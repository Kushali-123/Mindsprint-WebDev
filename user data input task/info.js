// function Info({data}){
//     return(
//         <div >
//             <h4>Details </h4>
//             <h4>ID : {data.id}</h4>
//             <h3>Name : {data.name}</h3>
//             <h3>Email : {data.email}</h3>

//         </div>
//     )
// }

// export default Info;

import ListGroup from 'react-bootstrap/ListGroup';

function Info({data}) {
  return (
    <ListGroup>
      <ListGroup.Item>Details</ListGroup.Item>
      <ListGroup.Item>ID : {data.id}</ListGroup.Item>
      <ListGroup.Item>Name : {data.name}</ListGroup.Item>
      <ListGroup.Item>Email : {data.email}</ListGroup.Item>
    </ListGroup>
  );
}

export default Info;