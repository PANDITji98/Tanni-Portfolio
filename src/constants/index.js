import {
  frontend,
  backend,
  ux,
  prototyping,
  pr1,
  pr2,
  pr3,
  pr4,
  pr5,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from "../assets";

import autocad from "../assets/tech/autocad.png";
import sketchup from "../assets/tech/sketchup.png";
import enscape from "../assets/tech/enscape.png";
import threedsmax from "../assets/tech/3dsmax.png";
import ai from "../assets/tech/ai.png";
import ps from "../assets/tech/ps.png";
import id from "../assets/tech/id.png";
import msoffice from "../assets/tech/msoffice.png";

import MandC from "../assets/company/M&C.png";
import JDS from "../assets/company/JDS.png";
import Tat from "../assets/company/Tat.png";
import liv from "../assets/company/liv.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Design Thinking",
    icon: frontend,
  },
  {
    title: "Technical Knowledge",
    icon: backend,
  },
  {
    title: "Concept Development",
    icon: ux,
  },
  {
    title: "3D Visualization",
    icon: prototyping,
  },
  // {
  //   title: 'Dreafting & Rendering',
  //   icon: frontend,
  // },
  // {
  //   title: 'Material Handling & Selections',
  //   icon: backend,
  // },
  // {
  //   title: 'Furniture Design',
  //   icon: ux,
  // },
  // {
  //   title: 'Photography',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Communication and Presentation Skills',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Adaptive and Relation Builder',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Eye for Details',
  //   icon: prototyping,
  // },
  // {
  //   title: 'Problem Solver',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "AutoCad",
    icon: autocad,
  },
  {
    name: "Sketchup",
    icon: sketchup,
  },
  {
    name: "Enscape",
    icon: enscape,
  },
  {
    name: "3dsMax",
    icon: threedsmax,
  },
  {
    name: "Adobe Il.",
    icon: ai,
  },
  {
    name: "Adobe Ps.",
    icon: ps,
  },
  {
    name: "Adobe Id.",
    icon: id,
  },
  {
    name: "MS Office",
    icon: msoffice,
  },
];

const experiences = [
  {
    title: "Social Media Managing Intern",
    company_name: "Mohna and Co",
    icon: MandC,
    iconBg: "#333333",
    date: "March 2020 - August 2020",
  },
  {
    title: "Interior Design Intern",
    company_name: "Jogi Design Studio",
    icon: JDS,
    iconBg: "#333333",
    date: "April 2021 - October 2021",
  },
  {
    title: "Junior Interior Designer",
    company_name: "Tatvastu",
    icon: Tat,
    iconBg: "#333333",
    date: "Feb 2022 - Present",
  },
  {
    title: "Livprenuer Designer",
    company_name: "Livspace",
    icon: liv,
    iconBg: "#333333",
    date: "Feb 2022 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Coffee Street",
    shortDesc:
      "The project is to design and furnish co-working cafe with an open workspace area for customers.",
    description: `The project is to design and furnish co-working cafe with an open workspace area for customers. The space consists of a main seating area, a coffee bar, and an open workspace area for customers to work or study. The cafe focuses on providing a safe and comfortable environment for individuals to work, collaborate, and enjoy refreshments while maintaining social distancing and implementing necessary hygiene practices.

      Area: 1000 sq.ft.
      
      Design Style: Industrial
      Industrial Style with Modern technology and Hygiene provision can provide an ambiance to the Cafe which will be responsible in attracting customers & allowing them to have a good time, while maintaining functionality and flexibility.`,
    // tags: [
    //   {
    //     name: 'react',
    //     color: 'blue-text-gradient',
    //   },
    //   {
    //     name: 'mongodb',
    //     color: 'green-text-gradient',
    //   },
    //   {
    //     name: 'tailwind',
    //     color: 'pink-text-gradient',
    //   },
    // ],
    images: [pr1],
  },
  {
    id: "project-2",
    name: "Grey Matter",
    shortDesc:
      "Grey Matter is an office space for a small technology startup company.",
    description: `Grey Matter is an office space for a small technology startup company. The client was looking for a modern, minimalist, and functional space that reflects the company's values and culture. The aim is to create a workspace and storage solutions to accommodate 15-20 employees in the open-plan workspace, and ensuring that this space is welcoming enough for brand meetings and clients.
      Designing a conference room that is both functional and stylish for meetings and presentations needed to be the main focus in this project.
      
      The users of this space will be tech-savvy young professionals who value innovation and creativity, with a preference for clean and modern aesthetics. Moreover, brands coming in to collaborate with the company need to be wowed.
      
      Upon discussing these details, the design style we mutually agreed upon was minimalist-contemporary with a focus on clean lines, neutral colors, and a balance of form and function.`,
    images: [pr2],
  },
  {
    id: "project-3",
    name: "Kay2 Salon",
    shortDesc: "This is a multistoried, multi-purpose Salon",
    description: `Type: Hospitality Design

    Area: 550 sq.ft. (Basement)
    
    Location: Jaipur, Rajasthan
    
    Project Year: 2021
    
    Kay 2's is a multistoried, multi-purpose Salon. The basement is a self-care zone providing services like Spa, Facial, Mani-Pedi etc. The space is designed consciously to keep in mind the structure, function and desired aura required. Divided into different sections/rooms, this tiny basement can entertain 10 clients at ones.`,
    images: [pr3],
  },
  {
    id: "project-4",
    name: "Kefi",
    shortDesc: `A 2400 sq.ft. 3BHK Penthouse, designed for a small family of 3`,
    description: `A 2400 sq.ft. 3BHK Penthouse, designed for a small family of 3, where each space is carefully and intricately designed to make it an overall colourful space, with each space designed by using different Countries around the world as a design inspiration. We first walk into the house and the Foyer/Living-Dining space remind you of American houses with minimal colours and designs, lots of light and a joyful space for family to host guest and bond. Bedrooms are inspired by Bali & Argentina, while the terrace is inspired by Santorini aesthetics, overloaded with blues and whites accessories and furnishings.
    The overall space is brought together by one-of-a-kind accents, cozy lighting and warm tones of colours and textures.`,
    images: [pr4,pr5],
  },
];

export { services, technologies, experiences, projects };
