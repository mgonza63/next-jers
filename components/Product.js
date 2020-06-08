import ProductDefinition from './ProductDefinition'

const Product = (props) => {
  return (
    <div className="col-xs-6 col-sm-3">
            <img src={props.product.image} alt="product image" className="product__image" />

      <div className="product__information">
        <h2 className="product__title">{props.product.name}</h2>
        <p className="product__description">{props.product.description}</p>
        <ProductDefinition product={props.product} />
      </div>
  <style jsx>{`
    img {
      width: 100px;
    }
    h2 {
      font-size: 10px;
    }
  `}</style>
    </div>
  )
}

export default Product;