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
    imageDarkmode: "/Premium-room-design.png",
    imageLightmode: "/Premium-room-design.png",
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
    imageDarkmode: "/stacksdo/stacksdo-cover.png",
    imageLightmode: "/stacksdo/stackdo-cover.png",
    description:
      "Stacksdo is a distraction free task management tool in a world full of constant overstimulation",
    techStack: [{ title: "NextJS", icon: "/nextjs.png" }],
  },
].sort((a, b) => b.year.getTime() - a.year.getTime());

export const socialLinks = [
  {
    title: "X",
    link: "https://www.twitter.com/amelieschltr",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/amelie-schl%C3%BCter-b36430269/",
  },
  {
    title: "Read.cv",
    link: "https://www.read.cv/amelieschltr/",
  },
];

export const craftsArr = [
  {
    title: "Vertical Timeline",
    slug: "vertical-timeline",
    date: new Date("2023-12-03") as Date,
    link: "",
    video_dark: "/crafts/vertical-timeline/timeline_video.mp4",
    video_light: "/crafts/vertical-timeline/timeline_video.mp4",
    image_dark: "https://placehold.co/600x400",
    image_light: "https://placehold.co/600x400",
    type: "Craft",
    description:
      "A random list of things i use on a daily bases as a design student and software developer",
    published: true,
  },
  {
    title: "Gallery Grid",
    slug: "gallery-grid",
    date: new Date("2023-12-20") as Date,
    link: "",
    video_dark: "/crafts/gallery_grid/gallery_video-dark.mp4",
    video_light: "/crafts/gallery_grid/gallery_video-light.mp4",
    image_dark: "https://placehold.co/600x400",
    image_light: "https://placehold.co/600x400",
    type: "Craft",
    description: "A smooth animated image gallery grid",
    published: true,
  },
  {
    title: "Slider",
    slug: "slider",
    date: new Date("2023-12-30") as Date,
    link: "",
    video_dark: "/crafts/slider/slider-video_dark.mp4",
    video_light: "/crafts/slider/slider-video_light.mp4",
    image_dark: "https://placehold.co/600x400",
    image_light: "https://placehold.co/600x400",
    type: "Craft",
    description: "A smooth animated slider",
    published: true,
  },
];

export type CraftArrItem = (typeof craftsArr)[0];

export const reading = [
  {
    title: "Principles",
    author: "Ray Dalio",
    link: "https://literal.club/book/ray-dalioray-daliojeremy-bobbprinciples-a9caw",
    cover: "/reading/principles_book-cover.jpeg",
    finished: null,
    status: "reading",
    rating: null,
  },
  {
    title: "Feel-good Productivity",
    author: "Ali Abdaal",
    link: "https://literal.club/book/ali-abdaal-feel-good-productivity-474hi",
    cover: "/reading/feel-good-productivty_book-cover.jpeg",
    rating: null,
    finished: null,
    status: "wishlist",
  },
  // {
  //   title: "Atomic Habits",
  //   author: "James Clear",
  //   link: "https://literal.club/book/james-clearatomic-habits-1b5aw",
  //   cover: "/reading/atomic-habits_book-cover.jpeg",
  //   rating: 5,
  //   finished: 2022,
  //   status: "finished",
  // },
];

export const lifeAdventures = [
  {
    title: "Visiting New York City",
    inProgress: false,
    checked: false,
  },
  {
    title: "Live in Berlin",
    inProgress: false,
    checked: false,
  },
  {
    title: "Create a full-stack app",
    inProgress: false,
    checked: true,
  },
  {
    title: "Visit Apple Park",
    inProgress: false,
    checked: false,
  },
  {
    title: "Start startup",
    inProgress: false,
    checked: false,
  },
  {
    title: "Code personal side",
    inProgress: true,
    checked: false,
  },
  {
    title: "Visit Denmark",
    inProgress: false,
    checked: false,
  },
  {
    title: "Visit Indonesia",
    inProgress: false,
    checked: false,
  },
];
