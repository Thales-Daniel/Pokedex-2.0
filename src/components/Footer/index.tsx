import React from "react"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"
import PokeFooter from "./style"

function Footer() {
  return (
    <PokeFooter>
      <p>&copy; Created By Thales Daniel</p>
      <span>See more content by clicking below</span>
      <div>
        <a
          href="https://github.com/Thales-Daniel"
          target="_blank"
          rel="noreferrer"
        >
          <VscGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/thales-daniel/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
      </div>
    </PokeFooter>
  )
}

export default Footer
