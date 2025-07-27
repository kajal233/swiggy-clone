import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo:{
            name:"Kajal",
            location:"Gurugram",
            contact:"8976543210"
          }  };
    }
 async componentDidMount(){
    // const data = await fetch("https://api.github.com/users/kajal233");
    // const json = await data.json();

    // this.setState({
    //     userInfo:json,
    // });
    // console.log(json);
    // console.log("ComponentDidMount");
   this.timer= setInterval(()=>{
     console.log("Timer");
    },1000);
 }
 componentDidUpdate(){
    console.log("componentDidUpdate");
 }
 componentWillUnmount(){
    clearInterval(this.timer);
    console.log("componentWillUnmount")
 }
    render() {
        const { name, location, contact } = this.state.userInfo;
        
        return (
            <div className="m-4 p-4">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:{contact}</h4>
            </div>
        );
    }
}
export default UserClass;
