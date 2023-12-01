export const workExperience = [
  {
    title: "Working Student",
    company: "ZWOEINS",
    startingDate: new Date("2023-03-15"),
    endDate: null,
    link: "https://zwoeins.de",
    description: "Working to have a positive impact for a great future",
  },
  {
    title: "Interaction Design",
    company: "HfG Schwäbisch Gmünd",
    startingDate: new Date("2023-03-15"),
    endDate: null,
    link: "https://zwoeins.de",
    description: "Working to have a positive impact for a great future",
  },
  {
    title: "Design Internship",
    company: "ZWOEINS",
    startingDate: new Date("2022-11-01"),
    endDate: new Date("2023-02-31"),
    link: "https://zwoeins.de",
    description: "Working to have a positive impact for a great future",
  },
  {
    title: "High School Diploma",
    company: "Albertus-Magnus Gymnasium",
    startingDate: new Date("2014-06-01"),
    endDate: new Date("2022-06-31"),
    link: "",
    description: "",
  },
];

export const projects = [
  {
    title: "Premium Room Design",
    slug: "premium-room-design",
    tags: ["Design", "Development", "Strategy"],
    year: new Date("2022-06-01"),
    type: "Side Project",
    link: "",
    image: "/Premium-room-design.png",
    description:
      "Esse adipisicing dolore ad pariatur ipsum ullamco duis aliqua do ipsum id proident amet dolor consequat.",
  },
  {
    title: "Stacksdo",
    slug: "stacksdo",
    tags: ["Design", "Development"],
    year: new Date("2023-06-01"),
    type: "Side Project",
    link: "",
    image: "/Premium-room-design.png",
    description:
      "Stacksdo is a distraction free task management tool in a world full of constant overstimulation",
    techStack: [{ title: "NextJS", icon: "/nextjs.png" }],
  },
].sort((a, b) => b.year.getTime() - a.year.getTime());
