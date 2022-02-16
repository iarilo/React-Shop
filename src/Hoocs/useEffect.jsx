import React,{useEffect} from 'react'
import Plagin from 'plagin'

const UseEffect = () => {
 // Коментарии что-бы понимать, что useEffect() делает
  useEffect(()=> {
  const Show = () => { console.log('hellow')};
  document.addEventListener('click',Show);
    return () => { document.removeEventListener('click', Show);}
  });

  useEffect(function plagin() {
   //init() — используется для создания «нового объекта
   Plagin.init();
   // destroy() - это композиция, когда уничтожаемый экземпляр класса существует только внутри контейнера и не выходит за его пределы.
    return () => {Plagin.destroy()};
  },[]);

  return (
    <div>
      useEffect
    </div>
  )
}

export default UseEffect