import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/items")
      .then((req) => req.json())
      .then((data) => setItems(data));
  }, []);

  function renderItems() {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>Item: {item.name}</h3>
          <p>Price: {item.price}</p>
        </div>
      );
    });
  }

  return (
    <main>
      <h1>Example webshop</h1>

      {renderItems()}
      
    </main>
  );
}

export default App;