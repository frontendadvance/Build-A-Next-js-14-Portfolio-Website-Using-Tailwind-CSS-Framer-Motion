export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    image: string;
    available: boolean;
  };
  
  export const devProjects = [
    {
      id: 0,
      name: "3D Animation",
      description:
        "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
      technologies: ["Blender", "Keyshot", "Maya"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/hero-img.png"),
      available: true,
    },
    {
      id: 1,
      name: "Game Art",
      description:
        "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
      technologies: ["Inkscape", "Photoshop", "Sketch"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/portrait.png"),
      available: true,
    },
    {
      id: 2,
      name: "AI Sketches",
      description:
        "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
      technologies: ["AutoDraw", "Canva", "Nightcafe"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/illustrator.png"),
      available: true,
    },
    {
      id: 3,
      name: "Motion",
      description:
        "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
      technologies: ["Aftereffects", "Mocha", "Premiere"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/robot.png"),
      available: true,
    },
    {
      id: 4,
      name: "APP Design",
      description:
        "Developing website involves creating your website, making it one of the most vital parts of your marketing, user-friendly products and web experiences for Web3 founders and projects.",
      technologies: ["Figma", "XD", "Invision"],
      github: "https://github.com/",
      demo: "https://www.youtube.com/@frontendadvance",
      image: require(".//../../public/projects/art.png"),
      available: true,
    },
  ];
  
  