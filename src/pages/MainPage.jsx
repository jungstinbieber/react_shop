import Card from "../components/Card"
import bg from "../bg.jpg"
import { useState } from "react";

function MainPage({ fruit }) {
  const [fruitCount,setFruitCount]= useState(3);

  const visibleFruit = fruit.slice(0, fruitCount)

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')', height:'300px' }}></div>

      <div className="container">
        <div className="row">
          {
            fruit.map((data, i) => {
              return (
                <Card data={data} key={i} />
              )
            })
          }
        </div>
      </div>
      {
        fruitCount > fruit.length? 
        <div className="alert alert-dabger">더이상 상품이 없습니다</div>
        :
      

      <button onCanPlay={()=>{
        setFruitCount(fruitCount+3)
      }}>3 개 더보기</button>
      }
    </>
  )
}

export default MainPage