"use client"
import { useEffect, useRef } from "react";
import "./ElectricCursor.css";

export default function ElectricCursorCSS() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;

            // main cursor
            cursorRef.current.style.left = `${clientX}px`;
            cursorRef.current.style.top = `${clientY}px`;

            // electric trail
            const trail = document.createElement("div");
            trail.className = "electric-trail";
            trail.style.left = `${clientX}px`;
            trail.style.top = `${clientY}px`;

            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 600);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

    return <div ref={cursorRef} className="electric-cursor" />;
}
