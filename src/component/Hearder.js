// import React from "react";
// class Hearder extends React.Component{
//     state = {
//         a:0,
//         mas:[],
//         bue:true,
//     }
//     render(){
//         console.log(this.state.mas);
//         return(
//             <>
//             <button onClick={()=>{
//             if(this.state.bue){
//                 this.setState((p)=>{
//                    const s = [...p.mas,'Asan']
//                    p.bue =false
//                    return{mas:s} 
//                   })
//                 }else{
//                 this.setState((p)=>{
//                     const g = [...p.mas,'Uson']
//                     p.bue=true
//                     return{mas:g}   
//                 })
//             }
//             }}>+</button>

//                 {this.state.mas.map((v) => {
//                     return (
//                         <div>{v}</div>
//                     )
//                 }
//                 )}
//                 </>
//         );
// }
// }
// export default Hearder;