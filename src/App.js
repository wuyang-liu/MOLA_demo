import './App.css';
import Survey from "./Components/Survey";
import React from "react";
import axios from "axios";

function App(props) {
  const handleDownloadCSV = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/entries',
    }).then(data => {
      console.log(data);
      const encodedUri = encodeURI(data.data);
      const link = window.document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "all_records.csv");
      link.click();
    })
      .catch(err => {
      console.log(err)});
  }

  return (
    <>
      <div className="text-end">
        <button className="btn btn-success" onClick={handleDownloadCSV}>Download CSV</button>
      </div>
      <Survey/>
    </>

  );
}

export default App;
