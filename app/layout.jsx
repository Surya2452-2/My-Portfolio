import '../styles/globals.css';

export const metadata = {
  title: 'Polupalli Surya Narayana — Portfolio',
  description: 'Web Developer and AI/ML Enthusiast Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
