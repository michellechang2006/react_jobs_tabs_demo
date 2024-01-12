import NavBtns from "./components/NavBtns"
import Cards from "./components/Cards"
import { useState } from "react"
import GithubLogo from "./assets/Github Repo Logo.svg"

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
      {/* Github Repo Logo */}
      <a href="https://github.com/michellechang2006/react_jobs_tabs_demo">
        <img className="github-logo" src={GithubLogo} alt="Github Repo" />
      </a>
    </>
  )
}

export default App
