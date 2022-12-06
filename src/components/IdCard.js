const IdCard = (props) => {
    return (
        <div className="id">
            <div className="headshot"> <img src={props.picture} alt='headshot'/> </div>
            <div className="id-details">
                <p><strong>Last Name</strong>: <span>{props.lastName}</span></p>
                <p><strong>First Name</strong>: <span>{props.firstName}</span></p>
                <p><strong>Gender</strong>: <span>{props.gender}</span></p>
                <p><strong>Height</strong>: <span>{props.height}</span></p>
                <p><strong>Birth</strong>: <span></span>{props.birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;