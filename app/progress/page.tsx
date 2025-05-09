"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { getUserProgressStats } from "@/lib/character-data"
import { useEffect, useState } from "react"

export default function ProgressPage() {
  const [stats, setStats] = useState<ReturnType<typeof getUserProgressStats> | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const userStats = getUserProgressStats()
      setStats(userStats)
    } catch (error) {
      console.error("Error fetching progress stats:", error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">
            每日汉字 <span className="text-slate-600 text-lg font-normal">Daily Chinese</span>
          </h1>
          <nav className="flex gap-4">
            <a href="/" className="text-slate-600 hover:text-red-600 transition-colors">
              Today
            </a>
            <a href="/review" className="text-slate-600 hover:text-red-600 transition-colors">
              Review
            </a>
            <a href="/progress" className="text-red-600 font-medium">
              Progress
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Your Learning Progress</h2>

        {isLoading || !stats ? (
          <ProgressSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Characters Learned</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-2">
                    {stats.charactersLearned} / {stats.totalCharacters}
                  </div>
                  <Progress value={(stats.charactersLearned / stats.totalCharacters) * 100} className="h-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Current Streak</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.streakDays} days</div>
                  <p className="text-sm text-slate-500">Keep it going!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Review Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stats.reviewAccuracy}%</div>
                  <Progress value={stats.reviewAccuracy} className="h-2" />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Character Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Mastered</span>
                        <span>{stats.masteredCharacters}</span>
                      </div>
                      <Progress value={(stats.masteredCharacters / stats.totalCharacters) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Reviewing</span>
                        <span>{stats.reviewingCharacters}</span>
                      </div>
                      <Progress value={(stats.reviewingCharacters / stats.totalCharacters) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Learning</span>
                        <span>{stats.learningCharacters}</span>
                      </div>
                      <Progress value={(stats.learningCharacters / stats.totalCharacters) * 100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Not Started</span>
                        <span>{stats.totalCharacters - stats.charactersLearned}</span>
                      </div>
                      <Progress
                        value={((stats.totalCharacters - stats.charactersLearned) / stats.totalCharacters) * 100}
                        className="h-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Learning Insights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>You're making excellent progress with water-related characters.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>Characters with the "heart" radical need more review.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>
                        You've mastered {Math.round((stats.masteredCharacters / stats.totalCharacters) * 100)}% of all
                        characters!
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                      <span>
                        Your longest streak is {stats.longestStreak} days.{" "}
                        {stats.streakDays >= stats.longestStreak ? "You're at your best!" : `Can you beat it?`}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </main>
      <footer className="bg-white border-t border-slate-200 py-4">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Daily Chinese Learning App
        </div>
      </footer>
    </div>
  )
}

function ProgressSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-24 mb-2" />
              <Skeleton className="h-2 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <Skeleton className="h-2 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-2">
                  <Skeleton className="w-2 h-2 rounded-full mt-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
