import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Heart, Target } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <GraduationCap size={28} />,
      title: "Education",
      description: "B.E. in Computer Science and Engineering from Einstein College, Thirunelveli, with a strong focus on Web Development and building modern, user-friendly web applications.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Experience",
      description: "Fresher Frontend Developer with hands-on experience building web applications using React, JavaScript, HTML, and CSS, and a strong interest in modern frontend development practices.",
    },
    {
      icon: <Heart size={28} />,
      title: "Passion",
      description: "I believe great design is invisible. My passion lies in creating seamless experiences that delight users and solve real problems.",
    },
    {
      icon: <Target size={28} />,
      title: "Goals",
      description: "To lead innovative projects that push boundaries and make technology more accessible and enjoyable for everyone.",
    },
  ];

  return (
    <PageLayout>
      <section ref={ref} className="about-gradient pt-24">
        <div className="container-custom section-padding">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block font-body text-sm tracking-[0.3em] uppercase text-about-accent mb-4">
              Get to Know Me
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              About Me
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
              Hello! I’m Dhusanth, a passionate Computer Science Engineering (CSE) student studying at Einstein College, Thirunelveli. I enjoy creating things that live on the internet, whether it’s websites, web applications, or interactive user experiences.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed mb-6">
                My journey into web development began during my college studies, where I started building projects to strengthen my frontend skills and explore modern web technologies. Since then, I’ve been continuously improving my ability to design clean, responsive, and efficient user interfaces.
              </p>
              <p className="font-body text-lg text-foreground/80 leading-relaxed">
              When I’m not coding, I spend time learning new technologies, improving my problem-solving skills, and exploring ideas related to web development. I strongly believe in continuous learning and always look for opportunities to grow both technically and professionally.
              </p>
            </motion.div>

            {/* Stats/Info Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-foreground/10"
            >
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-about-accent">No</span>
                  <span className="font-body text-sm text-muted-foreground">Years of Experience</span>
                </div>
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-about-accent">4+</span>
                  <span className="font-body text-sm text-muted-foreground">Projects Completed</span>
                </div>
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-about-accent">1</span>
                  <span className="font-body text-sm text-muted-foreground">Happy Clients</span>
                </div>
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-about-accent">5+</span>
                  <span className="font-body text-sm text-muted-foreground">Technologies</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-background/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-foreground/10"
              >
                <div className="text-about-accent mb-4">{card.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">{card.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
