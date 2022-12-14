import React from "react"
import { VscGithub } from "react-icons/vsc"
import { AiOutlineLinkedin } from "react-icons/ai"

import curriculumIcon from "../../../shared/images/curriculum.png"
import { PokeFooter, ContainerIcons, CurriculunContainer } from "./style"

function Footer() {
  return (
    <PokeFooter>
      <ContainerIcons>
        <p>&copy; Created By Thales Daniel</p>
        <CurriculunContainer>
          <span>found it interesting? hire me</span>
          <img src={curriculumIcon} alt="curriculum icon" />
        </CurriculunContainer>
      </ContainerIcons>
      <ContainerIcons>
        <p>See more content by clicking below</p>
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
      </ContainerIcons>
    </PokeFooter>
  )
}

export default Footer
