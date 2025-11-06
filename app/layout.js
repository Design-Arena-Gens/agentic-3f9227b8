export const metadata = {
  title: 'Nexaurro - Digital Service Provider',
  description: 'Digital Marketing, Website Development, UI/UX Design, and Business Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
