import React,{ useState} from 'react';
import './AdminLogin.css';
import Download from '../Download/Download'


export default function AdminLogin({setLogin}) {
    const [username, setUsername] =useState('');
    const [password, setPassword] =useState('');
    const [access, setAccess] = useState(false);
    const [msg, setMsg] = useState("");

    const submitLogin=(event) => {
        event.preventDefault();
        if(username==='admin' && password==='admin@321'){
         setAccess(true);
         setMsg("")

        }
        else{
        setMsg("Username and Password incorrect")
        }
        setUsername('');
        setPassword('');
    }

    return (
        <div>
            { access ? <Download/> :
        <div className="containerLogin">
	<section id="content">
		<form onSubmit={submitLogin}>
			<h1>Admin Login</h1>
			<div>
				<input type="text" value={username} placeholder="Username" required id="username" onChange={(event)=>{setUsername(event.target.value)}} />
			</div>
			<div>
				<input type="password" value={password} placeholder="Password" required id="password"  onChange={(event)=>{setPassword(event.target.value)}} />
			</div>
			<div>
            <p>{msg}</p>
              <div className = "buttonDiv">
				<input type="submit" value="Log in" />   
              <button className="button2" type="button" onClick={()=>{setLogin(false)}}>Back to Form</button>
              </div>
			</div>
		</form>	
	</section>
</div>
}
</div>
    )
}
