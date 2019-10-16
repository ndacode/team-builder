import React, { useState } from "react";
import Members from "./MemberList";


const Form = props => {
    
    const [member, setMember] = useState([
        {
        Name: '',
        Email: '',
        Role: '',
        Bio: '',
    }
    ]);

    const changeHandler = event => {
        setMember({...member, [event.target.name]: event.target.value});
        console.log(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({Name:"", Email:"", Role:"" });
    }
    
    return (
        <div className = "member-form">
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" placeholder="Name"></input>
                <label htmlFor="email">Email</label>
                    <input name="email" id = "email" type="email" placeholder="Email" ></input>
                <label htmlFor="role">Role</label>
                    <input name="role" id="role" type="text" placeholder="Role"></input>
                <label htmlFor="bio">Bio:</label>
                    <textarea name="bio" id ="bio" type="text" placeholder="Please share where you're from, hobbies and interests." onChange={changeHandler} value={member.bio}></textarea>
                <button type="submit">Join</button>
            </form>
        </div>
    )
}

export default Form;