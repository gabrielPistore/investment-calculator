import logo from "../assets/investment-calculator-logo.png"

function Navbar() {
  return (
    <header className="flex flex-col items-center m-12">
      <img src={logo} alt="" className="w-32 mb-6" />
      <h1 className="text-3xl">Investment Calculator</h1>
    </header>
  )
}

export default Navbar
