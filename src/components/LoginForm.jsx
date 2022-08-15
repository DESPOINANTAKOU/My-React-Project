import React from 'react';

export default function LoginForm () {

    const handleChange = (event) => {

    }

    const handleSubmit =(event) =>{
        event.preventDefault();
    }


    return (
        <>
            <div>
                <form >
                    <input type="email" name="email" placeholder="email..."  required onChange={handleChange}/>
                    <input type= "password" name="pwd" placeholder='password...' required onChange={handleChange}/>
                    <button type="submit" onSubmit={handleSubmit}>Log In!</button>
                </form>
            </div>
        </>
    )
}