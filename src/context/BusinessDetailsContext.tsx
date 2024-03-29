"use client";

import React, { createContext, useContext } from 'react';
import { StaticImageData } from 'next/image';

// Home Page Imports
import heroImage from "@/assets/heroImage.jpg";
import featuredServiceImage1 from "@/assets/featured_service_image1.jpg";
import featuredServiceImage2 from "@/assets/featured_service_image2.jpg";
import featuredServiceImage3 from "@/assets/featured_service_image3.jpg";
import featuredCompletedProject1 from "@/assets/featured_completed_project1.jpg";
import featuredCompletedProject2 from "@/assets/featured_completed_project2.jpg";
import featuredCompletedProject3 from "@/assets/featured_completed_project3.jpg";
import featuredClientPerson1 from "@/assets/featured_client_person1.jpg";
import featuredClientPerson2 from "@/assets/featured_client_person2.jpg";
import featuredClientPerson3 from "@/assets/featured_client_person3.jpg";
import featuredOngoingProject1 from "@/assets/featured_ongoing_project1.jpg";
import featuredOngoingProject2 from "@/assets/featured_ongoing_project2.jpg";
import featuredOngoingProject3 from "@/assets/featured_ongoing_project3.jpg";

// Service Page Imports
import serviceImage1 from "@/assets/service_image1.jpg";
import serviceImage2 from "@/assets/service_image2.jpg";
import serviceImage3 from "@/assets/service_image3.jpg";
import serviceImage4 from "@/assets/service_image4.jpg";
import serviceImage5 from "@/assets/service_image5.jpg";
import serviceImage6 from "@/assets/service_image6.jpg";
import serviceImage7 from "@/assets/service_image7.jpg";
import serviceImage8 from "@/assets/service_image8.jpg";

// Project Page Imports
import projectImage1 from "@/assets/project_image1.jpg";
import projectImage2 from "@/assets/project_image2.jpg";
import projectImage3 from "@/assets/project_image3.jpg";
import projectImage4 from "@/assets/project_image4.jpg";
import projectImage5 from "@/assets/project_image5.jpg";
import projectImage6 from "@/assets/project_image6.jpg";
import projectImage7 from "@/assets/project_image7.jpg";
import projectImage8 from "@/assets/project_image8.jpg";
import projectImage9 from "@/assets/project_image9.jpg";
import projectImage10 from "@/assets/project_image10.jpg";


interface BusinessDetails {
  name: string;
  tagline: string;
  taglineDescription: string;
  email: string;
  phone: string;
  address: string;
  facebook: string;
  instagram: string;
  twitter: string;
  linkedin: string;
  youtube: string;
  tiktok: string;

  // Home Page Details
    // Main Image
      heroImage: StaticImageData;

    // Featured Service
      //Featured Service Images
        featuredServiceImage1: StaticImageData;
        featuredServiceImage2: StaticImageData;
        featuredServiceImage3: StaticImageData;

      // Featured Service Titles
        featuredServiceTitle1: string;
        featuredServiceTitle2: string;
        featuredServiceTitle3: string;
      // Featured Service Descriptions
        featuredServiceDescription1: string;
        featuredServiceDescription2: string;
        featuredServiceDescription3: string;
    
    // Featured Completed Projects
      // Featured Completed Project Images
        featuredCompletedProject1: StaticImageData;
        featuredCompletedProject2: StaticImageData;
        featuredCompletedProject3: StaticImageData;

    // Featured Clients
      // Featured Clients Images
        featuredClientPerson1: StaticImageData;
        featuredClientPerson2: StaticImageData;
        featuredClientPerson3: StaticImageData;
    
    // Featured Ongoing Projects
      // Featured Ongoing Project Images
        featuredOngoingProject1: StaticImageData;
        featuredOngoingProject2: StaticImageData;
        featuredOngoingProject3: StaticImageData;


  // Service Page Details
    // Service Images
      serviceImage1: StaticImageData;
      serviceImage2: StaticImageData;
      serviceImage3: StaticImageData;
      serviceImage4: StaticImageData;
      serviceImage5: StaticImageData;
      serviceImage6: StaticImageData;
      serviceImage7: StaticImageData;
      serviceImage8: StaticImageData;

