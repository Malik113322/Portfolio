import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNestjs, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-primary" /> },
    { name: "React Native", icon: <FaReact className="text-info" /> }, // Using React logo
    { name: "Node.js", icon: <FaNodeJs className="text-success" /> },
    { name: "Express.js", icon: <SiExpress className="text-dark" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-success" /> },
    { name: "NestJS", icon: <SiNestjs className="text-danger" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-primary" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple" /> },
  ];

  return (
    <div className="container py-5" id="skills">
      <h2 className="text-center fw-bold mb-5 display-6">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="row g-4 justify-content-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="col-6 col-sm-4 col-md-3 col-lg-2 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
          >
            <motion.div
              className="card shadow-sm border-0 p-4 h-100 rounded-4 skill-card"
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="fs-1 mb-3"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>
              <h6 className="fw-semibold">{skill.name}</h6>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
