import React from 'react';
import './login.css'
import { ReactComponent as Logo } from '../../assets/user.svg';
import axios from 'axios';

class Login extends React.Component {
    state = {
        email: '',
        pwd: '',
        users: []
    };

    async componentDidMount(){
        const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await resp.data
        this.setState({users})
        // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>", users);
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.username);
        console.log(e.target.username.value);
        console.log(this.state.users);
        const a = this.state.users.filter(item => item.username === e.target.username.value && item.email === e.target.email.value)
        console.log('a',a);
        if(a.length){
            this.props.isLogin(true)

        }
        else{
            this.props.isLogin(false)

        }
    };
    render() {
        return (
            <div className='div-login'>
                <div className='div-login-logo'>
                    <Logo />
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="username"
                            name="username"
                            placeholder="username..."
                            required
                            onChange={this.handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="email..."
                            required
                            onChange={this.handleChange}
                        />
                        <button onSubmit={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login;
