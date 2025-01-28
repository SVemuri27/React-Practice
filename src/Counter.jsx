import {useState , useEffect} from 'react';

function Counter(){
    const[count, setCount]= useState(0);
    const [multiplication, setMultiplication] = useState(0);

    useEffect(() => {
      setMultiplication(() => count * 4);
    }, [count]);
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>*</button>
        <p>Multiplication: {multiplication}</p>
      </>
    );
  
}

export default Counter;