    // Service Titles
      serviceTitle1: string;
      serviceTitle2: string;
      serviceTitle3: string;
      serviceTitle4: string;
      serviceTitle5: string;
      serviceTitle6: string;
      serviceTitle7: string;
      serviceTitle8: string;

    // Service Descriptions
      serviceDescription1: string;
      serviceDescription2: string;
      serviceDescription3: string;
      serviceDescription4: string;
      serviceDescription5: string;
      serviceDescription6: string;
      serviceDescription7: string;
      serviceDescription8: string;

  // Project Page Details
    // Project Categories
      projectCategory1: string;
      projectCategory2: string;
      projectCategory3: string;
      projectCategory4: string;

    // Project Images
      projectImage1: StaticImageData;
      projectImage2: StaticImageData;
      projectImage3: StaticImageData;
      projectImage4: StaticImageData;
      projectImage5: StaticImageData;
      projectImage6: StaticImageData;
      projectImage7: StaticImageData;
      projectImage8: StaticImageData;
      projectImage9: StaticImageData;
      projectImage10: StaticImageData;

    // Project Titles
      projectTitle1: string;
      projectTitle2: string;
      projectTitle3: string;
      projectTitle4: string;
      projectTitle5: string;
      projectTitle6: string;
      projectTitle7: string;
      projectTitle8: string;
      projectTitle9: string;
      projectTitle10: string;

    // Project Descriptions
      projectDescription1: string;
      projectDescription2: string;
      projectDescription3: string;
      projectDescription4: string;
      projectDescription5: string;
      projectDescription6: string;
      projectDescription7: string;
      projectDescription8: string;
      projectDescription9: string;
      projectDescription10: string;

}

const BusinessDetailsContext = createContext<BusinessDetails | null>(null);

export const useBusinessDetails = () => useContext(BusinessDetailsContext);

