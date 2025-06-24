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
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current, project4Ref.current, project5Ref.current, project6Ref.current];
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
                            <img src="/images/project1.png" alt="Multi-User Retail Management Application" />
                        </div>
                        <div className="text-content">
                            <h2>Rotaract Club of Apiit Official Website</h2>
                            <p className="text-white-50 md:text-xl">Built the official club website using Laravel, with features
 like dynamic content management, CRUD operations for
 events and members, and a responsive UI using Tailwind
 CSS.</p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper ">
                                <img src="/images/project2.png" alt="Tourist Travel App" className="w-full h-full object-cover" />
                            </div>
                            <h2>Multi-User Retail Management Application</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper ">
                                <img src="/images/project3.png" alt="Sport Indoor Booking CRM" className="w-full h-full object-cover"/>
                            </div>
                            <h2>Sport Indoor Booking CRM (Laravel and MYSQL)</h2>
                        </div>
                    </div>
                </div>


                                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project4Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project4.png" alt="Multi-User Retail Management Application" />
                        </div>
                        <div className="text-content">
                            <h2>Tourist Travel App (Flutter)</h2>
                            <p className="text-white-50 md:text-xl">Developed a Flutter-based mobile application for
 tourists in Colombo, offering navigation and information
 on local attractions. </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project5Ref}>
                            <div className="image-wrapper  ">
                                <img src="/images/project5.png " alt="Tourist Travel App" className="w-full h-full object-cover" />
                            </div>
                            <h2> University Blog - Following Agile Methodology</h2>
                        </div>
                        <div className="project" ref={project6Ref}>
                            <div className="image-wrapper ">
                                <img src="/images/project6.png" alt="Sport Indoor Booking CRM" className="w-full h-full object-cover" />
                            </div>
                            <h2>CRUD Project for Stock Management System - GUI (C#)</h2>
                        </div>
                    </div>
                </div>
            </div>


            
        </section>

        
    );
}   

export default ShowcaseSection;