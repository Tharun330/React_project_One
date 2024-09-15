

//{children} parameter is used to access the button's label which was declared at the App.jsx file , passing using forwarding props
export default function TabButton({children, isSelected,...props}) {
  
 


    return (

        <>
            <li>
                <button className= {isSelected  ? "active" : ""} {...props}>{children}</button>
            </li>
        </>

    )
}




// props passing convenctional method
// export default function TabButton({children, onSelect ,isSelected}) {
  
 


//     return (

//         <>
//             <li>
//                 <button className= {isSelected  ? "active" : ""} onClick={onSelect}>{children}</button>
//             </li>
//         </>

//     )
// }