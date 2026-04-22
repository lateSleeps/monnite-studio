"use client"

import { useEffect, useRef, useState } from "react"

interface TextGlitchProps {
  text: string
  hoverText?: string
  href?: string
  className?: string
  overlayBg?: string
  overlayTextColor?: string
  as?: React.ElementType
}

export function TextGlitch({
  text,
  hoverText,
  href,
  className = "",
  overlayBg = "#ffffff",
  overlayTextColor = "#000000",
  as: Component = "div",
}: TextGlitchProps) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const [displayHoverText, setDisplayHoverText] = useState(hoverText || text)
  const hoverIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  const handleMouseEnter = () => {
    const target = hoverText || text
    let iteration = 0

    if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current)

    hoverIntervalRef.current = setInterval(() => {
      setDisplayHoverText(
        target
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " "
            if (index < iteration) return target[index]
            return letters[Math.floor(Math.random() * 26)]
          })
          .join(""),
      )

      if (iteration >= target.length) {
        clearInterval(hoverIntervalRef.current!)
        setDisplayHoverText(target)
      }

      iteration += 1 / 3
    }, 30)

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }

  const handleMouseLeave = () => {
    if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current)
    setDisplayHoverText(hoverText || text)

    if (spanRef.current) {
      spanRef.current.style.clipPath = "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)"
    }
  }

  useEffect(() => {
    return () => {
      if (hoverIntervalRef.current) clearInterval(hoverIntervalRef.current)
    }
  }, [])

  const overlayContent = href ? (
    <a href={href} target="_blank" rel="noreferrer" className="no-underline" style={{ color: overlayTextColor }}>
      {displayHoverText}
    </a>
  ) : (
    displayHoverText
  )

  return (
    <Component
      className={`relative inline-block cursor-pointer select-none pr-[4px] ${className}`}
      style={{ verticalAlign: "baseline" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span
        ref={spanRef}
        className="absolute pointer-events-none font-bold flex items-center"
        style={{
          top: 0, bottom: 0, left: 0,
          width: "calc(100% + 12px)",
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          transition: "clip-path 0.35s ease",
          backgroundColor: overlayBg,
          color: overlayTextColor,
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {overlayContent}
      </span>
    </Component>
  )
}
