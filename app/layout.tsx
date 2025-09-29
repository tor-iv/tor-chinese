import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tor Chinese - 每日汉字 | Daily Chinese Character Learning',
  description: 'Master Chinese characters through daily practice, visual radical breakdowns, and spaced repetition. Learn systematically with comprehensive character explanations and interactive features.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
