import './globals.css'

export const metadata = {
  title: 'PraxisNova AI - KI-Schulung und Prozessautomatisierung',
  description: 'KI-Schulung und Prozessautomatisierung fuer Bau und Immobilien. Workshops, Automatisierung und Beratung.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
