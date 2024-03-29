"use client";

import Image from "next/image"
import { useBusinessDetails } from "@/context/BusinessDetailsContext";

export function Projects() {
  const business = useBusinessDetails();
  if (!business) return null;

  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">{business.projectCategory1}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Image
                alt={business.projectTitle1 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage1}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">{business.projectTitle1}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription1}
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">{business.projectCategory2}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt={business.projectTitle2 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage2}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle2}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription2}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle3 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage3}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle3}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
              {business.projectDescription3}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle4 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage4}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle4}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription4}
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">{business.projectCategory3}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt={business.projectTitle5 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage5}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle5}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription5}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle6 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage6}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle6}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription6}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle7 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage7}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle7}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription7}
              </p>
            </div>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-4">{business.projectCategory4}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <Image
                alt={business.projectTitle8 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage8}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle8}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription8}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle9 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage9}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle9}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription9}
              </p>
            </div>
            <div>
              <Image
                alt={business.projectTitle10 + " Image"}
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src={business.projectImage10}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">{business.projectTitle10}</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                {business.projectDescription10}
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}
