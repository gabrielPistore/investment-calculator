import logo from "../assets/investment-calculator-logo.png"

function Navbar() {
  return (
    <nav className="flex flex-col items-center m-12">
      <img src={logo} alt="" className="w-32 mb-6" />
      <h1 className="text-3xl">Investment Calculator</h1>
    </nav>
  )
}

export default Navbar
