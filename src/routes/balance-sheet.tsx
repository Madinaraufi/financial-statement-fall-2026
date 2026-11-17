
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/balance-sheet")({
  component: BalanceSheet,
})

function BalanceSheet() {
  return (
    <div>
      <p>Kissena Baked Goods Inc.</p>
      <h1 className="text-4xl font-bold">Balance Sheet</h1>
      <p>As of December 31, 20X5</p>
      <p className="mt-4">Amounts are whole US dollars.</p>

<h2 className="text-2xl font-bold mt-6">Assets</h2>

<table className="w-full mt-4">
  <thead>
    <tr className="bg-slate-700">
      <th className="text-left p-3">Account</th>
      <th className="text-right p-3">Amount (USD)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-3 border-b">Cash</td>
      <td className="p-3 border-b text-right">100,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b">Accounts receivable</td>
      <td className="p-3 border-b text-right">150,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b">Inventory</td>
      <td className="p-3 border-b text-right">200,000</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
