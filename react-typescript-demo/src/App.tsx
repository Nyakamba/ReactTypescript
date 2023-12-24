import "./App.css";
import { Heading } from "./Heading";
import { Oscar } from "./Oscar";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Input } from "./components/Input";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
import { LoggedIn } from "./components/state/LoggedIn";

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
      <LoggedIn />
      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}
      {/* <Greet name="Enock" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Leandro Dicpario</Heading>
      </Oscar>
      <Greet name="Enock" isLoggedIn={true} /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button clicked", event, id);
        }}
      /> */}
      {/* <Input
        value=""
        handleChange={(event) => {
          console.log(event);
        }}
      /> */}
    </div>
  );
}

export default App;
