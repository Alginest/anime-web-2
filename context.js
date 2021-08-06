import React, { useContext, useState, useEffect } from 'react'
const url = 'https://api.jikan.moe/v3/top/anime/1/bypopularity'
const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  const fetchAnime = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
  }
  useEffect(() => {
    fetchAnime()
  }, [])
  return (
    <AppContext.Provider value={{ sidebar, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  )
}

//global hook

export const useGlobalContext = () => {
  return useContext(AppContext)
}
