import { useState } from "react"

const Listrender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

  return (
    <div>
        <ul>
            {list.map((item) =>
                <li>{item}</li>
            )}
        </ul>
    </div>
  )
}

export default Listrender

