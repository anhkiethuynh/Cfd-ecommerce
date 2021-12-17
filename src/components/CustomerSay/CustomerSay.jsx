import React from 'react'
import "./CustomerSay.scss"

function CustomerSay({quote,nameCus}) {
    return (
        <div className="customsay">
             <div className="customsay__quote">
                <p className="quote">
                {/* “ This is an super space for your customers qoute.
                Don’t worry it works smooth as pie. 
                You will get all what you need by writiing a text here “ */}
                {quote}
                </p>
                <p className="customname">{nameCus}</p>
             </div>
            <div className="customsay__img"></div>
        
            
        </div>
    )
}

export default CustomerSay
