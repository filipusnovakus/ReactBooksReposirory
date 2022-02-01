import React, {useState}from "react";
import ReactDom from "react-dom";
import { useEffect } from "react/cjs/react.production.min";
import "./index.css";
import Article from "./Article";

const App = () => {
const [articles, setArticles] = useState([
{ title: "Bezdek 1.2 HTP", body: "vojtik je mrdka", author: "Ablaham", id:0},
{ title: "Tilus Nautilus", body: "Sus kotva", author: "Fila", id:1},
{ title: "50 odstinu sodomy", body: "za 20 let praxe jsem se s takovejma studentama jeste nesetkala", author: "Sodmkova", id:2},


]);
return (
  <div className = "container">
      <Article articles = {articles} />

  </div>
)
}

ReactDom.render(<App />, document.getElementById("root"));
