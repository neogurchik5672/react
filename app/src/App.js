import './App.css';
import Header from './components/header.js'
import User from './components/user.js'



function App() {

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
  return (
    <div className="App">
<Header />
        <div class="img">
        </div>
        <div class="input">
          <div class="input_in">
        <p>
         {a+b} Вкусные пельмени, это хорошо?{text}
         {p}
        </p>
        <diV class="yes">
         <input type="radio" value="да" />да<br />
         </diV>
         <div class="yes,of hors">
         <input type="radio" value="нет" />да,конечно<br />
         </div>
         </div>
         </div>
         <ul>
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}</li>
        </ul>
        {pay>60 ? <li>вы купили товар</li>:<li>ошибка</li>}
        

      <div classsName="arr">{rest}</div>
    </div>
  );
}

export default App;
