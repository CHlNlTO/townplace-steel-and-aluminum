"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import LogoIcon from "@/assets/LogoIcon";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { useBusinessDetails } from "@/context/BusinessDetailsContext";

interface IconProps {
  className?: string;
}



export function Navbar() {
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
    <header>
      <section className="px-4 lg:px-6 h-5 flex items-center justify-end gap-5 lg:gap-10 bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-end gap-1">
          <Mail className="h-3 w-3"></Mail>
          <p className="text-[10px] lg:text-[12px] font-medium hover:underline underline-offset-4 cursor-pointer" onClick={(event: React.MouseEvent<HTMLParagraphElement>) => handleCopy(business.email)}>
            {business.email}
          </p>
        </div>
        <div className="flex items-center justify-end gap-1">
          <Phone className="h-3 w-3 fill-white"></Phone>
          <p className="text-[8px] lg:text-[12px] font-medium hover:underline underline-offset-4 cursor-pointer" onClick={(event: React.MouseEvent<HTMLParagraphElement>) => handleCopy(business.phone)}>
            {business.phone}
          </p>
        </div>
        <div className="flex items-center justify-end gap-5">
          <Link href={business.facebook} target="_blank" passHref>
            <FaFacebookF className="h-3 w-3" />
          </Link>
          <Link href={business.instagram} target="_blank" passHref>
            <FaInstagram className="h-3 w-3" />
          </Link>
          <Link href={business.tiktok} target="_blank" passHref>
            <FaTiktok className="h-3 w-3" />
          </Link>
        </div>
      </section>
      <section className="px-4 lg:px-6 h-14 flex items-center border-b-[.1px] border-gray-100 border-opacity-1">
          <Link className="text-sm font-extrabold flex items-center justify-center gap-4" href="/">
            <LogoIcon className="h-8 w-8"/>
            <span className="hidden sm:block">{business.name}</span>
            <span className="sr-only ">{business.name}</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
              Services
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
              Projects
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
              Contact Us
            </Link>
          </nav>
        </section>
    </header>
  )
}

function MountainIcon(props: IconProps) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}