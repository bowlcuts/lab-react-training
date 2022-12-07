const Random = (props) => {
    
    let { min, max } = props
   
    let random = Math.floor(Math.random() * (max - min));


    return (
        <div className="Random">
            <h1>Random value between {min} and {max} = {random} </h1>
        </div>
    );
};

export default Random;