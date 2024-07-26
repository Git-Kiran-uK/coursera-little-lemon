import { MdConstruction } from "react-icons/md";

function About() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Webpage is under construction</h1>
      <MdConstruction size={50} color="red"/>
    </div>
  );
}

export default About;