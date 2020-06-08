import Header from "../components/Header"
import ProductList from "../components/ProductList"
import Head from 'next/head'

const Tienda = (props) => {
    return (
        <div className="app">
            <Head>
                <title>Marca de ropa Mexicana | JERS</title>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.css" />
                <meta name="description" content="Compra ropa de calidad, JERS te ayuda a definir tu estilo"/>
            
            </Head> 

            <Header />
            <main>
                Hello, Tienda
                <ProductList products={props.products} />
            </main>
            
            <script src="https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.js"></script>
            <div hidden id="snipcart" data-api-key="MjFjYzUwOTMtNDdmNC00NGNlLWIzMGItZTE2N2NkNjIyMGEzNjM3MjQ1MjM5OTQxNzkwMTkz"></div>
        </div>
    )
}
Tienda.getInitialProps = async () => {
    return {
      products: [
        { id: "jers-001", name: "Straight", price: 25.0, image: "static/straight-and-narrow.jpg", description: "Revitalize your living room with this durable and stain hiding carpet." },
        { id: "jers-002", name: "Casonova", price: 25.00, image: "static/casonova.jpg", description: "Your feet will enjoy this fluffy carpet. Well... that is until it gets dirty!" },
        { id: "jers-003", name: "Living Bliss", price: 25.00, image: "static/living-bliss.jpg", description: "This thermally insulated carpet will make sure your room stays nice and warm in the winter." },
        { id: "jers-004", name: "Timeless Beige", price: 25.00, image: "static/timeless-beige.jpg", description: "It might be timeless, but it sure is ugly. This is what I have in my apartment." },
      ]
    }
  }

export default Tienda;
