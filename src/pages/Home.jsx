import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopZone</h1>
          <p>Your one-stop shop for the latest trends and best deals.</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="Product" />
            <h3>Stylish Shoes</h3>
            <p>$59.99</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="Product" />
            <h3>Modern Watch</h3>
            <p>$89.99</p>
          </div>

          <div className="product-card">
            <img src="https://via.placeholder.com/250" alt="Product" />
            <h3>Trendy Jacket</h3>
            <p>$129.99</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;