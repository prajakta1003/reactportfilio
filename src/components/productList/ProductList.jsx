import "./productList.css";
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire. Its lama</h1>
        <p className="pl-desc">
          I like flowers in spring, rain in summer, leaves in autumn, and snow
          in winter. I like to sleep early, I like to get up late; I like to be
          alone, I like to be surrounded by people. I like country’s peace, I
          like metropolis’ noise; I like the beautiful west lake in Hangzhou, I
          like the flat cornfield in Champaign.
        </p>
      </div>
      <div className="pl-list">
        {products.map(item=>(
          <Product img={item.img}/>

        ))}
        
        
      </div>
    </div>
  );
};

export default ProductList;
