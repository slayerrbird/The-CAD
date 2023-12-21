import React, { useEffect, useRef } from "react"

import "./RevealEffect.css"

const RevealEffect = () => {
  const scrollDirectionRef = useRef("down")

  useEffect(() => {
    let lastScrollTop = 0

    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop
      const direction = st > lastScrollTop ? "down" : "up"

      if (Math.abs(st - lastScrollTop) > 5) {
        document.body.setAttribute("scroll-direction", direction)
      }

      scrollDirectionRef.current = direction
      lastScrollTop = st <= 0 ? 0 : st
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const addRevealEffect = elements => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          let revealClass
          if (entry.isIntersecting) {
            revealClass =
              scrollDirectionRef.current === "up" ? "reveal-up" : "reveal-down"

            entry.target.classList.add(revealClass)
          } else {
            entry.target.className = "subject"
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach(element => {
      observer.observe(element)
    })
  }

  useEffect(() => {
    const elementsToReveal = document.querySelectorAll(".subject")
    addRevealEffect(elementsToReveal)
  }, [])

  return <div className="subject">{/* Add your content here */}</div>
}

export default RevealEffect
