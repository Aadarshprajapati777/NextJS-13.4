import Navbar from "./Components/navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <Navbar />
        {children}
        <div> Footer</div>
        </body>
    </html>
  )
}