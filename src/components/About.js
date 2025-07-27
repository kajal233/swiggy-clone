import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="m-6 p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center text-white bg-gray-300 p-4 rounded-lg shadow-md">
        About Us
      </h2>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <User name={"Krati"} location={"Delhi"} contact={"9876543210"} />
        </div>

        <div className="w-full md:w-1/2 p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
          <UserClass name={"Kajal"} location={"Delhi"} contact={"9988876643"} />
        </div>
      </div>
    </div>
  );
};

export default About;
