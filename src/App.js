// import React, { useState, useEffect, useRef } from 'react';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState();
  const [rate, setRate] = useState(18);
  const [rate15, setRate15] = useState('');
  const [rate18, setRate18] = useState('currentRate');
  const [rate20, setRate20] = useState('');
  const [rate25, setRate25] = useState('');
  const [forGroup, setForGroup] = useState({});
  const round = (num) => {
    return Math.round(num, 2);
  };
  const roundToCents = (num) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2);
  };
  const updateTotal = (event) => {
    const newTotal = parseInt(event.target.value);
    if (isNaN(newTotal)) {
      setTotal(0);
      return;
    }
    setSubTotal(newTotal);
    const grandTotal = newTotal * (1 + rate / 100);
    setTotal(round(grandTotal));
    // TODO Put this in a useRef to (potentially?) avoid needing state at all for the differenjt amounts.
    const newGroups =
      {'one': grandTotal,
        'two': round(grandTotal / 2),
        'three': round(grandTotal / 3),
        'four': round(grandTotal / 4),
        'five': round(grandTotal / 5),
        'six': round(grandTotal / 6),
        'seven': round(grandTotal / 7),
        'eight': round(grandTotal / 8),
        'nine': roundToCents(grandTotal / 9),
        'ten': roundToCents(grandTotal / 10),
        'fifteen': roundToCents(grandTotal / 15),
        'twenty': roundToCents(grandTotal / 20),
        'thirty': roundToCents(grandTotal / 30),
        'fourty': roundToCents(grandTotal / 40),
        'fifty': roundToCents(grandTotal / 50),
        'sixty': roundToCents(grandTotal / 60),
        'seventy': roundToCents(grandTotal / 70)
      };
    setForGroup(current => { return {...current, ...newGroups }; } );
  };
  const clearRates = () => {
    setRate15('');
    setRate18('');
    setRate20('');
    setRate25('');
  };
  const setTheRate = (rate) => {
    setRate(rate);
    const grandTotal = Math.round(subTotal * (1 + rate / 100), 2);
    setTotal(grandTotal);
    clearRates();
    switch (rate) {
    case 15:
      setRate15('currentRate');
      break;
    case 18:
    default:
      setRate18('currentRate');
      break;
    case 20:
      setRate20('currentRate');
      break;
    case 25:
      setRate25('currentRate');
      break;
    }
  };
  let sums = useRef(null);
  useEffect(() => {
    // TODO
    sums = forGroup.one;
    return sums;
  }, [ total, sums ] );
  return (
    <div className="App">
      <div >
        Meal Amount
      </div>
      <div className="row">
        $<input
          id="mealAmount" autoFocus maxLength="5vw" size="2" autoComplete="off" type="number"
          onChange={updateTotal}
        />
      </div>
      <div className="row">
        <span id="tipRate15" className={rate15}>
          <button className="percentage" onClick={() => { setTheRate(15); }}>15%</button>
        </span>
        <span id="tipRate18" className={rate18}>
          <button className="percentage" onClick={() => { setTheRate(18); }}>18%</button>
        </span>
        <span id="tipRate20" className={rate20}>
          <button className="percentage" onClick={() => { setTheRate(20); }}>20%</button>
        </span>
        <span id="tipRate25" className={rate25}>
          <button className="percentage" onClick={() => { setTheRate(25); }}>25%</button>
        </span>
      </div>
      <div className="total row"><span id="grandTotal" className="percentage"> ${total}</span></div>
      <div id="multiPerson">
        <div className="row"> 2 people = ${ forGroup.two } </div>
        {/* ( <span ref={byTwo}>{byTwo.current}</span> )  </div> */}
        <div className="row"> 3 people = ${ forGroup.three } </div>
        <div className="row"> 4 people = ${ forGroup.four } </div>
        <div className="row"> 5 people = ${ forGroup.five } </div>
        <div className="row"> 6 people = ${ forGroup.six } </div>
        <div className="row"> 7 people = ${ forGroup.seven } </div>
        <div className="row"> 8 people = ${ forGroup.eight } </div>
        <div className="row"> 9 people = ${ forGroup.nine } </div>
        <div className="row party">10 people = ${ forGroup.ten } </div>
        <div className="row party">15 people = ${ forGroup.fifteen } </div>
        <div className="row party">20 people = ${ forGroup.twenty } </div>
        <div className="row party">30 people = ${ forGroup.thirty } </div>
        <div className="row party">40 people = ${ forGroup.fourty } </div>
        <div className="row party">50 people = ${ forGroup.fifty } </div>
        <div className="row party">60 people = ${ forGroup.sixty } </div>
        <div className="row party">70 people = ${ forGroup.seventy } </div>
      </div>
    </div >
  );
}

export default App;
