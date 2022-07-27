import { useEffect, useRef } from 'react'
import p5 from 'p5'
import './SortComponent.css'
import sketch from '../p5/p5SketchHelper'

export default function SelectionSortComponent() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(sketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  function handleClick() {
    p5Instance.current.selectionSortP5()
  }

  return (
    <div>
      <button onClick={handleClick}>visualise</button>
      <div ref={p5ContainerRef}></div>
    </div>
  )
}
