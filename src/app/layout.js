import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafa Soelistiono',
  description: 'portfolio website seorang fullstack developer yang berdedikasi dan berpengalaman',
  metaTags: [
    {
      name: 'google-site-verification',
      content: 'XG3yDt4pxAH4MVa2wN9E0189Job5b8nY-t5CuaX0W5M'
    }
  ]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
