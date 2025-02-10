import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 
  const [clickOrder, setClickOrder] = useState([]);
  const [clicked, setClicked] = useState(Array(9).fill(false));
  const[number,setnumber]=useState(0)
  let a=0
const handleClick = (index) => {
  if (!clicked[index]) {
    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
    setClickOrder([...clickOrder, index]);

    if (clickOrder.length === 8) {
      setTimeout(() => {
        clickOrder.forEach((i, orderIndex) => {
          setTimeout(() => {
            const newClickedForOrange = [...newClicked];
            newClickedForOrange[i] = 'orange';
            setClicked(newClickedForOrange);
          }, orderIndex * 300);
        });
      }, 300);
    }
  }
};
  return (
    <div className="grid-container">
      {Array(9).fill().map((_, index) => (
        <div
          key={index}
          className="grid-item"
          style={{ backgroundColor: clicked[index] === 'orange' ? 'orange' : clicked[index] ? 'green' : 'lightgray' }}
          onClick={() => handleClick(index)}
        />
      ))}
      <button onClick={()=>{
       setnumber(number+1)
        }}>{number}</button>
    </div>
  );
}

export default App;
