import type { Character } from "@/lib/character-data"

interface CharacterWithRadicalsProps {
  character: Character
  size?: "sm" | "md" | "lg" | "xl"
}

export default function CharacterWithRadicals({ character, size = "lg" }: CharacterWithRadicalsProps) {
  // Size classes for different sizes
  const sizeClasses = {
    sm: "text-3xl w-16 h-16",
    md: "text-4xl w-20 h-20",
    lg: "text-6xl w-24 h-24",
    xl: "text-8xl w-32 h-32",
  }

  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
      <span className="absolute opacity-20">{character.character}</span>
      {character.radicals.map((radical, index) => (
        <span
          key={index}
          className="absolute"
          style={{
            color: radical.color,
            top: `${radical.position.top - 10}%`,
            left: `${radical.position.left - 10}%`,
            zIndex: 10,
          }}
        >
          {radical.symbol}
        </span>
      ))}
    </div>
  )
}
