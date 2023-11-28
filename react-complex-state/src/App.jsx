import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onSmash, children}) => {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  )
}

export default function App() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleReset = () => {
    setAll([])
    setLeft(0)
    setRight(0)
  }
  return (
    <div>
      {left}
      <Button onSmash={handleLeftClick}>Left</Button>
      <Button onSmash={handleRightClick}>Right</Button>
      {right}
      <History allClicks={allClicks}/>
      <Button onSmash={handleReset}>Reset history</Button>
    </div>
  )
}