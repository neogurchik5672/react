import './App.css';
import logo from './fc58df24709df8a82edb2a5b44612e67.jpg'
function App() {
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
          Вкусные пельмени, это хорошо?
        </p>
        <diV class="yes">
         <input type="radio" value="да" />да<br />
         </diV>
         <div class="yes,of hors">
         <input type="radio" value="нет" />да,конечно<br />
         </div>
         </div>
         </div>
      </header>
    </div>
  );
}

export default App;
