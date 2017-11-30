import React from 'react';
import reactdome from 'react-dom';


const App = (props)=>(


    <div>
    
     <h1>App</h1>
     <h3>{props.info}</h3>
     
     </div>

)



const AdminInfo= (WrrapedComponent)=>{
    return (props) => ( 
        
        <div>
        {props.isAdmin ? <h1>This is an admin message</h1> : ''}
        
        <WrrapedComponent {...props}/>
        </div>
    );
       
};

const UserAuthentication = (WrrapedComponent) => {
    return (props) => (

        <div>
        {props.isAuthenticated ? <WrrapedComponent {...props}/>: <p>you are not Authenticated</p>}
       
        </div>
    );
}
   

const Authentication = UserAuthentication(App)
const AdminInfoComponent = AdminInfo(App);

reactdome.render(<Authentication isAuthenticated={true} info = 'this is info'/> , document.getElementById('app'));