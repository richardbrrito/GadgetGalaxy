import React from 'react'
import "./Header.css"
import  {useState} from 'react';

const Header = () => {
    const[open, setOpen] = useState(false);
    return(
            <section className="h-wrapper">
                <div className="h-container">
                    <h1>
                        GadgetGalaxy 
                    </h1>
                    
                    
                    <div className="h-menu">
                        
                        

                        <h3>
                            Stuffs
                        </h3>
                        <h3>
                            Stuffs
                        </h3>
                        
                    </div>
                </div>
            </section>
    )
}

