import apple from './apple.jpg'
import potato from './potato.jpg'
import banana from './banana.jpg'
import cucumber from './cucumber.jpg'
import pieapple from './pineapple.jpg'
function Oneproduct ({name,price,img}) {
return(

     <div key={name}>
      <p> <div className="name"> {name}</div> <div className="price">{price}$ </div>  <div className="img"> <img src={'./'+img}/></div></p>
     </div>
    
)
 
    }
    export default Oneproduct