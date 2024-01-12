import NavBtns from "./components/NavBtns"
import Cards from "./components/Cards"
import { useState } from "react"

function App() {
  let [isSelected, setIsSelected] = useState(0)
  function onSelectedFunc(selectedIndex) {
    setIsSelected(selectedIndex)
  }
  return (
    <>
      <nav>
        <NavBtns active={isSelected} onSelected={onSelectedFunc} />
      </nav>
      <Cards cardsIndex={isSelected} />
    </>
  )
}

export default App
