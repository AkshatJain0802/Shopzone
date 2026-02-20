import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <Link to={`/product/${product.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;