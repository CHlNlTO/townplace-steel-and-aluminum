"use client"

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6"
import { LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { ContactCard } from "@/components/component/ContactCard"
import { Mail, MapPinnedIcon, Phone } from "lucide-react"
import { useState } from "react"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useBusinessDetails } from "@/context/BusinessDetailsContext"

interface IconProps {
  className?: string;
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast()


  const business = useBusinessDetails();
  if (!business) return null;

  
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        description: "Text has been copied.",
      });
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };


  return (
    <div className="py-12 lg:py-24 xl:py-32">
      <div className="container grid max-w-2xl px-4 gap-8 sm:gap-12 md:px-6 lg:max-w-3xl xl:max-w-4xl items-center space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <ContactCard />
        </div>
        <div className="space-y-10">
          <h3 className="text-xl font-bold">Reach us here</h3>
          <div className="grid grid-cols-1 gap-4 text-start space-y-8 pl-2 sm:pl-[90px]">
            <div className="flex items-center space-x-2 gap-5 cursor-pointer" onClick={(event: React.MouseEvent<HTMLParagraphElement>) => handleCopy(business.email)}>
              <Mail className="w-6 h-6 opacity-60 hover:opacity-100" />
              <span>{business.email}</span>
            </div>
            <div className="flex items-center space-x-2 gap-5 cursor-pointer" onClick={(event: React.MouseEvent<HTMLParagraphElement>) => handleCopy(business.phone)}>
              <Phone className="w-6 h-6 opacity-60 hover:opacity-100" />
              <span>{business.phone}</span>
            </div>
            <div className="flex items-center space-x-2 gap-5 cursor-pointer" onClick={(event: React.MouseEvent<HTMLParagraphElement>) => handleCopy(business.address)}>
              <MapPinnedIcon className="w-6 h-6 opacity-60 hover:opacity-100" />
              <span>{business.address}</span>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h3 className="text-xl font-bold">Connect with us</h3>
          <div className="grid grid-cols-3 items-center gap-4 text-center space-y-12">
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100 pt-12" href={business.facebook} target="_blank" passHref>
              <FaFacebookF className="mx-auto w-6 h-6" />
              <span className="sr-only">Facebook</span>
              Facebook
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href={business.instagram}  target="_blank" passHref>
              <FaInstagram className="mx-auto w-6 h-6" />
              <span className="sr-only">Instagram</span>
              Instagram
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href={business.twitter} target="_blank" passHref>
              <TwitterLogoIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">Twitter</span>
              Twitter
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href={business.linkedin} target="_blank" passHref>
              <LinkedInLogoIcon className="mx-auto w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
              LinkedIn
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href={business.youtube} target="_blank" passHref>
              <FaYoutube className="mx-auto w-6 h-6" />
              <span className="sr-only">YouTube</span>
              YouTube
            </Link>
            <Link className="flex flex-col gap-1.5 text-sm opacity-60 hover:opacity-100" href={business.tiktok} target="_blank" passHref>
              <FaTiktok className="mx-auto w-6 h-6" />
              <span className="sr-only">TikTok</span>
              TikTok
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}


function StarIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
