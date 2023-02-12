import React,{useState} from 'react'
import './index.css'
export default function App() {
  const [name,setName]=useState();
  const [number,setNumber]=useState();
  const [fruit,setFruit]=useState();
  const[price,setPrice]=useState();
  function submit(){
    if(name && number && fruit && price){
         let str='<td>'+name+'</td><td>'+number+'</td><td>'+fruit+'</td><td>'+price+'</td>';
   document.getElementById('show').innerHTML=str;
    }else{
let str='<td>Empty</td><td>Empty</td><td>Empty</td><td>Empty</td>';
   document.getElementById('show').innerHTML=str;
    }
  }

  function nam(e){
    setName(e.target.value);
  }
   function num(e){
    setNumber(e.target.value);
  }
  function fruitname(e){
    setFruit(e.target.value);
  }
  function pricefruit(e){
    switch(fruit){
     case "Apple":
      setPrice(e.target.value*100);
      break;
      case "Orange":
      setPrice(e.target.value*60);
      break;
      case "PineApple":
      setPrice(e.target.value*50);
      break;
      case "Guava":
      setPrice(e.target.value*60);
      break;
      case "Grapes":
      setPrice(e.target.value*40);
      break;
    }
  }
    const handleSubmit = () => {
   
      fetch("/api/store-value", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name,number,fruit,price })
      });
    };
  return ( 
    <div>  
     <div id='header'>
     <h1>Fruit Shop</h1>
    </div>
    <div id='form'>

      <form onSubmit={handleSubmit}>
        <label>Customer Name:-</label>
        <input type="text" onChange={nam} placeholder="enter your name" required></input><br/>
        <label>Mobile Number:-</label>
        <input type="tel" maxLength="10" placeholder='enter your number' onChange={num} required></input><br/>
        <label> Fruit Name:- </label>
        <select onChange={fruitname}  required>
          <option selected disabled>choose</option>
         <option>Apple </option>
         <option>Orange </option>
         <option>PineApple </option>
         <option>Guava</option>
         <option>Grapes</option>
        </select><br/>
        <label>Quantity(in kg):-</label>
        <input id='kg' type="number" min="1" max="100" placeholder='kg' onChange={pricefruit} required></input><br/>
       <center><button type="button" onClick={submit}>submit</button></center> 
      </form>
      <div>
        <h2>List of Fruits</h2>
        <table>
          <tr>
            <th>Customer Name </th>
            <th>Mobile Number </th>
            <th>Fruit Name </th>
            <th>Price</th>
          </tr>
         <tr id='show'>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>
            <td>Empty</td>

         </tr>
        </table>
      </div>
    </div>
    </div>
  )
}
