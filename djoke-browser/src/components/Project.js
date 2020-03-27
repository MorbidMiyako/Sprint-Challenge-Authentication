import React, { useEffect, useState } from "react";
import Axios from "axios"

export default function Person(props) {

  const [actionContent, setActionContent] = useState([])
  const [viewActions, setViewActions] = useState(false)
  const [contentUpdate, setContentUpdate] = useState([])

  const x = props.project

  useEffect(() => {
    Axios
      .get(`localhost:5000/api/jokes`)
      .then(response => {
        console.log(response)
        setActionContent(response.data.map(action => action)
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
        {actionContent.map(action => {
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
