import React, { useState, useEffect } from 'react';
import { getItems } from '../firebase';
import '../styles/item.css';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsData = await getItems();
      setItems(itemsData);
    };

    fetchItems();
  }, []);

  return (
    <div className="items-container">
      {items.map((item) => (
        <div className="item-card" key={item.name}>
          <h3>{item.name}</h3>
          <img src={item.img_src} alt={item.name} />
          <button type="button">Add to box</button>
        </div>
      ))}
    </div>
  );
};

export default Item;
