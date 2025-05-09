import { Card, CardContent } from "@/components/ui/card"
import type { Example } from "@/lib/character-data"

interface ExampleSentencesProps {
  examples: Example[]
}

export default function ExampleSentences({ examples }: ExampleSentencesProps) {
  return (
    <div className="space-y-4">
      {examples.map((example, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="mb-3">
              <div className="text-xl font-medium mb-1">{example.chinese}</div>
              <div className="text-sm text-slate-500 mb-2">{example.pinyin}</div>
              <div>{example.english}</div>
            </div>
            <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded">
              <span className="font-medium">Usage note:</span> {example.note}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
