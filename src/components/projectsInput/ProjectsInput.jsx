import { Container } from "./styles"
import { Social } from "../socials/social/Social";

import { useContext } from "react";
import { SkillContext } from "../../context/SkillContext";
import { SearchContext } from "../../context/SearchContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ProjectsInput({...rest}){
  //handle togle between UI and DEV
  const { options, selected, handleChange } = useContext(SkillContext)

  const { setSearch } = useContext(SearchContext)

 
  return(
    <Container>
      <div className="left">
        <Link to={"/"}>
          <i className="ri-arrow-left-line" />
        </Link>
        <div className="title">
          <select value={selected} onChange={handleChange}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="input">
       <i className="ri-filter-2-line" />
        <input {...rest} onChange={(e) => setSearch(e.target.value)} />
      </div>
    </Container>
  )
}
