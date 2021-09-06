import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notes.map((x) => (
        <Note key={x.key} title={x.title} content={x.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
