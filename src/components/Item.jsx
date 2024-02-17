import React, { useState, useEffect } from 'react';
import { getItems } from '../firebase';
import '../styles/item.css';

const Item = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsData = await getItems();
        setItems(itemsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching items:', error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="items-container">
      {items && items.length > 0 ? (
        items.map((item) => (
          <div className="item-card" key={item.name}>
            <h3>{item.name}</h3>
            <img src={item.img_src} alt={item.name} />
            <button type="button">Add to box</button>
          </div>
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default Item;
