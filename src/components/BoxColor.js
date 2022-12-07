const BoxColor = (props) => {
    
    let {r, g, b} = props
    const box = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        width: '150px',
        height: '50px',
        
    }
    
    return (
        <div style={box}> 
        rgb({r},{g},{b})
        </div>
    )
}

export default BoxColor;