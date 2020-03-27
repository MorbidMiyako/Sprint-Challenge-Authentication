import React, { useEffect, useState } from "react";
import Axios from "axios"
import Project from "./Project"

export default function Projects() {

  const [content, setContent] = useState([])
  const [contentUpdate, setContentUpdate] = useState([])

  useEffect(() => {
    Axios
      .get("localhost:5000/api/jokes")
      .then(response => {
        console.log(response)
        setContent(response.data.map(project => project)
        )
      })
      .catch(error => {
        console.log(error)
      })
  }, [contentUpdate])

  return (
    <div >
      <h1>
        "Worlds best Djokes"
      </h1>
      <div>
        {content.map(action => {
          return (
            <div key={action.id}>
              <h4>{action.joke}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}
