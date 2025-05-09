import { Card, CardContent } from "@/components/ui/card"
import type { Character, Radical } from "@/lib/character-data"
import CharacterWithRadicals from "./character-with-radicals"

interface RadicalBreakdownProps {
  character: Character
}

export default function RadicalBreakdown({ character }: RadicalBreakdownProps) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Radical Identification</h3>
            <div className="flex flex-col items-center mb-6">
              <CharacterWithRadicals character={character} size="lg" />
              <div className="grid grid-cols-2 gap-4 w-full mt-4">
                {character.radicals.map((radical, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: radical.color }}></div>
                    <span>
                      {radical.name} ({radical.symbol})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Radical Information</h3>
            <div className="space-y-4">
              {character.radicals.map((radical, index) => (
                <RadicalInfo key={index} radical={radical} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Radical Explanation</h3>
          <p className="mb-4">{character.radicalExplanation}</p>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Etymology</h4>
            <p>{character.etymology}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function RadicalInfo({ radical }: { radical: Radical }) {
  return (
    <div className="border rounded-lg p-3">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2 font-bold" style={{ color: radical.color }}>
          {radical.symbol}
        </span>
        <span className="font-medium">{radical.name}</span>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-x-2 text-sm">
        <span className="text-slate-500">Meaning:</span>
        <span>{radical.meaning}</span>

        <span className="text-slate-500">Pinyin:</span>
        <span>{radical.pinyin}</span>

        <span className="text-slate-500">Position:</span>
        <span>{radical.positionName}</span>
      </div>
    </div>
  )
}
