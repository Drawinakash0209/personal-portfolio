import { useRef } from "react";

const GlowCard = ({ card, children, index }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mousex = e.clientX - rect.left - rect.width / 2;
        const mousey = e.clientY - rect.top - rect.height / 2;

        //calc the angle
        let angle = Math.atan2(mousey, mousex) * (180 / Math.PI);

        angle = (angle + 360) % 360; // Normalize angle to be between 0 and 360

        card.style.setProperty("--start", angle + 60);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="card card-border timeline-card rounded-xl p-10 relative"
        >
            <div className="glow" />

            <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <img src="/images/star.png" key={i} alt="star" className="size-5" />
                ))}
            </div>

            <div className="mb-5">
                <p className="text-white-50">{card.review}</p>
            </div>

            {children}
        </div>
    );
};

export default GlowCard;
