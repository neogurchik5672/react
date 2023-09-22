import './App.css';
import Header from './components/header.js'
import User from './components/user.js'
import {useState} from 'react';


function App() {


  const [checked, setChecked] = useState(true);


  const texts = ['london', 'ottava', 'kursk', 'new-deli'];
	const [values, setValues] = useState('');
	
	const options = texts.map((text, index) => {
		return <option key={index}>{text}</option>;
	});
	
	let message;
	if (checked) {
		message = <div>
    <h2>Ура, вам уже есть 18</h2>
    <p>
      здесь расположен контент только для взрослых
    </p>
  </div>;
	} else {
		message = <div>
    <p>
      увы, вам еще нет 18 лет:
    </p>
  </div>;
	}

	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
const text ="text";
let a = 1;
 let b = 1;
let p = <p>да</p>
let arr = ['orange','apple','pineaple'];
let pay = 63;
var users = [
  {"name": "Oleg", "age": 19,"furstname": "bulba" },
  {"name": "Taras", "age": 47,"furstname": "bulba" },
  {"name": "Maks", "age": 79,"furstname": "bulba" }
];  
const rest = users.map((item,index )=> <User name={item.name} age={item.age} furstname={item.furstname} /> )

function handle(name){
 console.log(name)

}

const [name, setName] = useState()
const [surname, setSurname] = useState()

function sign(){
 
  let object = {
    name:name,
    surname:surname
  }
  console.log(object)
  
 

}
// function change(event){
//   setName(event.target.value)
//   console.log(name)
// }

  return (
    <div className="App">
<Header />
        <div className="img">
        </div>
        <h3>Ваше имя: {name ? name: 'пусто'}</h3>
        <h3>Ваша фамилия: {surname ? surname: 'пусто'}</h3>
        <div className="input">
          <div className="input_in">
        <p>
         {a+b} Вкусные пельмени, это хорошо?{text}
         {p}
        </p>
        <diV className="yes">
         <input type="radio" value="да" />да<br />
         </diV>
         <div className="yes,of hors">
         <input type="radio" value="нет" />да,конечно<br />
         </div>
         </div>
         </div>
         <ul>
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}.</li>
        </ul>
        {pay>60 ? <li>вы купили товар</li>:<li>ошибка</li>}

        <input type="text" onChange={(event)=>setName(event.target.value)}/>
    <button onClick={()=>handle("Vanya")}>не лезь  ,убьет!</button>
      <div className="arr">{rest}</div>
      
  
     <div className="sign up">
      <input type="text" placeholder="фамилия" onChange={(event)=>setName(event.target.value)} /><br />
      <input type="text" placeholder="имя"  onChange={(event)=>setSurname(event.target.value)} /><br />
      <button onClick={sign}>ввод</button>
       </div>  

       	
<p>задание 62-71</p>
<p>62</p>
		<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<p>состояние: {checked ? 'привет' : 'пока'}</p> 


    <p>63</p>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
		<div>{message}</div>

    <p>64</p>

    <select value={value} onChange={handleChange}>
			<option>San-francisko</option>
			<option>las-vegas</option>
			<option>moscow</option>
			<option>ar-riad</option>
		</select>
		<p>
			ваш выбор: {value}
		</p>

    <p>65</p>

    <select values={values} onChange={(event) => setValues(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {values}
		</p>
     </div>

  
  );
}

export default App;
