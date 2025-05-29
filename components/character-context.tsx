"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getCharacterForDate, getReviewCharacters, markCharacterAsReviewed, type Character } from "@/lib/character-data"
import { getCurrentMonthCharactersSync, preloadAdjacentMonths, getMonthlyCharactersSync, areCharactersAvailable } from "@/lib/character-loader"

type CharacterContextType = {
  currentCharacter: Character | null
  reviewCharacters: Character[]
  monthlyCharacters: Character[]
  markAsReviewed: (id: string, remembered: boolean) => void
  loadNextCharacter: () => void
  loadPreviousCharacter: () => void
  isLoading: boolean
  currentDate: Date
  monthlyDataAvailable: boolean
  loadingError: string | null
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined)

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null)
  const [reviewCharacters, setReviewCharacters] = useState<Character[]>([])
  const [monthlyCharacters, setMonthlyCharacters] = useState<Character[]>([])
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(true)
  const [monthlyDataAvailable, setMonthlyDataAvailable] = useState(false)
  const [loadingError, setLoadingError] = useState<string | null>(null)

  // Load the character for the current date
  useEffect(() => {
    setIsLoading(true)
    setLoadingError(null)
    
    try {
      const character = getCharacterForDate(currentDate)
      setCurrentCharacter(character)
      
      // Check if monthly data is available for this date
      const year = currentDate.getFullYear()
      const month = currentDate.getMonth() + 1
      const hasMonthlyData = areCharactersAvailable(year, month)
      setMonthlyDataAvailable(hasMonthlyData)
      
      // Update monthly characters if we're in a new month
      if (hasMonthlyData) {
        const monthlyChars = getMonthlyCharactersSync(year, month)
        setMonthlyCharacters(monthlyChars)
      }
      
    } catch (error) {
      console.error("Error loading character:", error)
      setLoadingError(error instanceof Error ? error.message : "Failed to load character")
    } finally {
      setIsLoading(false)
    }
  }, [currentDate])

  // Load review characters
  useEffect(() => {
    try {
      const characters = getReviewCharacters()
      setReviewCharacters(characters)
    } catch (error) {
      console.error("Error loading review characters:", error)
    }
  }, [])

  // Load current month's characters and preload adjacent months
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Load current month's characters
        const characters = getCurrentMonthCharactersSync()
        setMonthlyCharacters(characters)
        
        // Check if current month has monthly data available
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const hasMonthlyData = areCharactersAvailable(year, month)
        setMonthlyDataAvailable(hasMonthlyData)
        
        // Preload adjacent months in the background
        preloadAdjacentMonths().catch((error) => {
          console.warn("Could not preload adjacent months:", error)
        })
        
      } catch (error) {
        console.error("Error loading monthly characters:", error)
        setLoadingError(error instanceof Error ? error.message : "Failed to load monthly data")
      }
    }
    
    loadInitialData()
  }, [])

  const markAsReviewed = (id: string, remembered: boolean) => {
    // Update in local storage
    markCharacterAsReviewed(id, remembered)

    // Update local state if the character was remembered
    if (remembered) {
      setReviewCharacters((prev: Character[]) => prev.filter((char: Character) => char.id !== id))
    }
  }

  const loadNextCharacter = () => {
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)
    setCurrentDate(nextDate)
    
    // Clear any previous errors when navigating
    setLoadingError(null)
  }

  const loadPreviousCharacter = () => {
    const prevDate = new Date(currentDate)
    prevDate.setDate(prevDate.getDate() - 1)
    setCurrentDate(prevDate)
    
    // Clear any previous errors when navigating
    setLoadingError(null)
  }

  return (
    <CharacterContext.Provider
      value={{
        currentCharacter,
        reviewCharacters,
        monthlyCharacters,
        markAsReviewed,
        loadNextCharacter,
        loadPreviousCharacter,
        isLoading,
        currentDate,
        monthlyDataAvailable,
        loadingError,
      }}
    >
      {children}
    </CharacterContext.Provider>
  )
}

export function useCharacter() {
  const context = useContext(CharacterContext)
  if (context === undefined) {
    throw new Error("useCharacter must be used within a CharacterProvider")
  }
  return context
}
