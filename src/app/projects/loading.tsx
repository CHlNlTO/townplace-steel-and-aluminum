import Image from "next/image"
import Link from "next/link"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Top Construction Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">High-rise Residential Complex</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the high-rise residential complex project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Residential Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Luxury Villa Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the luxury villa construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Affordable Housing Project</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the affordable housing project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Modern Apartment Complex</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the modern apartment complex project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Commercial Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Shopping Mall Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the shopping mall construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Office Building Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the office building construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Hotel Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the hotel construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">Infrastructure Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Bridge Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the bridge construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Road Expansion Project</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the road expansion project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
            <div>
              <Skeleton className="w-[600px] h-[400px]" />
              <h3 className="text-xl font-bold mb-2 mt-4">Airport Construction</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the airport construction project. Click the link to read more.
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
