import { useEffect } from "react";
import { useState } from "react";

export function App() {
  const [repositories, setRepositores] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/rodrigoaster/repos")
      .then(response => response.json())
      .then(data => setRepositores(data))
  }, [])

  return (
    <div>
      {
        repositories.map(repository => { 
          return (
            <ul>
              <li>{repository.name}</li>
            </ul>
          ) 
      })
      }
    </div>
  )
}