import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import Table from './components/TableAndGraphs'
import LogIn from './components/LogInPage'

// export default class Index extends React.Component{
//     render() {
//         return(
//         <Router>
           
//             {/* <Route path = {"login"} Component = {LogIn}/> */}
//             <Route path = {"table"} Component = {Table}/>
//         </Router>);

//     }
   
// }




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
