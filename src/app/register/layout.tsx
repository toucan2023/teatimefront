import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })


interface LayoutProps {
  children: ReactNode;
}


export const metadata: Metadata = {
  title: 'Register',
  description: 'Generated by Toucan',
}

export default function Layout(props:LayoutProps){
  return(
    <div>
      {props.children}
    </div>
  )
}

