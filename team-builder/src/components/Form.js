import React, {useState} from "react";

const Form = props =>{

    const [team, setTeam] = useState({
            name: "",
            email: "",
            role: ""
        })

    const changeThis = e => {
        setTeam({...team, [e.target.name]: e.target.value})
    };

    const submitTeam = e => {
        e.preventDefault();
        props.addNewMember(team);
        setTeam({ name:"", email:"", role:""});
    };


return(
    <form onSubmit = {submitTeam}>
        <label htmlForm="name">Name</label>
        <input
            name="name"
            id="name"
            type="text"
            placeholder="Add Name"
            autoComplete="off"
            onChange={changeThis}
            value={team.name}
        />
        <label htmlForm="email">Email</label>
        <input
            name="email"
            id="email"
            type="email"
            placeholder="Add Email"
            autoComplete="off"
            onChange={changeThis}
            value={team.email}
        />
        <label htmlForm="role">Role</label>
        <input
            name="role"
            id="role"
            type="text"
            placeholder="Add Role"
            autoComplete="off"
            onChange={changeThis}
            value={team.role}
        />
        <button type="submit">Add Team Member</button>
    </form>
)
}

export default Form;