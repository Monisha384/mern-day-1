/* import React from 'react'

export default function App() {
  const productList = [
    {id:1,name:"Phone",price:100,description: "4GB RAM, 64GB Storage"},
    {id:2,name:"Laptop",price:200,description: "i5 Processor, 8GB RAM"},
    {id:3,name:"Headset",price:300,description: "Bluetooth 5.0"},
    {id:4,name:"Keyboard",price:400,description: "Mechanical keyboard" },
    {id:5,name:"Mouse",price:500,description: "Wireless optical mouse"},
  ];

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Description: {product.description}</p>
            <hr/>
          </li>
        ))}
      </ul>
    </div>
  );
}
 */
import React from "react";

export default function App() {
  const productList = [
    {
      id: 1,
      name: "Phone",
      price: 100,
      description: "4GB RAM, 64GB Storage",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbT9VQsYgjyF2ga1lUWTXEDckFcDwUoPW-Rw&s"
    },
    {
      id: 2,
      name: "Laptop",
      price: 200,
      description: "i5 Processor, 8GB RAM",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-N75jJZX7cWT9xNkZMRvfiqV0VnHJN8h9A&s"
    },
    {
      id: 3,
      name: "Headset",
      price: 300,
      description: "Bluetooth 5.0",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIr6DjhdlYKgspOe62YoSZ_Ffhc4OQ31fOjA&s"
    },
    {
      id: 4,
      name: "Keyboard",
      price: 400,
      description: "Mechanical Keyboard",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMl6lIDFwSGXIgDTJuEpMQygMlGIknX5XlQ&s"
    },
      {
      id: 5,
      name: "Mouse",
      price: 500,
      description: "Wireless Optical Mouse",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNHtIr3-aMY894l-By-LYu2gv1clt5xv2nw&s"
    }
  ];

  return (
    <div>
      <h1>Product List</h1>

      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <img 
              src={product.image} 
              alt={product.name} 
              width="150"
              height="150"
            />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p>Description: {product.description}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
