import logo from "./logo.svg";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <ProfileCard
        name="Jane Smith"
        photo="https://i.imgur.com/aBVyrT2.jpeg"
        bio="A concise description of Jane Smith."
      />
    </>
  );
}

export default App;
