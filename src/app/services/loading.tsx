import Image from "next/image";

import { ContactCard } from "@/components/component/ContactCard";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main>
      <div className="bg-gray-50 py-12 lg:py-8">
        <div className="container px-4 py-1 md:py-10 space-y-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building the future</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We are committed to providing high-quality construction services with a focus on innovation and
              sustainability.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Architecture</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Transforming dreams into tangible structures, our architectural services blend creativity with functionality to design spaces that inspire and enhance the way we live, work, and play.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Engineering</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  Harnessing the power of science and innovation, our engineering solutions tackle complex challenges with precision and ingenuity, ensuring the seamless integration of technology and infrastructure for a sustainable future.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Renovation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Revitalize your living or working environment with our renovation services. From updating outdated spaces to reimagining layouts, we breathe new life into existing structures, enhancing their aesthetic appeal and functionality.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Landscaping</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Elevate your outdoor space with our landscaping expertise. From lush gardens to tranquil retreats, we craft customized designs that harmonize with nature, creating inviting and sustainable landscapes that enrich your surroundings.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Construction</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">From concept to completion, our construction services bring visions to reality. With meticulous attention to detail and a commitment to quality craftsmanship, we deliver projects that stand the test of time, tailored to your needs and aspirations.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Repair</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Restore functionality and beauty to your property with our repair services. Whether it&apos;s fixing structural damage, addressing wear and tear, or tackling unexpected issues, our skilled technicians provide prompt and reliable solutions to keep your space in top condition.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Design</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Unlock the potential of your space with our innovative design solutions. From conceptualizing layouts to selecting finishes, our team of creatives brings your vision to life, infusing every project with style, functionality, and personality.</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Skeleton className="w-[400px] h-[225px]" />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">Installation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Seamlessly integrate technology and equipment into your space with our professional installation services. Whether it&apos;s setting up state-of-the-art systems or assembling custom fixtures, our experienced technicians ensure efficient and precise installations, tailored to your specifications.</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <section className="w-full py-12 md:py-24 lg:py-28 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to start your project?</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our dedication lies in delivering superior construction services, emphasizing creativity and positive engagement. Reach out to us.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ContactCard />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Materials</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
              Check out some of our recent projects that showcase our expertise and commitment to quality.
            </p>
          </div>
          <div className="grid max-[3] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3xl gap-10 lg:gap-4">
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Community Center</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  A state-of-the-art community center designed for inclusivity and accessibility.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Urban Redevelopment</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  Revitalizing the urban landscape with sustainable and eco-friendly architecture.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Coastal Resort</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  Creating a tranquil seaside retreat with stunning ocean views and modern amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What We Offer</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
              Check out some of our recent projects that showcase our expertise and commitment to quality.
            </p>
          </div>
          <div className="grid max-[3] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3xl gap-10 lg:gap-4">
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Community Center</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  A state-of-the-art community center designed for inclusivity and accessibility.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Urban Redevelopment</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  Revitalizing the urban landscape with sustainable and eco-friendly architecture.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Skeleton className="w-[600px] h-[600px]" />
              <div className="p-4">
                <h3 className="font-bold">Coastal Resort</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  Creating a tranquil seaside retreat with stunning ocean views and modern amenities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
