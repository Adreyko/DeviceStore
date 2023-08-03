import { Providers } from "@/Providers"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/HeaderElements/Header/Header"

export default function PanelLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children} </Providers>
  )
}