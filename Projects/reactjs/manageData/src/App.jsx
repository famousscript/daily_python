import "./App.css";
import fakeData from "./userData";
import { FixedSizeList as List } from "react-window";

// Define fixed column widths
const columnStyles = {
  id: { width: "60px" },
  name: { width: "150px" },
  age: { width: "60px" },
  city: { width: "120px" },
  phone: { width: "150px" },
  status: { width: "100px" },
};

const headerStyle = {
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
  padding: "10px",
  border: "1px solid #ccc",
};

const cellStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// Row for virtualized list
const Row = ({ index, style }) => {
  const user = fakeData[index];
  return (
    <div style={{ ...style, display: "flex" }}>
      <div style={{ ...cellStyle, ...columnStyles.id }}>{user.id}</div>
      <div style={{ ...cellStyle, ...columnStyles.name }}>{user.name}</div>
      <div style={{ ...cellStyle, ...columnStyles.age }}>{user.age}</div>
      <div style={{ ...cellStyle, ...columnStyles.city }}>{user.city}</div>
      <div style={{ ...cellStyle, ...columnStyles.phone }}>{user.phone}</div>
      <div style={{ ...cellStyle, ...columnStyles.status }}>{user.status}</div>
    </div>
  );
};

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h2>Virtual Scroll Table</h2>

      {/* Table Header */}
      <div style={{ display: "flex" }}>
        <div style={{ ...headerStyle, ...columnStyles.id }}>ID</div>
        <div style={{ ...headerStyle, ...columnStyles.name }}>Name</div>
        <div style={{ ...headerStyle, ...columnStyles.age }}>Age</div>
        <div style={{ ...headerStyle, ...columnStyles.city }}>City</div>
        <div style={{ ...headerStyle, ...columnStyles.phone }}>Phone</div>
        <div style={{ ...headerStyle, ...columnStyles.status }}>Status</div>
      </div>

      {/* Virtual Scroll List */}
      <List
        height={400}
        itemCount={fakeData.length}
        itemSize={50}
        width="100%"
      >
        {Row}
      </List>
    </div>
  );
}

export default App;
