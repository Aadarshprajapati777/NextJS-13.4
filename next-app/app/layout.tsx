import Footer from '@/components/Footer';
import './global.css';
import Navbar from '@/components/Navbar';


export const metadata={
    title:'Flexibble',
    description:'Learining next 13.4',
}
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Navbar/>
            <main>
            {children}
            </main>

            <Footer/>
            
            </body>
      </html>
    )
  }