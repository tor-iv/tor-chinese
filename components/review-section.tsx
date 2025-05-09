"use client"

import { useCharacter } from "./character-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"
import { useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function ReviewSection() {
  const { reviewCharacters, markAsReviewed } = useCharacter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (reviewCharacters.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium mb-2">No characters to review!</h3>
        <p className="text-slate-500 mb-4">You've completed all your reviews for today.</p>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          Back to Today's Character
        </Button>
      </div>
    )
  }

  const currentReview = reviewCharacters[currentIndex]

  const handleNext = async (remembered: boolean) => {
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      // Update in local storage and state
      markAsReviewed(currentReview.id, remembered)

      if (currentIndex < reviewCharacters.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        // End of review
        setCurrentIndex(0)
      }

      setShowAnswer(false)
    } catch (error) {
      console.error("Error marking character as reviewed:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!currentReview) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="mb-6">
          <CardContent className="p-6 text-center">
            <Skeleton className="h-32 w-32 mx-auto rounded-md mb-4" />
            <Skeleton className="h-6 w-24 mx-auto rounded-md mb-2" />
            <Skeleton className="h-6 w-32 mx-auto rounded-md" />
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Review Characters</h2>
        <p className="text-slate-500">
          {currentIndex + 1} of {reviewCharacters.length} characters to review
        </p>
      </div>

      <Card className="mb-6">
        <CardContent className="p-6 text-center">
          <div className="text-8xl font-bold mb-4">{currentReview.character}</div>

          {showAnswer ? (
            <div className="space-y-2">
              <div className="text-2xl font-medium">{currentReview.pinyin}</div>
              <div className="text-xl">{currentReview.english}</div>
            </div>
          ) : (
            <Button onClick={() => setShowAnswer(true)}>Show Answer</Button>
          )}
        </CardContent>
      </Card>

      {showAnswer && (
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
            onClick={() => handleNext(false)}
            disabled={isSubmitting}
          >
            <XCircle className="h-5 w-5 text-red-500" />
            Didn't Remember
          </Button>
          <Button
            size="lg"
            className="flex items-center gap-2"
            onClick={() => handleNext(true)}
            disabled={isSubmitting}
          >
            <CheckCircle className="h-5 w-5" />
            Remembered
          </Button>
        </div>
      )}
    </div>
  )
}
