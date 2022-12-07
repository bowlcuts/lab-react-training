const CreditCard = (props) => {
    
    let { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    let newExpirationYear = expirationYear.toString().slice(2)


    return (
        <div style={{backgroundColor: bgColor, color: color} }>
         <img src={type==="Master Card" ? '../mastercard.png' : '../image.png'} alt="mastercard"/> 
         <h2>{number.slice(12)}</h2>
         <h2>{expirationMonth}/{newExpirationYear}</h2>
         <h2>{bank}</h2>
         <h2>{owner}</h2>
         
         </div>
        )
}

export default CreditCard;