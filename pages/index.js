import { useEffect, useMemo, useRef, useState } from "react";


const list = Array(10).fill('X')
const TestPage = () => {
  const containerRef = useRef();
  //const [rotate, setRotate] = useState(1152.56)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [index, setIndex] = useState(0)
  const completedSlides = useRef(0)
  function rotate(index) {
    return (-1 * (360 / 10) * index)
  }

  function prev() {
    setCurrentSlide(prv => prv + 1)
    setIndex(idx => idx <= list.length - 1 && list[idx - 1] ? idx - 1 : list.length - 1)
  }

  function next() {
    setCurrentSlide(prv => prv - 1)
    setIndex(idx => idx >= 0 && list[idx + 1] ? idx + 1 : 0)
  }

  useEffect(() =>
    console.log('index', index)
    , [index])


  return (
    <>
      <div className="wrapper" ref={containerRef}>
        <div className="container">
          <div className="slides" style={{ transform: `translateZ(580px) rotateY(${rotate(currentSlide)}deg)` }}>
            {list.map((el, idx) => (
              <div className={`slide `} style={{ transform: `rotateY(${rotate(idx)}deg) translateZ(-580px)` }} key={idx}>
                <div className={` ${idx === index && 'active'}`}></div>
                <div className="content">{idx}</div></div>
            ))}
          </div>
        </div>

      </div>
      <div className="buttons">
        <div>
          <button onClick={prev}>prev</button><button onClick={next}>next</button>
        </div>
      </div>
    </>

  )
}

export default TestPage;