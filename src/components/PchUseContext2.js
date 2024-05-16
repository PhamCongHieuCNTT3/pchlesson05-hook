import React, { useContext } from 'react'
import { ThemeContext } from './PchUseContext'

export default function PchUseContext2() {
    const theme = useContext(ThemeContext);
    return (
    <div className={theme}>
        <h2>PchUseContext2</h2>
        <p>
            <b>2210900101</b>
            <b>Pham Cong Hieu</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}
