import { useState } from 'react';

const LikeButton = () => {

    let [myCount, setMyCount] = useState(0);
    const colorArr = ['purple','blue','green','yellow','orange','red'];
    const box = colorArr[Math.random()]

    return (
        <div> 
        <button onClick={() => {
            
            setMyCount(myCount + 1);
            
            
        }}
        >{myCount}Likes
        </button>
        </div>
    )
}

export default LikeButton;