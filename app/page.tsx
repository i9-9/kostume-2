import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-black">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <p className="title">THIS</p>
        <p className="title">IS</p>
        <p className="title">KOSTÜME</p>
    </div>
      <div className="flex flex-col md:flex-row justify-between mt-6 items-center">
        <Link href='/home' className="link-location mb-4 md:mb-0 md:pr-10">Argentina</Link>
        <Link href='/home' className="link-location">Worldwide</Link>
      </div>
    </main>
  )
}