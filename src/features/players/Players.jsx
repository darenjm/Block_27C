// Import the React library

// Import the generated hook from our RTK Query API slice
import { usePuppiesQuery } from "../../api/puppyBowlApi";

// Define a new React component
const Players = () => {
  // Use the generated hook to fetch data from the API
  // When the component is first rendered, it will start the API fetch
  // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
  const { data = {}, error, isLoading } = usePuppiesQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  // Show an error message if the fetch failed
  if (error) {
    return (
      <section>
        <h2>Bummer, it broke. Try again in a bit.</h2>
      </section>
    );
  }

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      {/* Map through the data array and generate a div for each player */}
      {data.data.players.map((player) => (
        // Use the player's ID as the key for this div
        <div key={player.id} className="player-card">
          {/* Display the player's image, with the player's name as alt text */}

          <div className="player-details">
            <h2> {player.name} </h2>
            <p> {player.breed} </p>
            <p> {player.status} </p>
            <img
              className="player-image"
              src={player.imageUrl}
              alt={player.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the component so it can be imported and used in other files
export default Players;
