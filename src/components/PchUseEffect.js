import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    //state: count
    const [count, setCount] = useState(0);
    
    // hàm xử lý sự kiện click me
    const HandleClick = ()=>{
        setCount(prev => prev +1);
    }

    // sử dụng hàm useEffect để cập nhật lại title; có một tham số
    useEffect(()=>{
        document.title = `Phạm Công Hiếu: You clicked ${count} times`;
        console.log( `You clicked ${count} times`);
    });
    //useEffect: tham số thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("Chạy lần đầu tiên - Một lần");
    },[])

    // [deps]
    useEffect(()=>{
        console.log(`useEffect count click: ` ,count)
    },[count])
  return (
    <div>
        <h2>Demo - useEffect: You clicked {count} times</h2>
        <button onClick={HandleClick}>
        Click me
      </button>
    </div>
  )
}
