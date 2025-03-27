import User from "./User";

const About = ()=>{

    return (
        <div>
            <h1>about </h1>
            <h2>this is the about page</h2>

            <User name ={ "functional components"} location={"mumbai"}/>
        </div>
    );

};

export default About;