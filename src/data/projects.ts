
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string[];
  role: string;
  fullRoles?: string;
  date: string;
  image: string;
  videoSrc?: string;
  tags: string[];
  github?: string;
  buildZip?: string;
  hasDesignDoc?: boolean;
  hasTechDoc?: boolean;
  features?: string[];
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: "djs-of-shaolin",
    title: "The DJs of Shaolin",
    slug: "djs-of-shaolin",
    description: "A narrative-focused 2-D top-down game with a DJ-based rhythm system, exploring Hip-Hop culture through pixel art aesthetics.",
    longDescription: [
      "My final project for my degree, combining gameplay progression with historical exploration of Hip-Hop culture.",
      "Created a story-driven gameplay progression system that guides players through the first instance of Hip-Hop music.",
      "Implemented rhythm-based mechanics that blend with narrative elements for an engaging player experience.",
      "Designed and implemented quest objectives and character interactions to enhance the storytelling aspect."
    ],
    role: "Lead Programmer & Designer",
    fullRoles: "Lead Developer, Game Designer, Narrative Designer, UI Programmer, Sound Designer",
    date: "November 2024",
    image: "public/images/djsofshaolin.png",
    videoSrc: "/videos/djsOfShaolinVid.mp4",
    tags: ["Unity", "C#", "Game Design", "Rhythm Game", "Pixel Art"],
    github: "https://github.com/MikhailGovind/TheDJsOFShaolin---Rhythm-Game",
    buildZip: "/builds/djs-of-shaolin.zip",
    hasDesignDoc: false,
    hasTechDoc: false,
    features: [
      "Story-driven gameplay progression",
      "DJ-based rhythm mechanics",
      "Historical exploration of Hip-Hop culture",
      "Pixel art visual style",
      "Character interaction system"
    ],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Git"]
  },
  {
    id: "itsy-bitsy-spider",
    title: "Itsy Bitsy Spider",
    slug: "itsy-bitsy-spider",
    description: "A 3-D procedural dungeon crawler game focused on procedural animation for the player-controlled spider and procedurally generated levels.",
    longDescription: [
      "Led the design and implementation of a procedural spider animation system that responds naturally to the environment.",
      "Engineered a procedural level generation system with modular components and logic-based structure.",
      "Integrated quest logic throughout the game world and narrative to create an engaging player experience.",
      "Collaborated with a small multidisciplinary team through the full development cycle."
    ],
    role: "Lead Programmer",
    fullRoles: "Lead Programmer, Procedural Animation Developer, Level Generation Designer, Quest System Developer",
    date: "September 2024",
    image: "https://via.placeholder.com/600x400?text=Itsy+Bitsy+Spider",
    videoSrc: "/videos/itsyBitsySpiderVid.mp4",
    tags: ["Unity", "C#", "Procedural Generation", "Animation", "3D Game"],
    github: "https://github.com/JeanFrancoisRetief/DARProject_GamesAndAI",
    buildZip: "/builds/itsy-bitsy-spider.zip",
    hasDesignDoc: true,
    hasTechDoc: false,
    features: [
      "Procedural spider animation",
      "Dynamic level generation",
      "Quest-based gameplay",
      "3D environment exploration",
      "Environmental interaction systems"
    ],
    technologies: ["Unity", "C#", "Blender", "Git"]
  },
  {
    id: "playing-game",
    title: "Playing Game",
    slug: "playing-game",
    description: "A metafictional narrative game blending 3D and 2D elements that explores the concept of being 'stuck' inside a game.",
    longDescription: [
      "Created a unique 3D and 2D interactive narrative farming game that breaks the fourth wall.",
      "Designed quest structures and progression systems that play with player expectations.",
      "Focused on commentary about gaming experiences and the feeling of being trapped within game mechanics.",
      "Built with a strong narrative focus, using gameplay mechanics to reinforce storytelling."
    ],
    role: "Lead Programmer",
    fullRoles: "Lead Programmer, Narrative Designer, Quest System Developer, Game Mechanics Designer, UI Programmer",
    date: "June 2024",
    image: "https://via.placeholder.com/600x400?text=Playing+Game",
    videoSrc: "/videos/playingGameVid.mp4",
    tags: ["Unity", "C#", "Narrative Design", "Game Design", "Metafiction"],
    github: "https://github.com/JeanFrancoisRetief/Group1Game",
    buildZip: "/builds/playing-game.zip",
    hasDesignDoc: true,
    hasTechDoc: true,
    features: [
      "Metafictional narrative elements",
      "Farm simulation mechanics",
      "Mixed 2D/3D gameplay",
      "Fourth-wall breaking interactions",
      "Story-driven progression"
    ],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Git"]
  },
  {
    id: "soda",
    title: "S.O.D.A",
    slug: "soda",
    description: "A 3D horror game focusing on genre elements, level design, and resource management with a narrative-driven experience.",
    longDescription: [
      "Led programming, level design, sound design, lighting, and UI development for this horror game.",
      "Designed user flow, state management, and in-game economy logic to create tension and strategic gameplay.",
      "Implemented horror genre elements including atmospheric lighting, sound cues, and tense player resource management.",
      "Created a narrative-driven experience that builds upon horror game conventions learned from previous projects."
    ],
    role: "Lead Programmer",
    fullRoles: "Lead Programmer, Level Designer, Sound Designer, Lighting Designer, UI Developer",
    date: "November 2023",
    image: "https://via.placeholder.com/600x400?text=S.O.D.A",
    videoSrc: "/videos/sodaVid.mp4",
    tags: ["Unity", "C#", "Horror Game", "Level Design", "Sound Design"],
    github: "https://github.com/JeanFrancoisRetief/GDFinalGame-Group2",
    buildZip: "/builds/soda.zip",
    hasDesignDoc: true,
    hasTechDoc: true,
    features: [
      "Atmospheric horror elements",
      "Resource management mechanics",
      "User flow and state management",
      "Narrative-driven gameplay",
      "Strategic decision making"
    ],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Blender", "Git"]
  },
  {
    id: "fnaf-clone",
    title: "Five Nights at Freddy's Clone",
    slug: "fnaf-clone",
    description: "Recreation of Five Nights at Freddy's core mechanics to study horror gameplay structure and event-driven design.",
    longDescription: [
      "Recreated the core mechanics of the popular horror game to understand its event-driven systems.",
      "Focused on implementing time-based triggers, conditional logic, and input response systems.",
      "Developed event-driven game architecture to handle AI movement, camera switching, and player interactions.",
      "Implemented tension-building mechanics through resource management and threat awareness."
    ],
    role: "Programmer",
    fullRoles: "Programmer, Systems Designer, Camera System Developer, AI Behavior Programmer",
    date: "August 2023",
    image: "https://via.placeholder.com/600x400?text=FNAF+Clone",
    videoSrc: "/videos/fnafVid.mp4",
    tags: ["Unity", "C#", "Game Mechanics", "Event-Driven Design", "Horror Game"],
    github: "https://github.com/JeanFrancoisRetief/GDCloneGroupTwo7_repo",
    buildZip: "/builds/fnaf-clone.zip",
    hasDesignDoc: true,
    hasTechDoc: true,
    features: [
      "Security camera system",
      "Event-driven AI behavior",
      "Resource management (power)",
      "Timer-based game progression",
      "Tension-building mechanics"
    ],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Git"]
  },
  {
    id: "space-escape",
    title: "Space Escape",
    slug: "space-escape",
    description: "A 2D space-themed game featuring puzzle-solving objectives where players control an astronaut through various levels.",
    longDescription: [
      "Designed and developed a space-themed 2D game with puzzle-solving and action elements.",
      "Created modular level layouts with logic-driven interactions for varied gameplay experiences.",
      "Implemented time-based and move-based scenarios to challenge players in different ways.",
      "Focused on creating an engaging player experience with clear progression through challenging puzzles."
    ],
    role: "Creative Lead",
    fullRoles: "Creative Lead, Puzzle Designer, Level Designer, Programmer, Game Mechanics Designer",
    date: "November 2022",
    image: "public/images/spaceEscape.png",
    videoSrc: "/videos/spaceEscapeVid.mp4",
    tags: ["Unity", "C#", "2D Game", "Puzzle Design", "Level Design"],
    github: "https://github.com/MikhailGovind/DADP-November-Exam",
    buildZip: "/builds/space-escape.zip",
    hasDesignDoc: false,
    hasTechDoc: false,
    features: [
      "Puzzle-based level design",
      "Astronaut character controls",
      "Enemy AI and obstacles",
      "Logic-driven interactions",
      "Space atmosphere and setting"
    ],
    technologies: ["Unity", "C#", "Adobe Photoshop", "Git"]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};
