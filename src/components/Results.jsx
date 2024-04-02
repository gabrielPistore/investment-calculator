import { calculateInvestmentResults, formatter } from "../util/investment"

function Results({ input }) {
  const results = calculateInvestmentResults(input)
  let totalInterest = 0
  let investedCapital = input.initialInvestment

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
        {results.map((result) => {
          totalInterest += result.interest
          investedCapital += input.annualInvestment

          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results
