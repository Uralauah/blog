import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from 'components/nav'
import Footer from 'components/footer'
import { baseUrl } from './sitemap'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: '코딩뽕짝',
    template: '%s | 코딩뽕짝',
  },
  description: '코딩 뽕짝은 즐겁고 신나게 코딩을 배우고 나누는 블로그입니다.',
  openGraph: {
    title: '코딩뽕짝',
    description: '코딩 뽕짝은 즐겁고 신나게 코딩을 배우고 나누는 블로그입니다.',
    url: baseUrl,
    siteName: '코딩뽕짝',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile.png',
        width: 800,
        height: 600,
        alt: '프로필 이미지',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/profile.png'],
  },
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        {/* Google Ads 스크립트 */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9260700889545229"
          crossOrigin="anonymous"
        />
        {/* ✅ Google Analytics (GA4) 스크립트 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6FEQKJNH9L"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6FEQKJNH9L', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="antialiased max-w-2xl mx-4 mt-8 sm:mx-auto text-black bg-white dark:text-white dark:bg-black">
        <ThemeProvider attribute='class' defaultTheme='light' >
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
