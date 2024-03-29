"use client";

import Image from "next/image";
import projectMaterial1 from "@/assets/material_image1.jpg"
import projectMaterial2 from "@/assets/material_image2.jpg"
import projectMaterial3 from "@/assets/material_image3.jpg"
import { ContactCard } from "@/components/component/ContactCard";
import { useBusinessDetails } from "@/context/BusinessDetailsContext";

export function Services() {
  const business = useBusinessDetails();
  if (!business) return null;

  return (
    <main>
      <div className="bg-gray-50 py-8">
        <div className="container px-4 py-1 md:py-10 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Building the future</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              We are committed to providing high-quality construction services with a focus on innovation and
              sustainability.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 space-y-8">
              <div className="flex flex-col gap-2 items-center space-y-1 mt-8">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage1}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle1}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {business.serviceDescription1}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage2}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle2}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                  {business.serviceDescription2}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage3}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle3}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription3}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage4}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle4}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription4}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage5}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle5}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription5}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage6}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle6}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription6}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage7}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle7}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription7}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center space-y-1">
                <Image
                  alt="Services"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height="225"
                  src={business.serviceImage8}
                  width="400"
                />
                <div className="flex flex-col items-center gap-1">
                  <h3 className="font-bold">{business.serviceTitle8}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{business.serviceDescription1}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <section className="w-full py-16">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Materials</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl dark:text-gray-400">
              Check out some of our recent projects that showcase our expertise and commitment to quality.
            </p>
          </div>
          <div className="grid max-[3] gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3xl gap-10 lg:gap-4">
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Image
                alt="Project 1"
                className="object-cover w-full transition-transform group-hover:scale-105 duration-500"
                height="600"
                src={projectMaterial1}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="p-4">
                <h3 className="font-bold">Community Center</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  A state-of-the-art community center designed for inclusivity and accessibility.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Image
                alt="Project 2"
                className="object-cover w-full transition-transform group-hover:scale-105 duration-500"
                height="600"
                src={projectMaterial2}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="p-4">
                <h3 className="font-bold">Urban Redevelopment</h3>
                <p className="text-sm text-gray-500/70 truncate-2-lines dark:text-gray-500/70">
                  Revitalizing the urban landscape with sustainable and eco-friendly architecture.
                </p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl aspect-square">
              <Image
                alt="Project 3"
                className="object-cover w-full transition-transform group-hover:scale-105 duration-500"
                height="600"
                src={projectMaterial3}
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width="600"
              />
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
      <section className="w-full py-16 border-t">
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
      
    </main>
  )
}
