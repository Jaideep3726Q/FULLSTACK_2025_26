import profile from "./assets/profile.jpg";
function App() {
  return (
    <div style={{fontFamily: "Arial", padding: "40px"}}>
      
      <h1>Hi, I'm Jaideep</h1>
      <p>Computer Science Student | Developer</p>

      <img 
        src={profile} 
        alt="My Photo" 
        width="200"
      />
      <hr />

      <h2>About Me</h2>
      <p>
        I am a Computer Science student interested in software development,
        data structures, and web development. I enjoy building projects and
        learning new technologies.
      </p>

      <h2>Skills</h2>
      <ul>
        <li>C / C++</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Data Structures & Algorithms</li>
      </ul>

      <h2>Projects</h2>
      <ul>
        <li>Portfolio Website</li>
        <li>DSA Practice Programs</li>
      </ul>

      <h2>Contact</h2>
      <p>Email: yourmail@example.com</p>
      <p>GitHub: github.com/yourusername</p>

    </div>
  );
}

export default App;