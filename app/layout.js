import '../styles/globals.css';

import { LanguageProvider } from '../context/LanguageContext';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body className="bg-primary-black">
      <LanguageProvider>
        <div className="noise-overlay" />
        {children}
      </LanguageProvider>
    </body>
  </html>
);

export default RootLayout;
