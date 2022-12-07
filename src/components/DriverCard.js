import Rating from "./Rating";

const DriverCard = (props) => {
    
    let {name, rating, img, car} = props

    return (
        <>
            <h3>{name}</h3>
            <Rating>{rating}</Rating>
            <img src={img} alt="profilepic"/>
            <h3>{car.model} {car.licensePlate}</h3>

        </>
    );
};

export default DriverCard;