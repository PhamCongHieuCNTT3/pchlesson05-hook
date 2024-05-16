import React, { createContext, useState } from 'react'
import PchUseContext1 from './PchUseContext1';
export const ThemeContext = createContext(); // tạo ngữ cảnh để chia sẻ

export default function PchUseContext() {
    //state
    const [theme,setTheme] = useState('red');

    //hàm thay đổi theme
    const npcHandleChange = ()=>{
        setTheme(theme==='red'?'blue':'red');
    }
  return (
    <ThemeContext.Provider value ={theme}>
    <div className='alert'>
        <h2>Demo useContext</h2>
        <PchUseContext1/>
        <button onClick={npcHandleChange}>Change bgColor</button>
    </div>
    </ThemeContext.Provider>
  )
}
