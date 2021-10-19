// import React, { Component } from 'react'

// export default class Todo extends Component {
//     state = {
//         text: JSON.parse(localStorage.getItem('data')) || []
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={() => {
//                     const r = prompt()

//                     this.setState((p) => {
//                         const a = [...p.text, r]
//                         localStorage.setItem('data', JSON.stringify(a))
//                         return {
//                             text: a
//                         }
//                     })
//                 }}>add</button>
//                 {
//                     <ol>
//                         {this.state.text.map((s) => <li>{s}</li>)}
                       
//                     </ol>
//                 }
//             </>
//         )
//     }
// }
