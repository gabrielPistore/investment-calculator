import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"

function Results({ input }) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  const results = calculateInvestmentResults(input)
  let totalInterest = 0
  let investedCapital = input.initialInvestment

  console.log(results)

  return (
    <table className="mx-auto text-right table-fixed max-w-[50rem]">
      <thead className="text-xs text-[#83e6c0]">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="text-sm font-roboto_condensed text-[#c2e9e0] border-spacing-4">
        {/* <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr> */}
        {results.map((result) => {
          totalInterest += result.interest
          investedCapital += input.annualInvestment

          return (
            <tr>
              <td>{result.year}</td>
              <td>{numberFormat.format(result.valueEndOfYear)}</td>
              <td>{numberFormat.format(result.interest)}</td>
              <td>{numberFormat.format(totalInterest)}</td>
              <td>{numberFormat.format(investedCapital)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results
