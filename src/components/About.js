import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h2>About us</h2>
           <User name={"Krati"} location={"Mumbai"} contact={"9876543210"}/>
           <UserClass name={"Kajal"} location={"Delhi"} contact={"9988876643"}/>
        </div>
    )
}
export default About;