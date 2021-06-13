import "./App.css";
import Form from "./components/Form";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }
  
 
  
  getMovie = async () => {
    const {data}=this.state;
    const form = document.querySelector(".form");
    const mySearch = form.elements.query.value;
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${mySearch}`);
    
    data = await res.json();
    const img = document.createElement("IMG");
    const cardList = document.querySelector(".card-list");
    var images = [];

    // data.forEach((result) => {
    //   if (result.show.image) {
    //     img.src = result.show.image.medium;

    //     // images.push(img);
    //     document.getElementsByTagName("img")[0].src = img.src;
    //     // console.log(cardList);
    //   }
    // });
    cardList.append(images);
    this.setState(() => {});

    function searchMovies(data) {
      for (let result of data) {
        if (result.show.image) {
          console.log(result.show.image.medium);
        }
      }
    }
    searchMovies(data);
  };

  render() {
    return (
      <>
      <Form getMovie={this.getMovie} />;
        <div>
          {this.state.data.map((result, index) => (<img src={result.show.image.medium} key={index}/>))}
       </div>
      </>
      
      )
  }
}



export default App;
