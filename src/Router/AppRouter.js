
import {BrowserRouter,Route, Switch } from 'react-router-dom'
import React from 'react';
import ExpensDashboard from '../components/ExpensDashboard'
import AddExpensePage from '../components/AddExpensePage'
import NotFound from '../components/NotFound'
import EditPage from '../components/EditPage'
import Help from '../components/Help'
import Header from '../components/Header'


/*
 
the way Router works is that it goes inside the router and finds the first match letter of the route url ex. /create and / are equal 
in react. so we have to set exact = true in the props for react to match the exact same given url. 

BROWSERROUTER : Is the main directory component API which looks for rouets 
SWITCH : Is used to look for the specific route and if nothing matches it will show the component with no path prop
Routes : We render it to the DOM so that it goes to the routes before anything else and then the router will chose which component to
render based on the URL .
 */

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
            <Switch>
                <Route  path="/" component={ExpensDashboard} exact={true}/> 
                <Route  path="/create" component={AddExpensePage} />
                <Route  path="/edit" component={EditPage} /> 
                <Route  path="/help" component={Help} />
                <Route  component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>

) ;

export default AppRouter ;