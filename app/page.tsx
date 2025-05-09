import DailyCharacter from "@/components/daily-character"
import { CharacterProvider } from "@/components/character-context"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">
            每日汉字 <span className="text-slate-600 text-lg font-normal">Daily Chinese</span>
          </h1>
          <nav className="flex gap-4">
            <a href="/" className="text-red-600 font-medium">
              Today
            </a>
            <a href="/review" className="text-slate-600 hover:text-red-600 transition-colors">
              Review
            </a>
            <a href="/progress" className="text-slate-600 hover:text-red-600 transition-colors">
              Progress
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CharacterProvider>
          <DailyCharacter />
        </CharacterProvider>
      </main>
      <footer className="bg-white border-t border-slate-200 py-4">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Daily Chinese Learning App
        </div>
      </footer>
    </div>
  )
}
