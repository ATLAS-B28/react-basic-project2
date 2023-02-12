import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  //set the state of requests
  const [reqType, setReqType] = useState("users");
  //set the state of items ,it's an array
  const [items, setItems] = useState([]);

  //uuseEffect with function fetchItems which is async-await functions
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItems();
  }, [reqType]); //the dependency is reqType

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      <Table items={items} />
    </div>
  );
}

export default App;
