import React, { useState, useMemo } from "react";
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
const Row = ({ index, style, data }) => {
  const user = data[index];
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

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return fakeData;
    const lower = searchTerm.toLowerCase();
    return fakeData.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.city.toLowerCase().includes(lower) ||
        user.status.toLowerCase().includes(lower)
    );
  }, [searchTerm]);


  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "auto" }}>
      <h2>Virtual Scroll Table</h2>
      {/* 🔍 Search Box */}
      <input
        type="text"
        placeholder="Search by name, city, or status"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "100%",
          fontSize: "16px",
          boxSizing: "border-box",
        }}
      />
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
      {filteredData.length > 0 ? (
        <List
          height={400}
          itemCount={filteredData.length}
          itemSize={50}
          width="100%"
          itemData={filteredData}
        >
          {Row}
        </List>
      ) : (
        <p style={{ padding: "20px", color: "gray" }}>No matching records found.</p>
      )}
    </div>
  );
}

export default App;
