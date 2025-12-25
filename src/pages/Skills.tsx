import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import PageLayout from "@/components/PageLayout";

const skills = [
  { name: "HTML5", percentage: 90 },
  { name: "CSS3 / Tailwind", percentage: 85 },
  { name: "JavaScript / TypeScript", percentage: 80 },
  { name: "ReactJS", percentage: 70 },
  { name: "Node.js", percentage: 20 },
  { name: "UI/UX Design", percentage: 30 },
];

const SkillBar = ({ name, percentage, delay }: { name: string; percentage: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm font-medium text-foreground">{name}</span>
        <span className="font-body text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-skill-bar-bg rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
          className="h-full bg-skill-bar rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const additionalSkills = [
    "Git & GitHub",
    "REST APIs",
    "MongoDB", 
    "Java",
    "Python"
    
  ];

  return (
    <PageLayout>
      <section ref={ref} className="bg-background pt-24">
        <div className="container-custom section-padding">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              What I Do Best
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Skills & Expertise
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-8">Core Technologies</h3>
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </motion.div>

            {/* Additional Skills */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-display text-2xl font-semibold mb-8">Additional Skills</h3>
              <div className="flex flex-wrap gap-3">
                {additionalSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="px-5 py-3 bg-secondary rounded-full font-body text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Philosophy Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 p-8 border border-border rounded-2xl"
              >
                <h4 className="font-display text-xl font-semibold mb-4">My Approach</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code that scales. Every project I undertake focuses on performance, accessibility, and user experience. I stay updated with the latest industry trends and continuously refine my craft.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;
