import './App.css';
import logo from './fc58df24709df8a82edb2a5b44612e67.jpg'



function App() {

const text ="text";
let a = 1;
 let b = 1;
let p = <p>да</p>
let arr = ['orange','apple','pineaple'];
let pay = 63;

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a href="/">ss</a></li>
          <li><a href="/">ss</a></li>
          <li><a href="/">ss</a></li>
          <li><a href="/">ss</a></li>
        </ul>
        <div class="img">
        <img src={logo} alt="img" />
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
      </header>
    </div>
  );
}

export default App;
