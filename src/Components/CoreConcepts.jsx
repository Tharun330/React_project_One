//One way of writting component
// export default function CoreConcept(props) {

//   return (

//     <li>
//       <img src={props.image}></img>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>

//   )
// }


//component with destructuring paramaters
export default function CoreConcept({image,title,description}) {

    return (
  
      <li>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
  
    )
  }