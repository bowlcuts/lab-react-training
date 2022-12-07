const Rating = (props) => {
    
    let ratingArr = []
    let ratingArr2 = []

    let round = Math.round(props.children)

    for (let i = 0; i < round; i++){
       ratingArr.push(<div><p>★</p></div>)
    } 

    for(let i = 0; i < 5-round; i++){
        ratingArr2.push(<div><p>☆</p></div>)
    }

    return (  
            
        <div className="rating"> 
            
            {ratingArr}{ratingArr2}
        </div>    
    )
}

export default Rating;