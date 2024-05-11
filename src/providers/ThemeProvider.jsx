"use client"

import React, { useContext } from 'react'
import { TheamContext } from '@/context/TheamContext'
import { useEffect, useState } from 'react'

function ThemeProvider({children}) {

    const {theam} = useContext(TheamContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }
    , []);

    if (mounted) {
        return (
            <div className={theam}>
              {children}
            </div>
          )
    }
 
}


export default ThemeProvider
