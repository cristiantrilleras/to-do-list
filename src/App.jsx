import React, { useState } from 'react';
import './App.css'

function App() {
  
  //state hook - 'use state'
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])

  //helper functions

  function addItem() {

    if (!newItem) {
      alert("Enter an Item.")
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item])

    setNewItem("")
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }


  return (
    <div className="App">
    <h1>To do list app</h1>

    <input type="text" 
    placeholder='add an item...'
    className='bar'
    value={newItem}
    onChange={e => setNewItem(e.target.value)}
    />

    <button className='add-button' onClick={() => addItem()}>Add</button>

    <ul>
      {items.map(item => {
        return(
          <li key={item.id}>{item.value} <button className='delete-button' onClick={() => deleteItem(item.id)}>❌</button></li>
        )
      })}

    </ul>
    </div>
    
  );
}

export default App
