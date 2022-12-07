const Greetings = (props) => {
    
    const  { lang, children } = props

    let greeting = ""

    if(lang === "de"){
        greeting = "Hallo"
    } else if (lang === "fr") {
        greeting = "Bonjour"
    } else if (lang === "es"){
        greeting = "Hola"
    } else if (lang === "en") {
        greeting = "hello"
    }


    return (
        <div className="greetings">
            <h2>{greeting} {children}</h2>
            
        </div>
    );
};

export default Greetings;