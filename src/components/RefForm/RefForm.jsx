import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(() => {
        nameRef.current.focus()
    },[])

    const handleOnSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        
    }


    return (
        <div>
             <form onSubmit={handleOnSubmit}>
                <input ref={nameRef} type="text" name="name" placeholder="name"/>
                <br /><br />
                <input ref={emailRef} type="email" name="email" placeholder="email" required/>
                <br /><br />
                <input ref={passwordRef} type="password" name="password" placeholder="password"/>
                <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;