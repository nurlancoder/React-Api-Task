import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Online Store</h1>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {products.map((product) => (
          <div key={product.id} className="box">
            <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button style={{ backgroundColor: "green", color: "white", padding: "10px", border: "none", borderRadius: "5px" }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
