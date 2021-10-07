import React from 'react';
import Home from './Pages/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import NoMatch from './Pages/404Page/404Page';
class App extends React.Component {
    state = {
        isLog: false,
    };
    handleLogin = (isLog) => this.setState({ isLog });
    render() {
        const { isLog } = this.state;
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {
                          !isLog ?
                          <Route exact path='/' render={() => <Login isLogin={this.handleLogin}/>}/>
                            :
                          <Route path='/' render={() => <Home/>}/>
                        }
                        <Route path="*" component={NoMatch} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
