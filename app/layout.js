import '../styles/globals.css';

import { LanguageProvider } from '../context/LanguageContext';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      {/* Preconnect to Google Fonts for faster loading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload critical font weights only */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@900&display=swap"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@900&display=swap"
        rel="stylesheet"
      />

      {/* Inline critical CSS for instant first paint */}
      <style dangerouslySetInnerHTML={{
        __html: `
        *{margin:0;padding:0;box-sizing:border-box;-ms-overflow-style:none!important;scrollbar-width:none!important}
        *::-webkit-scrollbar{display:none!important;width:0!important;height:0!important}
        body{margin:0;background:#050505;color:#fff;font-family:'Kanit',system-ui,sans-serif;overflow-x:hidden}
        h1,h2,h3,h4,h5,h6{margin:0;font-weight:900;text-transform:uppercase;line-height:1;font-family:'Kanit',system-ui,sans-serif}
        img{display:block;max-width:100%}
        .bg-primary-black{background:#050505}
      `}} />

      {/* Preload critical hero image */}
      <link rel="preload" href="/maxv2-poster.jpg" as="image" fetchPriority="high" />
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
