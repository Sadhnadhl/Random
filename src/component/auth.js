import React from "react";
class  Auth extends React.Component{
    constructor(){
        super();
        this.state={
            isLogin:false
        };
        this.handleButton = this.handleButton.bind(this);
    }
        handleButton() {
            this.setState((prevState) => ({
                isLogin : !prevState.isLogin,
            }));
    }
    render(){
        return(
            <div>{this.state.isLogin?(
            <div><h2>Login in</h2>
                <button onClick={this.handleButton}>Login in</button></div>):(  
                    <div><h2>Sign in</h2>
                        <button onClick={this.handleButton}>Sign in</button></div>)}</div>
        )
    }
}
export default Auth;