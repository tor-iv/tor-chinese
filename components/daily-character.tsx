"use client"

import { useCharacter } from "./character-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RadicalBreakdown from "./radical-breakdown"
import ExampleSentences from "./example-sentences"
import LearningConnections from "./learning-connections"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { formatDate } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"
import { markCharacterAsReviewed } from "@/lib/character-data"
import CharacterWithRadicals from "./character-with-radicals"
import { useState } from "react"

export default function DailyCharacter() {
  const { currentCharacter, loadNextCharacter, loadPreviousCharacter, isLoading, currentDate } = useCharacter()
  const [showRadicals, setShowRadicals] = useState(false)

  const handleMarkAsReviewed = () => {
    if (currentCharacter) {
      markCharacterAsReviewed(currentCharacter.id, true)
      alert("Character marked as reviewed!")
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" size="sm" onClick={loadPreviousCharacter}>
          <ChevronLeft className="mr-1 h-4 w-4" /> Previous
        </Button>
        <h2 className="text-xl font-medium text-slate-700">{formatDate(currentDate)}</h2>
        <Button variant="outline" size="sm" onClick={loadNextCharacter}>
          Next <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <LoadingState />
      ) : !currentCharacter ? (
        <NoCharacterState />
      ) : (
        <>
          <Card className="mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-red-50 p-8 flex flex-col items-center justify-center">
                  <div className="text-9xl font-bold text-red-700 mb-4">{currentCharacter.character}</div>
                  <button
                    className="text-xs text-red-600 mb-2 underline"
                    onClick={() => setShowRadicals((prev) => !prev)}
                  >
                    {showRadicals ? "Hide Radicals" : "Show Radicals"}
                  </button>
                  {showRadicals && (
                    <div className="mb-4">
                      <CharacterWithRadicals character={currentCharacter} size="xl" />
                    </div>
                  )}
                  <div className="text-2xl font-medium text-red-600 mb-2">{currentCharacter.pinyin}</div>
                  <div className="text-xl text-slate-700">{currentCharacter.english}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-4">Character Details</h3>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                    <dt className="text-slate-500">Pinyin:</dt>
                    <dd className="font-medium">{currentCharacter.pinyin}</dd>

                    <dt className="text-slate-500">Meaning:</dt>
                    <dd>{currentCharacter.english}</dd>

                    <dt className="text-slate-500">Level:</dt>
                    <dd>{currentCharacter.level}</dd>

                    <dt className="text-slate-500">Strokes:</dt>
                    <dd>{currentCharacter.strokes}</dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="radicals" className="mb-8">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="radicals">Radical Breakdown</TabsTrigger>
              <TabsTrigger value="examples">Example Sentences</TabsTrigger>
              <TabsTrigger value="connections">Learning Connections</TabsTrigger>
            </TabsList>
            <TabsContent value="radicals" className="mt-4">
              <RadicalBreakdown character={currentCharacter} />
            </TabsContent>
            <TabsContent value="examples" className="mt-4">
              <ExampleSentences examples={currentCharacter.examples} />
            </TabsContent>
            <TabsContent value="connections" className="mt-4">
              <LearningConnections character={currentCharacter} />
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button className="bg-red-600 hover:bg-red-700" onClick={handleMarkAsReviewed}>
              Mark as Reviewed
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

function LoadingState() {
  return (
    <Card className="mb-8 overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-2">
          <div className="bg-red-50 p-8 flex flex-col items-center justify-center">
            <Skeleton className="h-32 w-32 rounded-md mb-4" />
            <Skeleton className="h-6 w-24 rounded-md mb-2" />
            <Skeleton className="h-6 w-32 rounded-md" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium mb-4">Character Details</h3>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
              <Skeleton className="h-4 w-full rounded-md" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function NoCharacterState() {
  return (
    <Card className="mb-8">
      <CardContent className="p-6 text-center">
        <h3 className="text-xl font-medium mb-2">No Character Available</h3>
        <p className="text-slate-500 mb-4">
          There is no character available for this date. Please try another date or contact the administrator.
        </p>
      </CardContent>
    </Card>
  )
}
