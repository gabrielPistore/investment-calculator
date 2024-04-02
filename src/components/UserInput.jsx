import { useState } from "react"

import Input from "./Input"

function UserInput({ userInput, onChange }) {
  return (
    <form className="max-w-lg mx-auto my-8 p-8 rounded grid grid-cols-2 gap-x-8 gap-y-10 place-content-center bg-gradient-to-r from-[#307e6c] to-[#2b996d] ">
      <Input
        label="initial investment"
        value={userInput.initialInvestment}
        onChange={(e) => onChange("initialInvestment", Number(e.target.value))}
      />
      <Input
        label="annual investment"
        value={userInput.annualInvestment}
        onChange={(e) => onChange("annualInvestment", Number(e.target.value))}
      />
      <Input
        label="expected return"
        value={userInput.expectedReturn}
        onChange={(e) => onChange("expectedReturn", Number(e.target.value))}
      />
      <Input
        label="duration"
        value={userInput.duration}
        onChange={(e) => onChange("duration", Number(e.target.value))}
      />
    </form>
  )
}

export default UserInput
