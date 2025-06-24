import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { eduCards } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  useGSAP(() => {
    // Animate timeline cards
    gsap.utils.toArray(".edu-timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    // Animate timeline scaling
    gsap.to(".edu-timeline", {
      scaleY: 0,
      transformOrigin: "bottom bottom",
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".edu-timeline",
        start: "top center",
        end: "70% center",
        scrub: true, // Smoothly syncs with scroll
      },
    });
  }, []);

  return (
    <section
      id="education"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Educational Background" sub="My Academic Journey" />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {eduCards.map((card, index) => (
              <div key={card.institution || index} className="exp-card-wrapper edu-timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={`${card.institution} visual`} />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="edu-timeline timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt={`${card.institution} logo`} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.institution}</h1>
                        <h2 className="font-medium text-xl mt-2 text-white-80">{card.degree}</h2>
                        <p className="my-5 text-white-50">{card.duration}</p>
                        
                        {card.achievements && (
                          <>
                            <p className="text-[#839cb5] italic">Academic Achievements</p>
                            <ul className="list-disc ms-5 mt-2 flex flex-col gap-3 text-white-50">
                              {card.achievements.map((achievement, idx) => (
                                <li key={idx} className="text-lg">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;