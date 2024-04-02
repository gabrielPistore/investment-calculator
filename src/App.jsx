import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 300,
    expectedReturn: 5.5,
    duration: 12,
  })

  function handleChange(field, value) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [field]: value,
    }))
  }

  const isInputValid = userInput.duration > 0

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {isInputValid ? (
        <Results input={userInput} />
      ) : (
        <p className="text-center">Duration must be greater than 0</p>
      )}
    </>
  )
}

export default App
