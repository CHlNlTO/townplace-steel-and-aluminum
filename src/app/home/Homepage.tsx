"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ContactCard } from "@/components/component/ContactCard"

import { BusinessDetailsProvider, useBusinessDetails } from "@/context/BusinessDetailsContext"

export function Homepage() {
  const business = useBusinessDetails();

  if (!business) return null;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-40">
          <div className="absolute inset-0 z-0">
            <Image
              src={business.heroImage}
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 relative z-10">
            <div className="space-y-3 bg-opacity-50 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
                {business.tagline}
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                Precision. Durability. Excellence. Your trusted partner in structural steel and aluminum installation service.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg">Contact us</Button>
            </Link>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From concept to completion, we deliver. Explore our range of services.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 space-y-5">
              <div className="flex flex-col gap-4 items-center pt-5">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredServiceImage1}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.featuredServiceTitle1}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.featuredServiceDescription1}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredServiceImage2}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.featuredServiceTitle2}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  {business.featuredServiceDescription2}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredServiceImage3}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.featuredServiceTitle3}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.featuredServiceDescription3}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Completed Projects</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                See the quality of our work. Stunning transformations and beautiful builds.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredCompletedProject1}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Alpha
                </h3>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredCompletedProject2}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Bravo
                </h3>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredCompletedProject3}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Codec
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
                href="/projects"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied clients. The quality of our work speaks for itself.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-start gap-6 md:gap-8 space-y-5">
              <div className="flex flex-col gap-4 items-center pt-5">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredClientPerson1}
                  width="400"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Alice Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;The team at Construction Inc exceeded my expectations...&quot;
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredClientPerson2}
                  width="400"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Mark Thompson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;Professional, reliable, and committed to quality...&quot;
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-center">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.featuredClientPerson3}
                  width="400"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Sophia Lee</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;I highly recommend Construction Inc for their exceptional...&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ongoing Projects</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Witness the progress. Our team is hard at work, bringing dreams to life.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredOngoingProject1}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Omega
                </h3>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredOngoingProject2}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Phoenix
                </h3>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={business.featuredOngoingProject3}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Guard
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-slate-800"
                href="/projects"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start your project?</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-10">
              Our dedication lies in delivering superior construction services, emphasizing creativity and positive engagement. Reach out to us.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 px-4 text-center md:px-6">
            <ContactCard />
          </div>
        </section>
      </main>
    </div>
  )
}
