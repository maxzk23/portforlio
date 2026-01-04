export const exploreWorlds = [
  {
    id: 'project-1',
    imgUrl: '/planet-01.png',
    title: {
      en: 'E-Commerce Ecosystem',
      th: 'ระบบร้านค้าออนไลน์ครบวงจร',
    },
    description: {
      en: 'A high-performance e-commerce solution featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
      th: 'แพลตฟอร์มอีคอมเมิร์ซที่เน้นประสิทธิภาพการทำงาน มาพร้อมระบบจัดการสต็อกแบบเรียลไทม์ ระบบชำระเงินที่ปลอดภัย และแดชบอร์ดจัดการหลังบ้านที่ใช้งานง่าย',
    },
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: {
      en: 'Full-Stack Web',
      th: 'เว็บแอปพลิเคชัน',
    },
  },
  {
    id: 'project-2',
    imgUrl: '/planet-02.png',
    title: {
      en: 'AI-Driven Analytics',
      th: 'ระบบวิเคราะห์ข้อมูล AI',
    },
    description: {
      en: 'Advanced data visualization dashboard that leverages AI to provide actionable insights and predictive analytics in real-time.',
      th: 'แดชบอร์ดแสดงผลข้อมูลขั้นสูงที่ใช้ AI ในการวิเคราะห์และคาดการณ์เทรนด์ ช่วยให้การตัดสินใจทางธุรกิจแม่นยำยิ่งขึ้นผ่านข้อมูลแบบเรียลไทม์',
    },
    techStack: ['React', 'D3.js', 'Python', 'FastAPI', 'TensorFlow'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: {
      en: 'Data Science',
      th: 'วิทยาการข้อมูล',
    },
  },
  {
    id: 'project-3',
    imgUrl: '/planet-03.png',
    title: {
      en: 'Next-Gen Social App',
      th: 'โซเชียลมีเดียแอปยุคใหม่',
    },
    description: {
      en: 'A seamless mobile social experience with lightning-fast messaging, interactive stories, and smart content discovery.',
      th: 'แอปพลิเคชันโซเชียลมีเดียที่เน้นประสบการณ์การใช้งานที่ลื่นไหลบนมือถือ พร้อมระบบแชทที่รวดเร็ว การแชร์สตอรี่ และการแนะนำเนื้อหาที่น่าสนใจ',
    },
    techStack: ['React Native', 'Firebase', 'Node.js', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: {
      en: 'Mobile Development',
      th: 'โมบายแอปพลิเคชัน',
    },
  },
  {
    id: 'project-4',
    imgUrl: '/planet-04.png',
    title: {
      en: 'Web3 Crypto Wallet',
      th: 'วอลเล็ตคริปโต Web3',
    },
    description: {
      en: 'A secure and non-custodial gateway to the blockchain world, supporting multi-chain transfers, DeFi swaps, and NFT management.',
      th: 'ประตูสู่โลกบล็อกเชนที่เน้นความปลอดภัยและผู้ใช้เป็นเจ้าของข้อมูลอย่างแท้จริง รองรับการโอนข้ามเชน การแลกเปลี่ยนเหรียญ และการจัดการ NFT',
    },
    techStack: ['Web3.js', 'Ethers.js', 'Solidity', 'React', 'Hardhat'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: {
      en: 'Blockchain Tech',
      th: 'เทคโนโลยีบล็อกเชน',
    },
  },
  {
    id: 'project-5',
    imgUrl: '/planet-05.png',
    title: {
      en: 'Immersive Portfolio',
      th: 'พอร์ตฟอลิโอ 3 มิติ',
    },
    description: {
      en: 'A creative showcase using WebGL and motion design to create an immersive "scrollytelling" experience that pushes web boundaries.',
      th: 'การนำเสนอผลงานผ่านเทคโนโลยี WebGL และแอนิเมชันขั้นสูง สร้างประสบการณ์ "Scrollytelling" ที่น่าตื่นตาตื่นใจและฉีกกฎเว็บไซต์แบบเดิมๆ',
    },
    techStack: ['Next.js', 'Three.js', 'Framer Motion', 'Tailwind'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    category: {
      en: 'Creative Web',
      th: 'เว็บสร้างสรรค์',
    },
  },
];

export const startingFeatures = {
  en: [
    'Define core business objectives and technical requirements',
    'Design intuitive and aesthetically pleasing user journeys',
    'Execute development with modern, high-standard tech stacks',
  ],
  th: [
    'วิเคราะห์โจทย์ทางธุรกิจและกำหนดเป้าหมายทางเทคนิค',
    'ออกแบบประสบการณ์ผู้ใช้งานที่สวยงามและใช้งานง่าย',
    'พัฒนาผลงานด้วยเทคโนโลยีที่ทันสมัยและมีมาตรฐานสากล',
  ],
};

export const newFeatures = {
  en: [
    {
      imgUrl: '/html.svg',
      title: 'HTML5 & CSS3',
      subtitle: 'Building semantic, accessible, and responsive foundations for the modern web.',
    },
    {
      imgUrl: '/next.svg',
      title: 'Next.js & React',
      subtitle: 'Crafting high-performance, SEO-friendly applications with the latest frameworks.',
    },
    {
      imgUrl: '/nest.svg',
      title: 'Nest.js & Node',
      subtitle: 'Architecting scalable, enterprise-grade backend systems and APIs.',
    },
    {
      imgUrl: '/tailwind.svg',
      title: 'Tailwind CSS',
      subtitle: 'Rapidly designing beautiful, custom interfaces using a utility-first approach.',
    },
    {
      imgUrl: '/three.svg',
      title: 'Three.js & WebGL',
      subtitle: 'Building immersive, interactive 3D environments for a truly unique look.',
    },
    {
      imgUrl: '/framer.svg',
      title: 'Framer Motion',
      subtitle: 'Guiding users through your story using creative and smooth motion design.',
    },
  ],
  th: [
    {
      imgUrl: '/html.svg',
      title: 'HTML5 และ CSS3',
      subtitle: 'โครงสร้างพื้นฐานเว็บไซต์ที่รองรับทุกอุปกรณ์ เข้าถึงง่าย และมีความเป็นมาตรฐานสากล',
    },
    {
      imgUrl: '/next.svg',
      title: 'Next.js และ React',
      subtitle: 'พัฒนาเว็บแอปพลิเคชันที่รวดเร็ว ลื่นไหล และรองรับการค้นหาผ่าน Search Engine (SEO)',
    },
    {
      imgUrl: '/nest.svg',
      title: 'Nest.js และ Node.js',
      subtitle: 'วางโครงสร้างระบบหลังบ้านที่ยืดหยุ่น รองรับการขยายตัว และมีความปลอดภัยสูง',
    },
    {
      imgUrl: '/tailwind.svg',
      title: 'Tailwind CSS',
      subtitle: 'ออกแบบหน้าตาผู้ใช้งานให้สวยงามและโดดเด่นอย่างรวดเร็ว ด้วยระบบการเขียนโค้ดที่ทันสมัย',
    },
    {
      imgUrl: '/three.svg',
      title: 'ศิลปะ 3 มิติในเว็บไซต์',
      subtitle: 'ยกระดับแบรนด์ด้วยประสบการณ์ WebGL ที่โต้ตอบได้จริงและน่าตื่นตาตื่นใจ',
    },
    {
      imgUrl: '/framer.svg',
      title: 'การเคลื่อนไหวที่เล่าเรื่อง',
      subtitle: 'พาผู้ใช้งานไปสัมผัสเรื่องราวผ่านแอนิเมชันที่ลื่นไหลตามการเลื่อนหน้า (Framer Motion)',
    },
  ],
};

export const insights = {
  en: [
    {
      imgUrl: '/planet-06.png',
      title: 'Building High-Performance React Applications',
      subtitle: 'Best practices for optimizing React apps with lazy loading, memoization, and code splitting.',
    },
    {
      imgUrl: '/planet-07.png',
      title: 'The Art of Smooth Animations',
      subtitle: 'How to create buttery-smooth 60fps animations using Framer Motion and CSS.',
    },
    {
      imgUrl: '/planet-08.png',
      title: 'Designing for Accessibility',
      subtitle: 'Making web applications inclusive with proper ARIA labels and keyboard navigation.',
    },
  ],
  th: [
    {
      imgUrl: '/planet-06.png',
      title: 'การสร้างแอป React ประสิทธิภาพสูง',
      subtitle: 'แนวทางปฏิบัติที่ดีที่สุดในการเพิ่มประสิทธิภาพแอป React ด้วย lazy loading, memoization และ code splitting',
    },
    {
      imgUrl: '/planet-07.png',
      title: 'ศิลปะของแอนิเมชันลื่นไหล',
      subtitle: 'วิธีสร้างแอนิเมชัน 60fps ที่ลื่นไหลด้วย Framer Motion และ CSS',
    },
    {
      imgUrl: '/planet-08.png',
      title: 'การออกแบบเพื่อ Accessibility',
      subtitle: 'ทำให้เว็บแอปพลิเคชันเข้าถึงได้ทุกคนด้วย ARIA labels และการนำทางด้วยคีย์บอร์ด',
    },
  ],
};

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
    link: 'https://twitter.com',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://linkedin.com/in/',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: 'https://instagram.com',
  },
];

export const testimonials = {
  en: [
    {
      name: 'Alex Chen',
      role: 'CEO, InnovateTech Startup',
      quote: "Working with Apichat was an absolute game-changer. He didn't just write code; he understood our vision and turned it into a digital product that our customers love.",
      avatar: '/people-01.png',
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Lead, Design Systems',
      quote: "The technical precision and eye for design is exceptional. Since our platform's relaunch, our user engagement has skyrocketed by 300%. highly recommend.",
      avatar: '/people-02.png',
    },
  ],
  th: [
    {
      name: 'อเล็กซ์ เฉิน',
      role: 'CEO, InnovateTech Startup',
      quote: 'การได้ร่วมงานกับคุณอภิชาติช่วยยกระดับโปรเจกต์ของเราไปอีกขั้น เขาไม่ได้แค่เขียนโค้ด แต่มีความเข้าใจในตัวผลิตภัณฑ์อย่างแท้จริง ทำให้ได้ผลงานที่ยอดเยี่ยมเกินความคาดหมายครับ',
      avatar: '/people-01.png',
    },
    {
      name: 'ซาร่า จอห์นสัน',
      role: 'Product Lead, แผนกออกแบบระบบ',
      quote: 'ความใส่ใจในรายละเอียดและความเชี่ยวชาญด้านเทคนิคของเขาน่าทึ่งมาก หลังจากปรับปรุงภาพลักษณ์ใหม่ด้วยฝีมือเขา ยอดผู้ใช้งานของเราเพิ่มขึ้นถึง 300% เลยทีเดียว',
      avatar: '/people-02.png',
    },
  ],
};

export const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Three.js / WebGL', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'UI/UX Design', level: 85 },
];

export const translations = {
  en: {
    heroTitle1: 'WELCOME TO',
    heroTitle2: 'WORLD OF INNOVATION',
    heroName: 'APICHAT',
    heroRole: 'Creating Superior Digital Experiences',
    navbarTitle: 'APICHAT KABBUAKHAI',
    aboutTitle: '| About Me',
    aboutDesc1: 'I am a developer who prioritizes solving problems with technology and creativity. I believe that great work isn\'t just about code, but about creating experiences that truly meet user needs.',
    aboutDesc2: 'With expertise in Modern Web Tech and UI/UX design, I am ready to help turn your vision into a reality that is ready to compete in the market.',
    exploreTitle: '| Featured Work',
    exploreHeading: 'Selected Interesting Projects',
    getStartedTitle: '| My Approach',
    getStartedHeading: 'From Concept to Tangible Results',
    whatsNewTitle: '| Capabilities',
    whatsNewHeading: 'Skills and Technologies Used',
    insightsTitle: '| Blog',
    insightsHeading: 'Sharing Knowledge and Experience',
    footerTitle: 'METADROID',
    footerCopyright: '© 2024 - 2025. All rights reserved.',
    metaverseBtn: 'View Project',
    // New translations
    networkTitle: '| Clients',
    networkHeading: 'Trusted Partners',
    networkSubtitle: 'Driving innovation alongside new businesses worldwide',
    feedbackTitle: '| Feedback',
    feedbackHeading: 'Voices from Collaborators',
    contactTitle: '| Let\'s Talk',
    contactHeading: 'Let\'s build something great together',
    contactSubtitle: 'Want to discuss a project or collaborate? Feel free to reach out.',
    contactCta: 'Send Message',
    viewProject: 'Go to Website',
    viewCode: 'View Code on GitHub',
  },
  th: {
    heroTitle1: 'ยินดีต้อนรับสู่',
    heroTitle2: 'โลกแห่งนวัตกรรม',
    heroName: 'อภิชาติ',
    heroRole: 'สร้างสรรค์ประสบการณ์ดิจิทัลที่เหนือระดับ',
    navbarTitle: 'อภิชาติ กาบบัวไข',
    aboutTitle: '| ตัวตนของผม',
    aboutDesc1: 'ผมเป็นนักพัฒนาที่ให้ความสำคัญกับการแก้ปัญหาด้วยเทคโนโลยีและความคิดสร้างสรรค์ ผมเชื่อว่างานที่ดีไม่ใช่แค่เรื่องของโค้ด แต่คือการสร้างประสบการณ์ที่ตอบโจทย์ผู้ใช้งานจริงๆ',
    aboutDesc2: 'จากเชี่ยวชาญด้าน Modern Web Tech และการออกแบบ UI/UX ผมพร้อมที่จะช่วยเปลี่ยนวิสัยทัศน์ของคุณให้กลายเป็นความจริงที่พร้อมแข่งขันในตลาด',
    exploreTitle: '| ผลงานเด่น',
    exploreHeading: 'โปรเจกต์ที่ภาคภูมิใจ',
    getStartedTitle: '| วิธีการทำงาน',
    getStartedHeading: 'ขั้นตอนการสร้างสรรค์ผลงาน',
    whatsNewTitle: '| ความเชี่ยวชาญ',
    whatsNewHeading: 'เทคโนโลยีและเครื่องมือ',
    insightsTitle: '| คลังความรู้',
    insightsHeading: 'บทความและความคิดสร้างสรรค์',
    footerTitle: 'METADROID',
    footerCopyright: '© 2024 - 2025 สงวนลิขสิทธิ์ทั้งหมด',
    metaverseBtn: 'เข้าชมโปรเจกต์',
    // New translations
    networkTitle: '| พาร์ทเนอร์',
    networkHeading: 'ความภูมิใจที่ได้ร่วมงานกับลูกค้าชั้นนำ',
    networkSubtitle: 'ขับเคลื่อนนวัตกรรมไปพร้อมกับธุรกิจรุ่นใหม่ทั่วโลก',
    feedbackTitle: '| รีวิว',
    feedbackHeading: 'สิ่งที่ลูกค้าบอกเล่าถึงเรา',
    contactTitle: '| ติดต่อ',
    contactHeading: 'มาสร้างสิ่งที่ยอดเยี่ยมด้วยกัน',
    contactSubtitle: 'ต้องการปรึกษาโปรเจกต์หรือร่วมงานกัน? ทักมาคุยกันได้เลยครับ',
    contactCta: 'ส่งข้อความหาผม',
    viewProject: 'เข้าชมเว็บไซต์',
    viewCode: 'ดูซอร์สโค้ด',
  },
};
