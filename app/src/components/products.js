import Oneproduct from './oneproduct.js'
import apple from './apple.jpg'
import potato from './potato.jpg'
import banana from './banana.jpg'
import cucumber from './cucumber.jpg'
import pineapple from './pineapple.jpg'
function ProductList () {
let product = [
    {"name": "Potato", "price": 19,"img": potato},
    {"name": "Banana", "price": 47,"img": banana },
    {"name": "Apple", "price": 79,"img": apple},
    {"name": "Cucumber", "price": 19,"img": cucumber },
    {"name": "Pineapple", "price": 47,"img": pineapple }
  
  ];  
  const productRoute = product.map((item,index )=> <Oneproduct name={item.name} price={item.price} key={item.index} img={item.img}/> )
  console.log(productRoute)
  return(
    <div className="product">
        {productRoute}
    </div>
  )
}
export default ProductList