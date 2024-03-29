import { Container } from "./styles"
import { Project } from "./project/Project";

import { UiProjects } from "../../data/UiProjects"
import { DevProjects } from "../../data/DevProjects"

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";

export function Projects(){
  //handle togle between UI and DEV
  const { skill, selected, handleChange } = useContext(SkillContext)
  const  mapping = (skill ? DevProjects : UiProjects)

  const { search } = useContext(SearchContext)


  return(
    <Container>
      {mapping
        .filter((item) => {
        return search.toLowerCase() === '' 
          ? item 
          : item.title.toLowerCase().includes(search) || item.description.toLowerCase().includes(search) || item.techs.toLowerCase().includes(search) 
      })
        .map((item, index) => (
          <Project 
            key={index}
            backend={item.links.backend}
            frontend={item.links.frontend}
            deploy={item.links.deploy}
            behance={item.links.behance}
            figma={item.links.figma}
            title={item.title}
            img2={item.img2}
            description={item.description}
            techs={item.techs}
          />
      ))}
    </Container>
  )
}
