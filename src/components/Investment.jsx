import { useState } from "react"

import Input from "./Input"

function Investment({ params, onParamsChange }) {
  const [values, setValues] = useState(params)

  function handleChange(e, field) {
    onParamsChange([field], e.target.value)
    setValues((prev) => ({ ...prev, [field]: e.target.value }))
  }

  return (
    <div className="max-w-lg mx-auto my-8 p-8 rounded grid grid-cols-2 gap-x-8 gap-y-10 place-content-center bg-gradient-to-r from-[#307e6c] to-[#2b996d] ">
      <Input
        label="initial investment"
        value={values.initial}
        onChange={(e) => handleChange(e, "initial")}
      />
      <Input
        label="annual investment"
        value={values.annual}
        onChange={(e) => handleChange(e, "annual")}
      />
      <Input
        label="expected return"
        value={values.expectedReturn}
        onChange={(e) => handleChange(e, "expectedReturn")}
      />
      <Input
        label="duration"
        value={values.duration}
        onChange={(e) => handleChange(e, "duration")}
      />
    </div>
  )
}

export default Investment
