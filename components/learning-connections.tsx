import { Card, CardContent } from "@/components/ui/card"
import type { Character } from "@/lib/character-data"

interface LearningConnectionsProps {
  character: Character
}

export default function LearningConnections({ character }: LearningConnectionsProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Related Characters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {character.relatedCharacters.map((related, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-1">{related.character}</div>
                <div className="text-sm">{related.pinyin}</div>
                <div className="text-sm text-slate-500">{related.english}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Memory Aids</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Visual Mnemonic</h4>
              <div className="flex items-center">
                <div className="w-24 h-24 bg-slate-200 rounded-lg mr-4 flex items-center justify-center">
                  <span className="text-4xl">{character.character}</span>
                </div>
                <p>{character.mnemonic}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Radical-based Memory Aid</h4>
              <p>{character.radicalMnemonic}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-medium mb-4">Common Words</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {character.commonWords.map((word, index) => (
              <div key={index} className="border rounded p-3">
                <div className="text-lg font-medium mb-1">{word.chinese}</div>
                <div className="text-sm text-slate-500 mb-1">{word.pinyin}</div>
                <div className="text-sm">{word.english}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
