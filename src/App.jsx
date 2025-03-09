// Import the React library, which allows us to define components

// Import the Players component, which we'll use to show a list of players
import Players from "./features/players/Players";

// Define the App component
export default function App() {
  // This component renders the Players component inside a div
  // This div has a class of 'App', which we could use for styling
  return (
    <section>
      <h1>Puppy Players</h1>
      <div className="App">
        <Players />
      </div>
    </section>
  );
}
