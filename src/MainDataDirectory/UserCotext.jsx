import React, { createContext } from 'react'

export const databse = createContext()

const UserCotext = ({children}) => {
  const Text = "TailwindCSS Property Explorer By Piyush Solanki"
  const propertycategory = ["Layout & Positioning","Typography & Text","Visuals & Backgrounds","Interactivity & Effects","Flexbox & Grid"]
  
  const display = ['block','inline','flex','grid','hidden']
  const position = ['static','relative','absolute','fixed','sticky']
  const overflow = ['overflow-hidden','overflow-auto','overflow-scroll','overflow-visible']

  const fontsize = ['font-xs','font-sm','font-xl','font-base','font-lg','font-2xl','font-3xl','font-4xl','font-5xl','font-6xl','font-7xl','font-8xl','font-9xl']
  const textalign = ['text-left','text-right','text-center','text-justify','text-start','text-end',]

  const borderwidth = ['border-2','border-4','border-6','border-8']
  const boxshadow = ['shadow','shadow-sm','shadow-md','shadow-lg','shadow-xl']
  const rounded = ['rounded-xl','rounded-sm','rounded-md','rounded-full']

  const hovercursor = ['hover:cursor-pointer','hover:cursor-auto','hover:cursor-wait','hover:cursor-text',]
  const userselect = ['select-none','select-text','select-all','select-auto']

  const flexdirection = ['flex-row','flex-col','flex-row-reverse','flex-col-reverse']
  const justifycontent = ['justify-normal','justify-start','justify-end','justify-center','justify-between','justify-around','justify-evenly','justify-stretch']
  const alignitems = ['items-start','items-end','items-center','items-baseline','items-stretch']
  return (
    <databse.Provider value={{Text,propertycategory,display,position,overflow,fontsize,textalign,borderwidth,boxshadow,hovercursor,userselect,flexdirection,justifycontent,alignitems,rounded}}>
        {children}
    </databse.Provider>
  )
}

export default UserCotext
