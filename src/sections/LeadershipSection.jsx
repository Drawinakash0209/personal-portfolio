import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { leadershipCards } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const LeadershipSection = () => {
  useGSAP(() => {
    // Animate cards with staggered entrance
    gsap.from(".leadership-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".leadership-grid",
        start: "top 80%",
      },
    });

    // Animate section header
    gsap.from(".leadership-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".leadership-header",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section
      id="leadership"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <div className="leadership-header">
          <TitleHeader 
            title="Leadership & Volunteer Experience" 
            sub="Making a Difference Through Service" 
          />
        </div>

        <div className="mt-20">
          <div className="leadership-grid grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-8">
            {leadershipCards.map((card, index) => (
              <div key={card.title || index} className="leadership-card">
                <GlowCard card={card} index={index}>
                  <div className="space-y-4">
                    {/* Icon/Badge */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12  flex items-center justify-center">
                        <img 
                          src={card.iconPath} 
                          alt={`${card.title} icon`} 
                          className="text-white"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            {card.type}
                          </span>
                          <span className="text-white-50 text-sm">{card.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title and Organization */}
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-blue-300 font-medium mb-3">
                        {card.organization}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-white-50 leading-relaxed">
                      {card.description}
                    </p>


                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default LeadershipSection;