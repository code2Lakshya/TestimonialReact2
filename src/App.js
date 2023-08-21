import { useState } from 'react';
import Card from './components/Card';
import reviews from './data';

function App() {
console.log('button changed app');
  function shift(button, id) {
    if (button === 1) {
      if (id != 0)
        setCurrentCard(reviews[id - 1]);
      else
        setCurrentCard(reviews[(reviews.length) - 1]);
    }

    else if (button === 2) {
      if (id != (reviews.length - 1))
        setCurrentCard(reviews[id + 1]);
      else
        setCurrentCard(reviews[0]);
    }

    else {
      const random = Math.floor(Math.random(0, reviews.length) * (reviews.length));
      const random2 = Math.floor(Math.random(0, reviews.length) * (reviews.length));
      if(reviews[random]!=currentCard)
      setCurrentCard(reviews[random]);
      else
      setCurrentCard(reviews[random2]);
      console.log(random);
    }
  }
  const [currentCard, setCurrentCard] = useState(reviews[0]);
  return (
    <div className='app-container'>
        <h1>Our Testimonial</h1>
        <div className='underline'></div>
      <Card card={currentCard} shift={shift}></Card>
    </div>
  );
}

export default App;
