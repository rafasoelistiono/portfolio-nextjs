import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafa Soelistiono',
  description: 'portfolio website seorang fullstack developer yang berdedikasi dan berpengalaman',
  metaTags: [
    {
      name: 'google-site-verification',
      content: 'xJq5LZDkKzd0Mil2lc9xiPHzIBPvRzuq9PbZIonUhBU'
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
