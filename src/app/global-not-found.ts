import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="ru">
      <body>
        <div>
          <h1>This page is not found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </body>
    </html>
  )
}
