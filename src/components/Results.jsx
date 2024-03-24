import { calculateInvestmentResults } from "../util/investment"

function Results({ params }) {
  const data = params.duration > 1 ? calculateInvestmentResults(params) : []

  console.log(data)

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
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Results