export const BusinessDetailsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const businessDetails: BusinessDetails = {
    // Core Business Details
    name: "Town Place Steel & Aluminum",
    tagline: "Quality Steel & Aluminum Services",
    taglineDescription: "Precision. Durability. Excellence. Your trusted partner in structural steel and aluminum installation service.",
    email: "town_place@yahoo.com",
    phone: "0939-908-8711",
    address: "146 J.P. Laurel Highway, Barangay San Roque, Santo Tomas, Philippines",
    facebook: "https://www.facebook.com/profile.php?id=100064243653794",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",


    // Home Page Details
      // Main Image
        heroImage: heroImage,

      // Featured Service
        // Featured Service Images
          featuredServiceImage1: featuredServiceImage1,
          featuredServiceImage2: featuredServiceImage2,
          featuredServiceImage3: featuredServiceImage3,
        // Featured Service Titles
          featuredServiceTitle1: "Outdoor Structures and Security",
          featuredServiceTitle2: "Home Improvement and Décor",
          featuredServiceTitle3: "Construction and Infrastructure",
        // Featured Service Descriptions
          featuredServiceDescription1: "Offering a range of outdoor structure installations, including fences and gates.",
          featuredServiceDescription2: "Providing quality home improvement services, from cabinetry to interior decoration.",
          featuredServiceDescription3: "Specializing in construction projects, from residential homes to commercial buildings.",

      // Featured Completed Projects
        // Featured Completed Project Images
          featuredCompletedProject1: featuredCompletedProject1,
          featuredCompletedProject2: featuredCompletedProject2,
          featuredCompletedProject3: featuredCompletedProject3,
      
      // Featured Clients
        // Featured Clients Images
          featuredClientPerson1: featuredClientPerson1,
          featuredClientPerson2: featuredClientPerson2,
          featuredClientPerson3: featuredClientPerson3,
      
      // Featured Ongoing Projects
        // Featured Ongoing Project Images
          featuredOngoingProject1: featuredOngoingProject1,
          featuredOngoingProject2: featuredOngoingProject2,
          featuredOngoingProject3: featuredOngoingProject3,

    // Service Page Details
      // Service Images
        serviceImage1: serviceImage1,
        serviceImage2: serviceImage2,
        serviceImage3: serviceImage3,
        serviceImage4: serviceImage4,
        serviceImage5: serviceImage5,
        serviceImage6: serviceImage6,
        serviceImage7: serviceImage7,
        serviceImage8: serviceImage8,
      // Service Titles
        serviceTitle1: "Cabinetry and Storage",
        serviceTitle2: "Kitchen and Household",
        serviceTitle3: "Interior Decoration",
        serviceTitle4: "Outdoor Structures",
        serviceTitle5: "Glass and Window Fixtures",
        serviceTitle6: "Doors and Entryways",
        serviceTitle7: "Security and Protection",
        serviceTitle8: "Construction Materials",

      // Service Descriptions
        serviceDescription1: "Specializing in crafting and installing storage solutions like cabinets, ideal for organizing spaces such as kitchens and bedrooms.",
        serviceDescription2: "Offering installations for kitchen amenities and household essentials, ensuring both functionality and comfort.",
        serviceDescription3: "Focusing on enhancing interior aesthetics through decorative elements such as showcases and mirrors.",
        serviceDescription4: "Providing solutions for outdoor space definition and security with installations like fences.",
        serviceDescription5: "Handling the installation and upkeep of glass features like windows and railings, balancing style and functionality.",
        serviceDescription6: "Dealing with the setup and maintenance of various types of doors and entry systems, including frameless and sliding options.",
        serviceDescription7: "Ensuring property security with installations like gates and railings crafted from durable materials.",
        serviceDescription8: "Supplying essential materials like steel trusses and windows crucial for construction projects and structural integrity.",

    // Project Page Details
      // Project Category
        projectCategory1: "Top Construction Project",
        projectCategory2: "Living Space Renovations",
        projectCategory3: "Enhanced Security Measures",
        projectCategory4: "Functional Improvements",

      // Project Images
        projectImage1: projectImage1,
        projectImage2: projectImage2,
        projectImage3: projectImage3,
        projectImage4: projectImage4,
        projectImage5: projectImage5,
        projectImage6: projectImage6,
        projectImage7: projectImage7,
        projectImage8: projectImage8,
        projectImage9: projectImage9,
        projectImage10: projectImage10,

      // Project Titles
        projectTitle1: "High-rise Building Infrastructure",
        projectTitle2: "Modern Kitchen Makeover",
        projectTitle3: "Living Room Refresh",
        projectTitle4: "Bedroom Retreat Project",
        projectTitle5: "Home Security Upgrade",
        projectTitle6: "Private Backyard Project",
        projectTitle7: "Storefront Security System",
        projectTitle8: "Window Replacement Project",
        projectTitle9: "Automated Gate Repair",
        projectTitle10: "Custom Dog House Design",

      // Project Descriptions
        projectDescription1: "Design and install steel trusses, beams, and columns for a high-rise building project, ensuring structural integrity and safety.",
        projectDescription2: "Design, build, and install new cabinets, countertops, and appliances for a sleek and functional kitchen.",
        projectDescription3: "Design and install custom shelving, cabinets, and entertainment units to create a stylish and organized living space.",
        projectDescription4: "Design and build built-in wardrobes, headboards, and nightstands for a luxurious and clutter-free bedroom.",
        projectDescription5: "Install steel security gates, railings, and window bars to create a secure and protected home environment.",
        projectDescription6: "Build and install a custom fence with a locking gate to create a private and secure backyard space.",
        projectDescription7: "Install a high-security glass storefront door with an alarm system to deter theft and vandalism.",
        projectDescription8: "Replace old windows with energy-efficient double-paned windows for improved insulation and lower energy bills.",
        projectDescription9: "Repair and modernize an existing gate with automation features and a fresh coat of paint.",
        projectDescription10: "Design and build a weatherproof dog house with comfortable features and easy cleaning access."
  };

  return (
    <BusinessDetailsContext.Provider value={businessDetails}>
      {children}
    </BusinessDetailsContext.Provider>
  );
}
