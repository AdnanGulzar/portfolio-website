
import type { Metadata } from 'next'
import { Fira_Code as FiraCode } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnimationProvider from '@/components/AnimationProvider'
import { SpeedInsights } from '@vercel/speed-insights/next';



export const FiraCodeFont = FiraCode({
  subsets: ["latin"],
  variable: "--font-fira",
  
})

export const metadata: Metadata = {
  title: 'Adnan Gul Portofolio',
  description: 'Web Developer',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body
        className={cn(
          "min-h-screen  antialiased font-fira bg-[#010C15] text-primary w-full  flex justify-center items-center ",
          FiraCodeFont.variable,
          FiraCodeFont.className

        )}
      >
         <AnimationProvider>
        <main className='bg-bgprimary w-full min-h-[94vh] lg:m-4 max-w-[1300px] border-border rounded-lg flex flex-col justify-between z-10 '>
          <div className='h-full'>

        <Header/>
     
        {children}
          </div>
        <Footer/>
        </main>
        </AnimationProvider>

        <SpeedInsights />   
      </body>
    </html>
  )
}

