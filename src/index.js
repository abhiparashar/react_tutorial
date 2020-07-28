import React from "react"
import ReactDom from "react-dom"
import './index.css'

function BookStore(){
  return (
    <div className="bookstore">
      <Book/>
      <Book />
      <Book />
    </div>
  )
}

function Book(){
  return <div className="book">
    <ImageCover />
    <Title />
    <Author />
  </div>
}
const ImageCover = () => <img width="200px" src="https://images-na.ssl-images-amazon.com/images/I/51Pke5cnOZL._SX396_BO1,204,203,200_.jpg" alt="wonkey donkey"></img>
const Title = () => <h1 style={{ fontSize: "2rem", color: "red" }}>The C++ Book</h1>

const authorStyle = {
  letterSpacing:"10px",
  color:"green"
}

const Author = () => <p style={authorStyle}>By Smith Smigla</p>

ReactDom.render(<BookStore/>,document.getElementById('root'))