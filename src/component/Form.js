// import React from "react";
// class Form extends React.Component {
//     state = {
//         todo: []
//     }
//     render() {
//         return (
//             <>
//                 <button onClick={() => {
//                     const u = prompt("name"),
//                         b = prompt("surename"),
//                         c = prompt('ball');
//                     if (u.length > 1 && b.length > 1 && c.length > 1) {
//                         this.setState((p) => {
//                             const a = [...p.todo, { id: p.todo.length + 1, name: u, surename: b, ball: c }]
//                             console.log(p);
//                             return {
//                                 todo: a
//                             }
//                         })
//                     } else {
//                         alert("error")
//                     }
//                 }}>
//                     button
//                 </button>

//                 <table class="table container border border-dark">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">name</th>
//                              <th scope="col">surename</th>
//                             <th scope="col">ball</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.todo.map((item) => {
//                             return (
//                                 <tr>
//                                     <th scope="row">{item.id}</th>
//                                     <td>{item.name}</td>
//                                     <td>{item.surename}</td>
//                                     <td>{item.ball}</td>

//                                     <td><button onClick={() => {
//                                         const pr = +prompt("ball2")
//                                         (this.setState((p)=>{
//                                             const r =[...p.todo.id,{ id:p.todo.length + 1,ball:pr}]
//                                             return {
//                                                 todo: r
//                                             }
//                                         }))
//                                     }}
//                                     >add</button></td>
//                                 </tr>
//                             )
//                         })}

//                     </tbody>
//                 </table>
//             </>
//         )
//     }

// } export default Form;