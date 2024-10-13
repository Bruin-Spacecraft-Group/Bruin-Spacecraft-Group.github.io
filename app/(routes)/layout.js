import { Metadata } from 'next'
import MainNavbar from '../_components/MainNavbar'
import MainFooter from '../_components/MainFooter'
import Head from 'next/head';
import '../_style/globals.css'
import { Suspense } from "react";
import Loading from './loading';
import CTABanner from '../_components/CTABanner';

export const metadata = {
  title: {
    template: '%s | BruinSpace',
    default: 'BruinSpace',
  },
  description: '...',
  keywords: ['Next.js', 'React', 'JavaScript'],
  icons: {
    icon: 'icons/favicon.ico',
    shortcut: 'icons/favicon.ico',
    apple: 'icons/apple-icon.png',
    other: {
      rel: 'apple-touch-icon',
      url: 'icons/apple-touch-icon.png',
    },
  },
  manifest: 'icons/site.webmanifest',
}

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <MainNavbar />
        <Suspense fallback={<Loading />}>
          <div className='container mx-auto min-w-full z-1'>
            <div>
              <main>{children}</main>
            </div>
          </div>
        </Suspense>
        <CTABanner/>
        <MainFooter />
      </body>
    </html >
  )
}
