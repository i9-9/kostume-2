import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <h1 className="text-white font-extrabold text-3xl md:text-5xl lg:text-7xl text-center">THIS IS KOSTÜME</h1>
      <div className="flex flex-col md:flex-row justify-between mt-6 items-center">
        <Link href='https://eshop.kostumeweb.net/ar/' className="link-location mb-4 md:mb-0 md:pr-10">Argentina</Link>
        <Link href='https://eshop.kostumeweb.net/us/' className="link-location">Worldwide</Link>
      </div>
    </main>
  )
}