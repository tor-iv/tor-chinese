"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { getCharacterForDate, getReviewCharacters, markCharacterAsReviewed, type Character } from "@/lib/character-data"
import { getCurrentMonthCharacters } from "@/lib/character-loader"

type CharacterContextType = {
  currentCharacter: Character | null
  reviewCharacters: Character[]
  monthlyCharacters: Character[]
  markAsReviewed: (id: string, remembered: boolean) => void
  loadNextCharacter: () => void
  loadPreviousCharacter: () => void
  isLoading: boolean
  currentDate: Date
}

const CharacterContext = createContext<CharacterContextType | undefined>(undefined)

export function CharacterProvider({ children }: { children: ReactNode }) {
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null)
  const [reviewCharacters, setReviewCharacters] = useState<Character[]>([])
  const [monthlyCharacters, setMonthlyCharacters] = useState<Character[]>([])
  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [isLoading, setIsLoading] = useState(true)

  // Load the character for the current date
  useEffect(() => {
    setIsLoading(true)
    try {
      const character = getCharacterForDate(currentDate)
      setCurrentCharacter(character)
    } catch (error) {
      console.error("Error loading character:", error)
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

  // Load monthly characters
  useEffect(() => {
    try {
      const characters = getCurrentMonthCharacters()
      setMonthlyCharacters(characters)
    } catch (error) {
      console.error("Error loading monthly characters:", error)
    }
  }, [])

  const markAsReviewed = (id: string, remembered: boolean) => {
    // Update in local storage
    markCharacterAsReviewed(id, remembered)

    // Update local state if the character was remembered
    if (remembered) {
      setReviewCharacters((prev) => prev.filter((char) => char.id !== id))
    }
  }

  const loadNextCharacter = () => {
    const nextDate = new Date(currentDate)
    nextDate.setDate(nextDate.getDate() + 1)
    setCurrentDate(nextDate)
  }

  const loadPreviousCharacter = () => {
    const prevDate = new Date(currentDate)
    prevDate.setDate(prevDate.getDate() - 1)
    setCurrentDate(prevDate)
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
