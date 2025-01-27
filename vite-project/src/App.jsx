import { useEffect, useState } from 'react'
import './App.css'

// const Card = (props) => {
//   return (
//     <div>
//       <h2> {props.title} </h2>
//     </div>
//   )
// }

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);


  useEffect(()=>{
    console.log(`${title} has been liked: ${hasLiked}`);
  },[hasLiked])


  // This use effect that runs only once on the mounting of that component(only when that component first appears)
  useEffect(()=>{
    console.log("CARD RENDERED");
  },[])

  return (
    <div className='card' onClick={()=> setCount((prevState)=>{
      return (count + 1);
    })}>
      <h2> {title} <br />{count ? count : ""}</h2>
      <button onClick={()=>{
        setHasLiked(!hasLiked)
        console.log(hasLiked);
      }}>
      {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  )
}

const App = () => {

  return (
    <div className='card-container'>
      <Card title="Bahubali chapter 1" rating={5} isCool={true} actors={[{ name: "Actors" }]} 
      />
      <Card title="Devara" />
      <Card title="Magadhira" />
      <Card title="RRR" />
    </div>
  )
}

export default App
