import Input from "./components/Input"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <form className="max-w-lg mx-auto my-8 p-8 rounded grid grid-cols-2 gap-x-8 gap-y-10 place-content-center bg-gradient-to-r from-[#307e6c] to-[#2b996d] ">
        <Input htmlFor="initialInvestment" label="Initial Investment" />
        <Input htmlFor="annualInvestment" label="Annual Investment" />
        <Input htmlFor="expectedReturn" label="Expected Return" />
        <Input htmlFor="duration" label="Duration" />
      </form>
    </>
  )
}

export default App
