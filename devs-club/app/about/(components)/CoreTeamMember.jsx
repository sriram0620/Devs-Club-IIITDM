import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin } from 'lucide-react'
import image from '../../(assets)/image.png'
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const AnimatedSection = ({ children }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeInUp}
  >
    {children}
  </motion.div>
)

const CoreTeamMember = ({ name, role, bio, image, linkedin, github }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="relative w-64 h-80 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="rest"
      whileHover="hover"
      animate={isHovered ? "hover" : "rest"}
    >
      {/* The background animation for the card */}
      <motion.div
        className="absolute inset-0 bg-primary rounded-lg"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.05 },
        }}
      />

      {/* Default non-hover state */}
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={image}
              alt={name}
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-black text-xl font-bold">{name}</h3>
            <p className="text-black text-sm">{role}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover state */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-primary-foreground rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-black text-xl font-bold mb-2">{name}</h3>
            <p className="text-black text-sm mb-4">{role}</p>
            <p className="text-black text-sm mb-4 text-center">{bio}</p>
            <div className="flex justify-center space-x-4">
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-black hover:text-sky-300" />
              </a>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-black hover:text-gray-300" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TeamSection = ({ title, members }) => (
  <AnimatedSection>
    <motion.section variants={fadeInUp} className="mb-16">
      <h2 className="text-4xl font-bold mb-12 text-center">{title}</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        variants={staggerChildren}
      >
        {members.map((member, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <CoreTeamMember {...member} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  </AnimatedSection>
)

export default function CoreTeam() {
  const headCore = {
    name: "T Lakshmi Srinivas",
    role: "Head Core",
    bio: "Passionate about leading and inspiring the Developers Club community.",
    image: "/assets/Head_core.png",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  }

  const cores = [
    { name: "Vishnu Teja", role: "Technical Lead", bio: "Interested in coding, collaboration, and driving innovation through community-driven development initiatives.", image: '/assets/cs21b2027.jpg', linkedin: "https://www.linkedin.com/in/vishnu-surla-70384524a/", github: "https://github.com/Vishnuteja-Surla" },
    { name: "Harsha Vardhan G", role: "Design Lead", bio: "UI/UX enthusiast. Believes in creating intuitive and accessible designs for all.", image: "/assets/cs21b1052.jpg", linkedin: "https://linkedin.com/in/mikejohnson", github: "https://github.com/mikejohnson" },
    { name: "K M V R Madhava Krishna", role: "Marketing Lead", bio: "Creative marketer with a passion for community building and event planning.", image: "/assets/cs22b1005.jpg", linkedin: "https://linkedin.com/in/emilybrown", github: "https://github.com/emilybrown" },
    { name: "Praneeth Devarasetty", role: "Content Lead", bio: "Skilled writer and content creator, focusing on tech education and documentation.", image: "/assets/cs22b1014.jpg", linkedin: "https://linkedin.com/in/chrislee", github: "https://github.com/chrislee" },
    { name: "D Chaithanya Reddy", role: "Outreach Lead", bio: "Networking expert, dedicated to expanding GDSC's partnerships and collaborations.", image: "/assets/cs22b1052.jpg", linkedin: "https://linkedin.com/in/sarahdavis", github: "https://github.com/sarahdavis" },
  ]

  const coordinators = [
    { name: " A Varshini ", role: "Web Development Coordinator", bio: "Frontend specialist with a knack for creating responsive and accessible websites.", image: '/assets/CS23B1015.jpg', linkedin: "https://www.linkedin.com/in/varshini-avula", github: "https://github.com/varshini-1396" },
    { name: "R K Larika", role: "Mobile App Coordinator", bio: "Passionate learner exploring development and AI/ML.", image: "/assets/cs23b1028.jpg", linkedin: "https://www.linkedin.com/in/larika-rajasekaran-02b43a2a7/", github: "https://github.com/Larika85" },
    { name: " Sudarshan S", role: "AI/ML Coordinator", bio: "Intrigued by the fields of data analytics, iOS development, and graphic design, I have diligently sought to acquire a comprehensive understanding of these disciplines and their applications.", image: "/assets/cs23b2007.jpeg", linkedin: "https://www.linkedin.com/in/sudarshan-sudhakar-43a262274", github: "https://github.com/sxdxde" },
    { name: "Y Sainatha Reddy", role: "AR/VR Coordinator", bio: "Passionate about web development and cybersecurity, eager to make a difference in the digital world.", image: "/assets/cs23i1010.jpg", linkedin: "https://www.linkedin.com/in/sainatha-reddy/", github: "https://github.com/sainatha-reddy" },
    { name: "Y Harith", role: "Cloud Computing Coordinator", bio: "Interested in exploring all the fields of Computer Science specifically in Machine Learning and Web Development.", image: "/assets/cs23i1027.jpg", linkedin: "https://www.linkedin.com/in/harith-yerragolam-617486288/", github: "https://github.com/Harith-Y" },
    { name: "Deetya A M ", role: "Cybersecurity Coordinator", bio: "Driven by a deep interest in machine learning and web development, I continuously strive to expand my expertise in these fields and their practical applications.", image: "/assets/cs23i1032.jpg", linkedin: "https://www.linkedin.com/in/deetya-mehta-046582282", github: "https://github.com/deerobo1" },
    { name: "Vijay S K", role: "Data Science Coordinator", bio: "Interested in artificial intelligence and machine learning, web development. I am willing to expand my knowledge in these fields.", image: "/assets/EC23B1012.png", linkedin: "https://www.linkedin.com/in/vijay-shanmugham-karthikheyen-313ab32ba/", github: "https://github.com/vijaysk06" },
    { name: "Hamsini Deshmukh", role: "IoT Coordinator", bio: "Exploring the intersection of hardware and software in the Internet of Things.", image: "/assets/me23b2016.jpg", linkedin: "https://www.linkedin.com/in/hamsini-deshmukh-59a5302a5/", github: "https: //github.com/Hamsinideshmukh" },
  ]

  const mentors = [
    { name: "Vishnu Ram A V", role: "AI/ML Mentor", bio: "Professor of Computer Science with 20+ years of industry experience.", image: "/assets/cs21b1043.jpg", linkedin: "https://linkedin.com/in/drrobertwhite", github: "https://github.com/drrobertwhite" },
    { name: "K Noineesh Reddy", role: "AI Mentor", bio: "Senior Software Engineer at Google, specializing in large-scale distributed systems.", image: "/assets/cs21b2023.jpg", linkedin: "https://linkedin.com/in/profemmagreen", github: "https://github.com/profemmagreen" },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-16 text-center">Our Team</h1>

      <TeamSection title="Head Core" members={[headCore]} />
      <TeamSection title="Core Team" members={cores} />
      <TeamSection title="Coordinators" members={coordinators} />
      <TeamSection title="Mentors" members={mentors} />
    </div>
  )
}