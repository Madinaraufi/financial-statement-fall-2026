
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
      <td className="p-3 border-b text-right">200,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b">Accounts receivable</td>
      <td className="p-3 border-b text-right">150,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b">Inventory</td>
      <td className="p-3 border-b text-right">50,000</td>
    </tr>
    <tr>
  <td className="p-3 border-b font-semibold">Total current assets</td>
  <td className="p-3 border-b text-right font-semibold">400,000</td>
</tr>

<tr>
  <td colSpan={2} className="p-3 bg-slate-700 font-semibold">
    Property and equipment
  </td>
</tr>
<tr>
  <td className="p-3 border-b">Equipment and vehicles, net</td>
  <td className="p-3 border-b text-right">400,000</td>
</tr>
<tr>
  <td className="p-3 border-b font-semibold">Total assets</td>
  <td className="p-3 border-b text-right font-semibold">$800,000</td>
</tr>

  </tbody>
</table>

<h2 className="text-2xl font-bold mt-8">
  Liabilities and stockholders' equity
</h2>

<table className="w-full mt-4">
  <thead>
    <tr className="bg-slate-700">
      <th className="text-left p-3">Account</th>
      <th className="text-right p-3">Amount (USD)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-3 border-b">Accounts payable</td>
      <td className="p-3 border-b text-right">70,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b font-semibold">Total liabilities</td>
      <td className="p-3 border-b text-right font-semibold">70,000</td>
    </tr>
    <tr>
      <td colSpan={2} className="p-3 bg-slate-700 font-semibold">
        Stockholders' equity
      </td>
    </tr>
    <tr>
      <td className="p-3 border-b">Common stock</td>
      <td className="p-3 border-b text-right">500,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b">Retained earnings</td>
      <td className="p-3 border-b text-right">230,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b font-semibold">Total equity</td>
      <td className="p-3 border-b text-right font-semibold">730,000</td>
    </tr>
    <tr>
      <td className="p-3 border-b font-semibold">
        Total liabilities and equity
      </td>
      <td className="p-3 border-b text-right font-semibold">
        $800,000
      </td>
    </tr>
  </tbody>
</table>

    </div>
  )
}
