import Header from "../components/Header"
import ProductList from "../components/ProductList"


const Tienda = (props) => {
    return (
        <div> 
            <Header />

            Hello, Tienda
            <ProductList products={props.products} />

        </div>
    )
}
Tienda.getInitialProps = async () => {
    return {
      products: [
        { id: "jers-001", name: "Straight and Narrow", price: 25.0, image: "static/straight-and-narrow.jpg", description: "Revitalize your living room with this durable and stain hiding carpet." },
        { id: "jers-002", name: "Casonova", price: 25.00, image: "static/casonova.jpg", description: "Your feet will enjoy this fluffy carpet. Well... that is until it gets dirty!" },
        { id: "jers-003", name: "Living Bliss", price: 25.00, image: "static/living-bliss.jpg", description: "This thermally insulated carpet will make sure your room stays nice and warm in the winter." },
        { id: "jers-004", name: "Timeless Beige", price: 25.00, image: "static/timeless-beige.jpg", description: "It might be timeless, but it sure is ugly. This is what I have in my apartment." },
      ]
    }
  }

export default Tienda;
