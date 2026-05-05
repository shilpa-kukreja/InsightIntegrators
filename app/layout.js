// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Insight Integrators L.L.C - FZ",
//   description: "Insight Integrators L.L.C - FZ is an independent advisory firm specializing in compliance, audit, governance, and risk advisory.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">

//       <body
      
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }



import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Insight Integrators L.L.C - FZ",
  description:
    "Insight Integrators L.L.C - FZ is an independent advisory firm specializing in compliance, audit, governance, and risk advisory.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager / Ads Script */}
       
        {/* Your Google Ads Script (correct way) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18100457132"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18100457132');
          `}
        </Script>
       

        {children}
      </body>
    </html>
  );
}
