import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import LogoIcon from "@/assets/LogoIcon"
import heroImage from "@/assets/heroImage.jpg"
import serviceImage1 from "@/assets/service_image1.jpg"
import serviceImage2 from "@/assets/service_image2.jpg"
import serviceImage3 from "@/assets/service_image3.jpg"
import completedProject1 from "@/assets/completed_project1.jpg"
import completedProject2 from "@/assets/completed_project2.jpg"
import completedProject3 from "@/assets/completed_project3.jpg"
import ongoingProject1 from "@/assets/ongoing_project1.jpg"
import ongoingProject2 from "@/assets/ongoing_project2.jpg"
import ongoingProject3 from "@/assets/ongoing_project3.jpg"
import person1 from "@/assets/person1.jpg"
import person2 from "@/assets/person2.jpg"
import person3 from "@/assets/person3.jpg"

export function Homepage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="text-sm font-extrabold flex items-center justify-center gap-4" href="#">
          <LogoIcon className="h-8 w-8"/>
          <div className="hidden sm:block">Town Place Steel & Aluminum</div>
          <span className="sr-only">Construction Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6 relative z-10">
          <div className="space-y-3 bg-opacity-50 bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"> 
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-white">
              Quality Steel & Aluminum Services
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-900 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
            Precision. Durability. Excellence. Your trusted partner in structural steel and aluminum installation service.
            </p>
          </div>
          <form className="flex flex-col gap-2 min-[400px]:flex-row">
            <Input className="max-w-sm flex-1" placeholder="Enter your email" type="email" />
            <Button size="lg">Contact us</Button>
          </form>
        </div>
      </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                From concept to completion, we deliver. Explore our range of services.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={serviceImage1}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Stainless Steel Installation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Hand-crafted materials for your space to thrive.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={serviceImage2}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Aluminum Steel Installation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Transform your space with our expertise.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={serviceImage3}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Glass & Window Customization</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Your vision. Our craftsmanship.</p>
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
                See the quality of our work. Stunning transformations and beautiful installations.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={completedProject1}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Alpha
                </h3>
              </div>
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={completedProject2}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Bravo
                </h3>
              </div>
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={completedProject3}
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
                href="#"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied clients. The quality of our work speaks for itself.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-start gap-6 md:gap-8">
              <div className="flex flex-col gap-2">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={person1}
                  width="400"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Alice Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;The team at Construction Inc exceeded my expectations...&quot;
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={person2}
                  width="400"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">Mark Thompson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  &quot;Professional, reliable, and committed to quality...&quot;
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  alt="Testimonial"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={person3}
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ongoing Projects</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Witness the progress. Our team is hard at work, bringing dreams to life.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={ongoingProject1}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Omega
                </h3>
              </div>
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={ongoingProject2}
                  width="500"
                />
                <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-50/90 opacity-0 translate-y-2 group-hover:opacity-100 transition-all pointer-events-none dark:text-gray-900/90 dark:text-gray-900">
                  Project Phoenix
                </h3>
              </div>
              <div className="relative group">
                <Image
                  alt="Projects"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="280"
                  src={ongoingProject3}
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
                href="#"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ready to start your project? Reach out to us.
              </p>
            </div>
            <div className="mx-auto w-full max-sm space-y-2">
              <form className="flex flex-col gap-2 min-[400px]:flex-row">
                <Input className="max-w-md flex-1" placeholder="Enter your email" type="email" />
                <Button size="lg">Contact Us</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Construction Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

