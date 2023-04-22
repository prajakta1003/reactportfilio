import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire. It's Prajakta</h1>
        <p className="pl-desc">
          Coming from a background in design, I love creating pages where I’m
          able to actually create enjoyable interactions and experiences for
          everyone! I've always been drawn to both the creative and analytical
          side of development, so I'm so thankful to be able to do both!!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
