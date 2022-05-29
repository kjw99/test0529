import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Test() {
	const [number, setNumber] = useState(0);

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
      };
      

    const onIncrease = () => {
        setNumber(number + 1)
      }
      const onDecrease = () => {
        setNumber(number - 1)
      }

	return (
		<div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
			
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={goHome}>버튼클릭</button>
		</div>
	);
}

export default Test;
