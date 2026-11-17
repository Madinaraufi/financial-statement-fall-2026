
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/income-statement")({
  component: IncomeStatement,
})

function IncomeStatement() {
  return (
    <div>
      <p>Kissena Baked Goods Inc.</p>
      <h1 className="text-4xl font-bold">Income Statement</h1>
      <p>For the year ended December 31, 20X5</p>
      <p className="mt-4">
        Amounts are whole US dollars. Expenses are deductions
        shown in parentheses.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700">
              <th className="text-left p-3">Account</th>
              <th className="text-right p-3">Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border-b">Net sales</td>
              <td className="p-3 border-b text-right">1,500,000</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Cost of goods sold</td>
              <td className="p-3 border-b text-right">(600,000)</td>
            </tr>
            <tr>
              <td className="p-3 border-b">Gross profit</td>
              <td className="p-3 border-b text-right">900,000</td>
            </tr>
            <tr>
              <td className="p-3 border-b">
                Selling, general, and administrative expenses
              </td>
              <td className="p-3 border-b text-right">(670,000)</td>
            </tr>
            <tr className="font-bold">
              <td className="p-3 border-b-4">Net income</td>
              <td className="p-3 border-b-4 text-right">230,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
