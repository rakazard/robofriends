import { Component } from "react";


class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError : false
        }
    }

    componentDidCatch(hasError, info){
        this.setState({
            hasError : true
        })
    }

    render(){
        if(this.state.hasError){
            return <h1> Oops and Wow something went wrong</h1> 
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;