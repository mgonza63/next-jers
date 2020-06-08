import Product from "./Product";

const ProductList = (props) => {
  return (
    <div className="products container">
      <div className="row">
        {props.products.map((product, index) => <Product product={product} key={index} />)}
      </div>
    </div>
  )
}

export default ProductList;