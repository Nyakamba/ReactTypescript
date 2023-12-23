import "./App.css";
import { Heading } from "./Heading";
import { Oscar } from "./Oscar";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      {/* <Greet name="Enock" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Leandro Dicpario</Heading>
      </Oscar>
      <Greet name="Enock" isLoggedIn={true} />
    </div>
  );
}

export default App;
