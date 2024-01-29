import React from 'react';
import Item from './Item';
import '../styles/item-list.css';

const ItemList = () => {
  return (
    <div>
      <p>
        Let&apos;s find out a bit more about the items you&apos;re interested in
        selling to us
      </p>
      <p>
        Please take your time to go through the list and add items to your box
        (just click add to box - you can also add notes about the items)
      </p>
      <p>Here&apos;s a list of all the items that we accept:</p>
      <div className="item-list">
        <Item />
      </div>
    </div>
  );
};

export default ItemList;
