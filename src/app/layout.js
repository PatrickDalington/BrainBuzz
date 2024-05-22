import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'
import { TheamContextProvider } from '../context/TheamContext'
import ThemeProvider from '../providers/ThemeProvider'
import { SessionProvider } from 'next-auth/react'
import AuthProvider from '../providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PostIt',
  description: 'Post what is happening around you',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <TheamContextProvider>
            <ThemeProvider>
          <div className='container'>
              <div className='wrapper'>
                <NavBar/>
                
                  {children}
                
                <Footer/>
              </div>
          </div>
          </ThemeProvider>
          </TheamContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
