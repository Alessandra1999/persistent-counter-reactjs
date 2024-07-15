import { useState, useEffect} from 'react';

function PersistentCounter() {
    const [count, setCount] = useState(() => {
        const storageCount = localStorage.getItem('count');
        return storageCount !== null ? JSON.parse(storageCount) : 0;
    })

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={decrement}>Diminuir</button>
            <button onClick={increment}>Aumentar</button>
        </div>
    )
}

export default PersistentCounter