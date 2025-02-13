import React from 'react'
import Cards from './components/cards'

const App = () => {
  let myobj = {
    username: "kamaksha",
    grade: 10,

  }
  return (
<>
<div className="text-4xl text-red-400 bg-green-400 p-4 text-center rounded-2xl  hover:text-blue-400 cursor-pointer">IDK what is this!!!!</div>
<br/>
<Cards username = "youthit" btntext = "clickMe"/>
<br/>
<Cards username = "oldit" btntext = "learnMore"/>
</>
  )
}

export default App