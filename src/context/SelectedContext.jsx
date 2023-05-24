import { createContext, useState } from 'react'

export const SelectedContext = createContext()

export const SelectedProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('home')
  return (
    <SelectedContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedContext.Provider>
  )
}
