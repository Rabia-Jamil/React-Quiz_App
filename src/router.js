import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'

class Router extends Component {
   state = {
       login : JSON.parse(localStorage.getItem("currentUser")) ? true : false
   }
    render() { 
        const {login} = this.state;
        return ( 
            <BrowserRouter>
                <div>
                    {login && <Navbar/>}
                    <Switch>
                    <PrivateRoute path="/dashboard" login={login} component={Dashboard}/>
                        <Route exact path="/" component={Login}/>
                        
                    </Switch>
                </div>
            </BrowserRouter>
         );
    }
    
}

const Navbar = () => {
    return(
        <div>
            <strong>Navbar</strong>
        </div>
    )
}

const PrivateRoute = ({component: Component, login, ...rest}) => {
    console.log(login)
    return(
        <Route {...rest}
            render={(props)=> login ? <Component exact {...props}/> : <Redirect to="/" />}
         />
    )
}
 
export default Router;