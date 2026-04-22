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
      className={`relative overflow-hidden cursor-pointer select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
      <span
        ref={spanRef}
        className="absolute inset-0 flex items-center pointer-events-none font-bold transition-all duration-300 ease-out"
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          backgroundColor: overlayBg,
          color: overlayTextColor,
          paddingLeft: "inherit",
          paddingRight: "inherit",
        }}
      >
        {overlayContent}
      </span>
    </Component>
  )
}
