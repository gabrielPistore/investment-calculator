import { useState } from "react"

import Header from "./components/Header"
import Investment from "./components/Investment"
import Results from "./components/Results"

function App() {
  const [investment, setInvestment] = useState({
    initial: 10000,
    annual: 300,
    expectedReturn: 5.5,
    duration: 12,
  })

  console.log(investment)

  function handleParamsChange(param, newValue) {
    setInvestment((prev) => ({
      ...prev,
      [param]: newValue,
    }))
  }

  return (
    <>
      <Header />
      <Investment params={investment} onParamsChange={handleParamsChange} />
      <Results params={investment} />
    </>
  )
}

export default App
