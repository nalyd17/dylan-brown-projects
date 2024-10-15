import DylanHeadshot from "@/assets/DylanHeadshot.png";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section id="profile" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto mt-16 grid w-5/6 grid-cols-1 gap-16 md:grid-cols-2">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img alt="dylan-headshot" src={DylanHeadshot} />
        </motion.div>
        <motion.div
          className="flex flex-col justify-center gap-4 text-xs md:text-sm"
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ x: [500, 0], opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="gap-1">
            <p className="text-4xl md:text-6xl">Dylan Brown</p>
            <p className="text-xl md:text-2xl">Software Development Engineer</p>
          </div>
          <p>
            Experienced Software Development Engineer with 5+ years of
            experience developing large-scale, production-quality software
            solutions and 1.5 years of experience leading and managing software
            development teams. Full stack experience delivering iOS mobile
            applications, web applications, and backend systems to support
            various industries including transportation and food production.
          </p>
          <p>
            Highly skilled in system design, people management, and project
            management. Proficient in Java, Typescript, Python, Swift (ObjC),
            and React. Extensive experience with AWS products (ECS, Lambda, DDB,
            Amplify, etc.), CI/CD concepts including pipeline solutions, and
            software scaling.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
