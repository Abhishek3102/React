import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const items = ["Kolkata", "Mumbai", "Jaipur", "Delhi"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <button></button>
    </div>
  );
}

export default App;
