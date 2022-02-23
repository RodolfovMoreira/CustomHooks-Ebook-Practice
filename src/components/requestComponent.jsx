import { useState } from "react"
import useFetch from "../hooks/useFetch"

export default function RequestComponent() {
  const [id, setId] = useState(1)
  const { loading, error, value } = useFetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {},
    [id]
  )

  return (
    <div>

      { value &&
        <div>
          <img src={value.image} alt="personagem" /> 
          <h3>{value.name}</h3>
        </div>
      }

      { error &&
        <div>
          <h3>Erro na requisição</h3>
          <div>{JSON.stringify(error)}</div>
        </div>
      }

      <button onClick={() => setId(currentId => currentId + 1)}>
        Próximo personagem
      </button>

      <div>Loading: {loading.toString()}</div>
      
    </div>
  )
}