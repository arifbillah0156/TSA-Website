import { useEffect, useState } from "react";

export default function BackToTopButton() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!showButton) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-2 right-2 w-10 h-10 lg:w-12 lg:h-12 rounded-full 
      bg-gradient-to-r from-purple-600 to-lc flex items-center justify-center 
      shadow-lg hover:shadow-xl transition-all duration-300 
      transform hover:scale-110 z-50 border border-white"
            aria-label="Back to top"
        >
            <i className="fas fa-arrow-up text-white"></i>
        </button>
    );
}
