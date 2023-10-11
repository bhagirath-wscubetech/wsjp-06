import { useContext } from 'react';
import ChildA from './ChildA';
import { CounterContext } from './Context/MainContext';
function App() {
  const { price } = useContext(CounterContext);
  return (
    <div className='App'>
      ₹ {price}
      <ChildA />
    </div>
  );
}

export default App;
