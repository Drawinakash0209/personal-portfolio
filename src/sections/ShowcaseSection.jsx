import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // <--- ADD THIS LINE
import { useRef } from "react";

// It's best practice to register plugins right after importing them
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // This animation seems out of place inside the forEach. I've moved it out.
        // Also, the syntax for a simple tween is different.
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    }, { scope: sectionRef }); // It's good practice to scope your useGSAP hook

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="First Project" />
                        </div>
                        <div className="text-content">
                            <h2>ON-DEMAND powerfull user app</h2>
                            <p className="text-white-50 md:text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ipsa corrupti, sapiente voluptatum molestiae error fugit ad numquam, eveniet fuga exercitationem molestias itaque repellat facere repellendus, nulla incidunt consequatur sint.</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Second Project" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project2.png" alt="Second Project" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShowcaseSection;