import "../HeaderFiles/Header.css"
import Image from "../../assets/react-core-concepts.png"

export default function Header() {

    let quote = ["Fundamental", "Core", "Fun"]
  
    function getIndex(max) {
  
      return Math.floor(Math.random() * (max + 1));
    }
  
    let displayQuote = quote[getIndex(2)];
  
    return (
      <div>
        <header>
          <img src={Image} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {displayQuote} React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
  
      </div>
    )
  }