
import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
      <header className="flex items-center justify-between border-b border-gray-600 pb-4 mb-6">
  <h2 className="font-bold">Kissena Baked Goods</h2>
  <nav className="flex gap-6">
    <a href="/">Home</a>
    <a href="/income-statement">Income Statement</a>
    <a href="/balance-sheet">Balance Sheet</a>
<Link
  to="/disclosures"
  className="text-white hover:underline"
  activeProps={{
    className: "font-semibold underline",
  }}
  activeOptions={{ exact: true }}
>
  Disclosures
</Link>

  </nav>
</header>
        {children}
<footer className="mt-16 border-t border-gray-600 pt-8 text-sm">
  <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
  <p>© 20X5 Kissena Baked Goods Inc.</p>
  <p>A fictional company used for accounting examples.</p>
</footer>
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
