import React from "react"
import {useState} from "react"

export default function Home(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")

    const formSubmit = (event) =>{
        event.preventDefault();
        alert("Thank you for signing up!");
        setFirstName("");
        setLastName("");
        setEmail("");
    }


    return (
        <div className="home-big-container">
            <div className="home-container">
                <h1>Capturing life's most beautiful moments</h1>
            </div>
            <div className="home-second-container"></div>
            <div className="home-form">
                <h2>Recieve high quality free images by signing up to our newsletter.</h2>
                <form onSubmit={formSubmit}>
                    <div className="form-div">
                        <label htmlFor="firstName">Your First Name:</label>
                        <input type="text" name="firstName" id="firstName" placeholder="First Name..." value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="lastName">Your Last Name:</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name..." value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="form-div">
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-div">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}