import Image from "next/image"
import Link from "next/link"

import teamPerson1 from "@/assets/team_person1.jpg"
import teamPerson2 from "@/assets/team_person2.jpg"

export function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn more about the team behind the platform.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Mission</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Deliver exceptional construction solutions that exceed our clients&apos; expectations, uphold the highest standards of quality and safety, and contribute positively to the communities we serve. We are committed to fostering lasting relationships built on trust, integrity, and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are guided by integrity, quality, safety, innovation, collaboration, community, and continuous improvement. These core values drive us to deliver exceptional construction solutions while fostering trust, safety, innovation, and positive community impact.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6">
            <div className="mx-auto w-full max-w-2xl mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet the Team</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We&apos;re a diverse team of engineers, designers, and advocates who are passionate about our work.
                </p>
              </div>
            </div>
            <div className="mx-auto w-full max-w-5xl grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col gap-1">
                <Image
                  alt="Avatar"
                  className="mx-auto aspect-square rounded-full overflow-hidden object-cover object-center"
                  height="250"
                  src={teamPerson1}
                  width="250"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Sarah Dayan</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">VP of Web3</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Sarah is a developer advocate with a focus on Web3. She&apos;s passionate about making the web more open,
                  secure, and decentralized.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <Image
                  alt="Avatar"
                  className="mx-auto aspect-square rounded-full overflow-hidden object-cover object-center"
                  height="250"
                  src={teamPerson2}
                  width="250"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold">Tim Neutkens</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Co-Founder</p>
                </div>
                <p className="text-sm text-gray-500 md:text-base/relaxed lg:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                  Tim is the co-creator of Next.js and the co-founder of Vercel. He&apos;s on a mission to make building web
                  applications as seamless as possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}