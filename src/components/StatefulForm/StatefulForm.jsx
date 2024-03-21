import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(name, email, password);
    }

    const handleNameChange = e =>{
        // console.log(e.target.value);
        setName(e.target.value)
    }
    const handleEmailChange = e =>{
        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
        // console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                type="text" name="name" placeholder="name"/>
                <br /><br />
                <input
                 onChange={handleEmailChange}
                type="email" name="email" placeholder="email"/>
                <br /><br />
                <input
                onChange={handlePasswordChange}
                type="password" name="password" placeholder="password"/>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;