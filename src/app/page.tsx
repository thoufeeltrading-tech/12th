'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  BookOpen, Trophy, Star, CheckCircle, Play, ArrowRight, 
  Target, Brain, ChevronRight, ChevronDown, X, RotateCcw,
  GraduationCap, Medal, Zap, Flame, Layers,
  Lightbulb, ChevronLeft, Shuffle, Lock, Menu, Home,
  Award, Crown, Rocket, Sparkles, Heart, Globe,
  Database, Code, Cpu, FileCode, BarChart3, Settings
} from 'lucide-react'
import { lessons, units, unitQuizzes, finalExamQuestions, type Lesson, type QuizQuestion, type SubTopic } from '@/data/courseData'

// Python 100 Flashcards Data
const pythonFlashcards = [
  // Basic Functions (1-15)
  { id: 1, term: 'print()', definition: 'displays output to the console', category: 'Basic Functions' },
  { id: 2, term: 'input()', definition: 'reads input from the user', category: 'Basic Functions' },
  { id: 3, term: 'len()', definition: 'returns the length of an object', category: 'Basic Functions' },
  { id: 4, term: 'type()', definition: 'returns the data type of an object', category: 'Basic Functions' },
  { id: 5, term: 'int()', definition: 'converts a value to integer', category: 'Basic Functions' },
  { id: 6, term: 'float()', definition: 'converts a value to floating point number', category: 'Basic Functions' },
  { id: 7, term: 'str()', definition: 'converts a value to string', category: 'Basic Functions' },
  { id: 8, term: 'bool()', definition: 'converts a value to boolean (True/False)', category: 'Basic Functions' },
  { id: 9, term: 'abs()', definition: 'returns the absolute value of a number', category: 'Basic Functions' },
  { id: 10, term: 'round()', definition: 'rounds a number to specified decimal places', category: 'Basic Functions' },
  { id: 11, term: 'max()', definition: 'returns the largest value from iterable', category: 'Basic Functions' },
  { id: 12, term: 'min()', definition: 'returns the smallest value from iterable', category: 'Basic Functions' },
  { id: 13, term: 'sum()', definition: 'sums all elements in an iterable', category: 'Basic Functions' },
  { id: 14, term: 'pow()', definition: 'calculates x raised to power y', category: 'Basic Functions' },
  { id: 15, term: 'sorted()', definition: 'returns a new sorted list from iterable', category: 'Basic Functions' },
  // Control Statements (16-30)
  { id: 16, term: 'if', definition: 'conditional statement to check a condition', category: 'Control Statements' },
  { id: 17, term: 'elif', definition: 'else if - additional condition check', category: 'Control Statements' },
  { id: 18, term: 'else', definition: 'default block when if condition is False', category: 'Control Statements' },
  { id: 19, term: 'for', definition: 'loop that iterates over a sequence', category: 'Control Statements' },
  { id: 20, term: 'while', definition: 'loop that runs while condition is True', category: 'Control Statements' },
  { id: 21, term: 'break', definition: 'exits the loop immediately', category: 'Control Statements' },
  { id: 22, term: 'continue', definition: 'skips current iteration, continues to next', category: 'Control Statements' },
  { id: 23, term: 'pass', definition: 'null statement, does nothing (placeholder)', category: 'Control Statements' },
  { id: 24, term: 'range()', definition: 'generates a sequence of numbers', category: 'Control Statements' },
  { id: 25, term: 'enumerate()', definition: 'returns index and value pairs from iterable', category: 'Control Statements' },
  { id: 26, term: 'zip()', definition: 'combines multiple iterables element-wise', category: 'Control Statements' },
  { id: 27, term: 'filter()', definition: 'filters elements based on condition', category: 'Control Statements' },
  { id: 28, term: 'map()', definition: 'applies function to all elements', category: 'Control Statements' },
  { id: 29, term: 'all()', definition: 'returns True if all elements are True', category: 'Control Statements' },
  { id: 30, term: 'any()', definition: 'returns True if any element is True', category: 'Control Statements' },
  // Data Types & Structures (31-45)
  { id: 31, term: 'list', definition: 'ordered, mutable collection using []', category: 'Data Structures' },
  { id: 32, term: 'tuple', definition: 'ordered, immutable collection using ()', category: 'Data Structures' },
  { id: 33, term: 'set', definition: 'unordered collection of unique elements', category: 'Data Structures' },
  { id: 34, term: 'dict', definition: 'key-value pair collection using {}', category: 'Data Structures' },
  { id: 35, term: 'append()', definition: 'adds element to end of list', category: 'Data Structures' },
  { id: 36, term: 'insert()', definition: 'inserts element at specified index', category: 'Data Structures' },
  { id: 37, term: 'remove()', definition: 'removes first occurrence of value', category: 'Data Structures' },
  { id: 38, term: 'pop()', definition: 'removes and returns element at index', category: 'Data Structures' },
  { id: 39, term: 'clear()', definition: 'removes all elements from collection', category: 'Data Structures' },
  { id: 40, term: 'index()', definition: 'returns index of first occurrence', category: 'Data Structures' },
  { id: 41, term: 'count()', definition: 'counts occurrences of value', category: 'Data Structures' },
  { id: 42, term: 'sort()', definition: 'sorts list in place', category: 'Data Structures' },
  { id: 43, term: 'reverse()', definition: 'reverses list in place', category: 'Data Structures' },
  { id: 44, term: 'copy()', definition: 'creates a shallow copy', category: 'Data Structures' },
  { id: 45, term: 'update()', definition: 'updates dictionary with key-value pairs', category: 'Data Structures' },
  // Strings (46-60)
  { id: 46, term: 'lower()', definition: 'converts string to lowercase', category: 'Strings' },
  { id: 47, term: 'upper()', definition: 'converts string to uppercase', category: 'Strings' },
  { id: 48, term: 'title()', definition: 'capitalizes first letter of each word', category: 'Strings' },
  { id: 49, term: 'strip()', definition: 'removes leading and trailing whitespace', category: 'Strings' },
  { id: 50, term: 'replace()', definition: 'replaces occurrences of substring', category: 'Strings' },
  { id: 51, term: 'split()', definition: 'splits string into list by delimiter', category: 'Strings' },
  { id: 52, term: 'join()', definition: 'joins list elements into string', category: 'Strings' },
  { id: 53, term: 'find()', definition: 'returns index of substring or -1', category: 'Strings' },
  { id: 54, term: 'startswith()', definition: 'checks if string starts with prefix', category: 'Strings' },
  { id: 55, term: 'endswith()', definition: 'checks if string ends with suffix', category: 'Strings' },
  { id: 56, term: 'isdigit()', definition: 'checks if all characters are digits', category: 'Strings' },
  { id: 57, term: 'isalpha()', definition: 'checks if all characters are letters', category: 'Strings' },
  { id: 58, term: 'isalnum()', definition: 'checks if all characters are alphanumeric', category: 'Strings' },
  { id: 59, term: 'format()', definition: 'formats string with placeholders', category: 'Strings' },
  { id: 60, term: 'f-string', definition: 'formatted string literal: f"{variable}"', category: 'Strings' },
  // Functions & Modules (61-75)
  { id: 61, term: 'def', definition: 'keyword to define a function', category: 'Functions & Modules' },
  { id: 62, term: 'return', definition: 'returns value from function', category: 'Functions & Modules' },
  { id: 63, term: 'lambda', definition: 'anonymous inline function', category: 'Functions & Modules' },
  { id: 64, term: 'import', definition: 'imports a module', category: 'Functions & Modules' },
  { id: 65, term: 'from', definition: 'imports specific items from module', category: 'Functions & Modules' },
  { id: 66, term: 'as', definition: 'creates alias for module or item', category: 'Functions & Modules' },
  { id: 67, term: 'dir()', definition: 'lists attributes of an object', category: 'Functions & Modules' },
  { id: 68, term: 'help()', definition: 'displays documentation for object', category: 'Functions & Modules' },
  { id: 69, term: 'globals()', definition: 'returns dictionary of global variables', category: 'Functions & Modules' },
  { id: 70, term: 'locals()', definition: 'returns dictionary of local variables', category: 'Functions & Modules' },
  { id: 71, term: 'callable()', definition: 'checks if object is callable', category: 'Functions & Modules' },
  { id: 72, term: 'del', definition: 'deletes a variable or object', category: 'Functions & Modules' },
  { id: 73, term: 'id()', definition: 'returns unique identity (memory address)', category: 'Functions & Modules' },
  { id: 74, term: 'is', definition: 'identity operator - checks same object', category: 'Functions & Modules' },
  { id: 75, term: 'in', definition: 'membership operator - checks existence', category: 'Functions & Modules' },
  // Operators & Logic (76-90)
  { id: 76, term: '+', definition: 'addition or string/list concatenation', category: 'Operators' },
  { id: 77, term: '-', definition: 'subtraction', category: 'Operators' },
  { id: 78, term: '*', definition: 'multiplication or repetition', category: 'Operators' },
  { id: 79, term: '/', definition: 'division (returns float)', category: 'Operators' },
  { id: 80, term: '//', definition: 'floor division (returns int)', category: 'Operators' },
  { id: 81, term: '%', definition: 'modulus - remainder of division', category: 'Operators' },
  { id: 82, term: '**', definition: 'exponentiation (power)', category: 'Operators' },
  { id: 83, term: '==', definition: 'equality comparison', category: 'Operators' },
  { id: 84, term: '!=', definition: 'not equal to', category: 'Operators' },
  { id: 85, term: '>', definition: 'greater than', category: 'Operators' },
  { id: 86, term: '<', definition: 'less than', category: 'Operators' },
  { id: 87, term: '>=', definition: 'greater than or equal to', category: 'Operators' },
  { id: 88, term: '<=', definition: 'less than or equal to', category: 'Operators' },
  { id: 89, term: 'and', definition: 'logical AND - both must be True', category: 'Operators' },
  { id: 90, term: 'or', definition: 'logical OR - either must be True', category: 'Operators' },
  // File Handling & Others (91-100)
  { id: 91, term: 'open()', definition: 'opens a file for reading/writing', category: 'File Handling' },
  { id: 92, term: 'read()', definition: 'reads content from file', category: 'File Handling' },
  { id: 93, term: 'write()', definition: 'writes content to file', category: 'File Handling' },
  { id: 94, term: 'close()', definition: 'closes the file', category: 'File Handling' },
  { id: 95, term: 'with', definition: 'context manager - auto-closes file', category: 'File Handling' },
  { id: 96, term: 'try', definition: 'block to test for exceptions', category: 'File Handling' },
  { id: 97, term: 'except', definition: 'block to handle exceptions', category: 'File Handling' },
  { id: 98, term: 'finally', definition: 'block that always executes', category: 'File Handling' },
  { id: 99, term: 'raise', definition: 'raises an exception manually', category: 'File Handling' },
  { id: 100, term: 'assert', definition: 'debugging assertion check', category: 'File Handling' },
]

// Types
type ViewState = 'home' | 'units' | 'lesson' | 'quiz' | 'results' | 'flashcards' | 'badges'

interface UserProgress {
  completedLessons: number[]
  completedUnits: number[]
  xp: number
  streak: number
  lastActive: string
  lessonQuizScores: { [lessonId: number]: number }
  unitQuizScores: { [unitId: number]: number }
  finalExamScore: number | null
  badges: string[]
  flashcardProgress: { [id: number]: boolean }
  flashcardQuizScore: number | null
}

const defaultProgress: UserProgress = {
  completedLessons: [],
  completedUnits: [],
  xp: 0,
  streak: 0,
  lastActive: new Date().toISOString(),
  lessonQuizScores: {},
  unitQuizScores: {},
  finalExamScore: null,
  badges: [],
  flashcardProgress: {},
  flashcardQuizScore: null
}

// Badge definitions with beautiful images/icons
const allBadges = [
  { 
    id: 'first_lesson', 
    name: 'First Steps', 
    icon: Rocket, 
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    description: 'Complete your first lesson' 
  },
  { 
    id: 'unit1_complete', 
    name: 'Problem Solver', 
    icon: Brain, 
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
    description: 'Complete Unit 1 - Problem Solving' 
  },
  { 
    id: 'unit2_complete', 
    name: 'Python Pro', 
    icon: Code, 
    color: 'from-green-400 to-green-600',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    description: 'Complete Unit 2 - Core Python' 
  },
  { 
    id: 'unit3_complete', 
    name: 'OOP Master', 
    icon: Cpu, 
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-600',
    description: 'Complete Unit 3 - OOPS' 
  },
  { 
    id: 'unit4_complete', 
    name: 'Data Wizard', 
    icon: Database, 
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    description: 'Complete Unit 4 - Database' 
  },
  { 
    id: 'unit5_complete', 
    name: 'Integration Expert', 
    icon: Globe, 
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    description: 'Complete Unit 5 - Integration' 
  },
  { 
    id: 'all_units', 
    name: 'Scholar', 
    icon: GraduationCap, 
    color: 'from-yellow-400 to-yellow-600',
    bgColor: 'bg-yellow-50',
    textColor: 'text-yellow-600',
    description: 'Complete all 5 units' 
  },
  { 
    id: 'final_exam', 
    name: 'Graduate', 
    icon: Award, 
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    description: 'Pass the final exam' 
  },
  { 
    id: 'perfect_quiz', 
    name: 'Perfectionist', 
    icon: Star, 
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    description: 'Get 100% on any quiz' 
  },
  { 
    id: 'streak_3', 
    name: 'On Fire', 
    icon: Flame, 
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-600',
    description: '3-day learning streak' 
  },
  { 
    id: 'xp_500', 
    name: 'Rising Star', 
    icon: Sparkles, 
    color: 'from-violet-400 to-violet-600',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    description: 'Earn 500 XP' 
  },
  { 
    id: 'xp_1000', 
    name: 'Champion', 
    icon: Crown, 
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    description: 'Earn 1000 XP' 
  },
  { 
    id: 'flashcards_50', 
    name: 'Quick Learner', 
    icon: Lightbulb, 
    color: 'from-teal-400 to-teal-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    description: 'Learn 50 flashcards' 
  },
  { 
    id: 'flashcards_100', 
    name: 'Encyclopedia', 
    icon: BookOpen, 
    color: 'from-slate-400 to-slate-600',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-600',
    description: 'Learn all 100 flashcards' 
  },
  { 
    id: 'flashcard_quiz', 
    name: 'Memory Master', 
    icon: Heart, 
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    description: 'Pass flashcard quiz' 
  },
]

// Helper function to calculate badges
function calculateBadges(progress: UserProgress): string[] {
  const badges = [...progress.badges]
  
  if (progress.completedLessons.length >= 1 && !badges.includes('first_lesson')) badges.push('first_lesson')
  if (progress.completedUnits.includes(1) && !badges.includes('unit1_complete')) badges.push('unit1_complete')
  if (progress.completedUnits.includes(2) && !badges.includes('unit2_complete')) badges.push('unit2_complete')
  if (progress.completedUnits.includes(3) && !badges.includes('unit3_complete')) badges.push('unit3_complete')
  if (progress.completedUnits.includes(4) && !badges.includes('unit4_complete')) badges.push('unit4_complete')
  if (progress.completedUnits.includes(5) && !badges.includes('unit5_complete')) badges.push('unit5_complete')
  if (progress.completedUnits.length === 5 && !badges.includes('all_units')) badges.push('all_units')
  if (progress.finalExamScore !== null && progress.finalExamScore >= 50 && !badges.includes('final_exam')) badges.push('final_exam')
  if (progress.streak >= 3 && !badges.includes('streak_3')) badges.push('streak_3')
  if (progress.xp >= 500 && !badges.includes('xp_500')) badges.push('xp_500')
  if (progress.xp >= 1000 && !badges.includes('xp_1000')) badges.push('xp_1000')
  const learnedCount = Object.keys(progress.flashcardProgress).filter(k => progress.flashcardProgress[Number(k)]).length
  if (learnedCount >= 50 && !badges.includes('flashcards_50')) badges.push('flashcards_50')
  if (learnedCount >= 100 && !badges.includes('flashcards_100')) badges.push('flashcards_100')
  if (progress.flashcardQuizScore !== null && progress.flashcardQuizScore >= 60 && !badges.includes('flashcard_quiz')) badges.push('flashcard_quiz')
  
  return badges
}

// Badge Card Component
function BadgeCard({ badge, earned }: { badge: typeof allBadges[0]; earned: boolean }) {
  const Icon = badge.icon
  return (
    <div className={`relative p-4 rounded-xl border-2 transition-all ${
      earned 
        ? `${badge.bgColor} border-current ${badge.textColor}` 
        : 'bg-gray-50 border-gray-200 text-gray-400'
    }`}>
      <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
        earned 
          ? `bg-gradient-to-br ${badge.color} shadow-lg` 
          : 'bg-gray-200'
      }`}>
        <Icon className={`w-8 h-8 ${earned ? 'text-white' : 'text-gray-400'}`} />
      </div>
      <h4 className="font-bold text-center text-sm mb-1">{badge.name}</h4>
      <p className="text-xs text-center opacity-75">{badge.description}</p>
      {!earned && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60 rounded-xl">
          <Lock className="w-6 h-6 text-gray-400" />
        </div>
      )}
    </div>
  )
}

// Simple Code Block Component - Clean and Easy to Read
function CodeBlock({ code, language = 'python' }: { code: string; language?: string }) {
  const lines = code.trim().split('\n')
  
  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-300 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          <span className="text-xs text-gray-600 font-medium ml-2 uppercase">{language}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          onClick={() => navigator.clipboard.writeText(code)}
        >
          📋 Copy
        </Button>
      </div>
      
      {/* Code - Simple and Clean */}
      <div className="overflow-x-auto bg-gray-50">
        <pre className="p-4 text-sm leading-7">
          <code className="font-mono text-gray-800">
            {lines.map((line, i) => (
              <div key={i} className="flex hover:bg-gray-100">
                <span className="select-none text-gray-400 w-8 text-right pr-4 flex-shrink-0">
                  {i + 1}
                </span>
                <span className="flex-1 whitespace-pre">{line || ' '}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}

// Key Point Card Component
function KeyPointCard({ point, index }: { point: string; index: number }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
        {index + 1}
      </div>
      <p className="text-gray-700 text-base leading-relaxed">{point}</p>
    </div>
  )
}

export default function LearningPortal() {
  const [view, setView] = useState<ViewState>('home')
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0)
  const [currentSubtopicIndex, setCurrentSubtopicIndex] = useState(0)
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cs_learning_progress')
      if (saved) return { ...defaultProgress, ...JSON.parse(saved) }
    }
    return defaultProgress
  })
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizScore, setQuizScore] = useState(0)
  const [quizType, setQuizType] = useState<'lesson' | 'unit' | 'final' | 'flashcard'>('lesson')
  const [quizUnitId, setQuizUnitId] = useState<number | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set())
  
  // Flashcard states
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0)
  const [showDefinition, setShowDefinition] = useState(false)
  const [flashcardCategory, setFlashcardCategory] = useState<string | null>(null)
  const [shuffledFlashcards, setShuffledFlashcards] = useState<typeof pythonFlashcards>([])

  // Save progress to localStorage
  useEffect(() => {
    const updatedBadges = calculateBadges(progress)
    localStorage.setItem('cs_learning_progress', JSON.stringify({
      ...progress,
      lastActive: new Date().toISOString(),
      badges: updatedBadges
    }))
  }, [progress])

  const completeLesson = useCallback((lessonId: number, score: number) => {
    setProgress(p => {
      if (p.completedLessons.includes(lessonId)) {
        if (score === 100 && !p.badges.includes('perfect_quiz')) {
          return { ...p, badges: [...p.badges, 'perfect_quiz'] }
        }
        return p
      }
      
      const newCompletedLessons = [...p.completedLessons, lessonId]
      const lesson = lessons.find(l => l.id === lessonId)
      let newCompletedUnits = p.completedUnits
      
      if (lesson) {
        const unitLessons = lessons.filter(l => l.unitId === lesson.unitId)
        const completedInUnit = unitLessons.filter(l => newCompletedLessons.includes(l.id))
        if (completedInUnit.length === unitLessons.length && !p.completedUnits.includes(lesson.unitId)) {
          newCompletedUnits = [...p.completedUnits, lesson.unitId]
        }
      }
      
      return {
        ...p,
        completedLessons: newCompletedLessons,
        completedUnits: newCompletedUnits,
        lessonQuizScores: { ...p.lessonQuizScores, [lessonId]: score },
        xp: p.xp + 50,
        badges: score === 100 ? [...p.badges, 'perfect_quiz'] : p.badges
      }
    })
  }, [])

  const startLesson = useCallback((lesson: Lesson) => {
    setSelectedLesson(lesson)
    setCurrentTopicIndex(0)
    setCurrentSubtopicIndex(0)
    setExpandedTopics(new Set([lesson.topics[0]?.id]))
    setView('lesson')
  }, [])

  const startQuiz = useCallback((questions: QuizQuestion[], type: 'lesson' | 'unit' | 'final' | 'flashcard', unitId?: number) => {
    setQuizQuestions(questions)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setQuizScore(0)
    setQuizType(type)
    setQuizUnitId(unitId ?? null)
    setView('quiz')
  }, [])

  const handleAnswer = useCallback((answerIndex: number) => {
    if (showExplanation) return
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    if (answerIndex === quizQuestions[currentQuestionIndex].correctAnswer) {
      setQuizScore(s => s + 1)
    }
  }, [showExplanation, quizQuestions, currentQuestionIndex])

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      const finalScore = Math.round((quizScore / quizQuestions.length) * 100)
      
      if (quizType === 'lesson' && selectedLesson) {
        completeLesson(selectedLesson.id, finalScore)
      } else if (quizType === 'unit' && quizUnitId) {
        setProgress(p => ({
          ...p,
          unitQuizScores: { ...p.unitQuizScores, [quizUnitId]: finalScore },
          xp: p.xp + 75
        }))
      } else if (quizType === 'final') {
        setProgress(p => ({ ...p, finalExamScore: finalScore, xp: p.xp + 200 }))
      } else if (quizType === 'flashcard') {
        setProgress(p => ({ ...p, flashcardQuizScore: finalScore, xp: p.xp + 100 }))
      }
      
      if (finalScore >= 60) {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      }
      
      setView('results')
    }
  }, [currentQuestionIndex, quizQuestions.length, quizScore, quizType, selectedLesson, quizUnitId, completeLesson])

  const nextTopic = useCallback(() => {
    if (!selectedLesson) return
    const currentTopic = selectedLesson.topics[currentTopicIndex]
    if (currentSubtopicIndex < currentTopic.subtopics.length - 1) {
      setCurrentSubtopicIndex(i => i + 1)
    } else if (currentTopicIndex < selectedLesson.topics.length - 1) {
      setCurrentTopicIndex(i => i + 1)
      setCurrentSubtopicIndex(0)
    }
  }, [selectedLesson, currentTopicIndex, currentSubtopicIndex])

  const prevTopic = useCallback(() => {
    if (currentSubtopicIndex > 0) {
      setCurrentSubtopicIndex(i => i - 1)
    } else if (currentTopicIndex > 0) {
      setCurrentTopicIndex(i => i - 1)
      const prevTopic = selectedLesson?.topics[currentTopicIndex - 1]
      if (prevTopic) setCurrentSubtopicIndex(prevTopic.subtopics.length - 1)
    }
  }, [currentSubtopicIndex, currentTopicIndex, selectedLesson])

  const canTakeUnitQuiz = useCallback((unitId: number) => {
    const unitLessons = lessons.filter(l => l.unitId === unitId)
    return unitLessons.every(l => progress.completedLessons.includes(l.id))
  }, [progress.completedLessons])

  const canTakeFinalExam = useCallback(() => progress.completedUnits.length === 5, [progress.completedUnits])

  const getTotalProgress = () => Math.round((progress.completedLessons.length / 16) * 100)
  const getFlashcardProgress = () => {
    const learned = Object.keys(progress.flashcardProgress).filter(k => progress.flashcardProgress[Number(k)]).length
    return Math.round((learned / 100) * 100)
  }

  // Flashcard functions
  const getFilteredFlashcards = useCallback(() => {
    if (flashcardCategory) return pythonFlashcards.filter(f => f.category === flashcardCategory)
    return shuffledFlashcards.length > 0 ? shuffledFlashcards : pythonFlashcards
  }, [flashcardCategory, shuffledFlashcards])

  const shuffleFlashcards = useCallback(() => {
    const shuffled = [...pythonFlashcards].sort(() => Math.random() - 0.5)
    setShuffledFlashcards(shuffled)
    setCurrentFlashcardIndex(0)
    setShowDefinition(false)
  }, [])

  const markFlashcardLearned = useCallback((id: number) => {
    setProgress(p => ({
      ...p,
      flashcardProgress: { ...p.flashcardProgress, [id]: true },
      xp: p.xp + 1
    }))
  }, [])

  const nextFlashcard = useCallback(() => {
    const cards = getFilteredFlashcards()
    if (currentFlashcardIndex < cards.length - 1) {
      setCurrentFlashcardIndex(i => i + 1)
      setShowDefinition(false)
    }
  }, [currentFlashcardIndex, getFilteredFlashcards])

  const prevFlashcard = useCallback(() => {
    if (currentFlashcardIndex > 0) {
      setCurrentFlashcardIndex(i => i - 1)
      setShowDefinition(false)
    }
  }, [currentFlashcardIndex])

  const generateFlashcardQuiz = useCallback(() => {
    const selectedCards = [...pythonFlashcards].sort(() => Math.random() - 0.5).slice(0, 20)
    const questions: QuizQuestion[] = selectedCards.map(card => {
      const wrongDefs = pythonFlashcards.filter(f => f.id !== card.id).sort(() => Math.random() - 0.5).slice(0, 3).map(f => f.definition)
      const options = [card.definition, ...wrongDefs].sort(() => Math.random() - 0.5)
      return {
        id: `fc_${card.id}`,
        question: `What does ${card.term} do in Python?`,
        options,
        correctAnswer: options.indexOf(card.definition),
        explanation: `${card.term}: ${card.definition}`
      }
    })
    startQuiz(questions, 'flashcard')
  }, [startQuiz])

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => {
      const newSet = new Set(prev)
      if (newSet.has(topicId)) newSet.delete(topicId)
      else newSet.add(topicId)
      return newSet
    })
  }

  // Confetti component
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        >
          <span className="text-2xl">{['*', '+', '#', '@', '&', '%'][Math.floor(Math.random() * 6)]}</span>
        </div>
      ))}
    </div>
  )

  // BADGES VIEW
  const renderBadges = () => (
    <div className="min-h-screen bg-gray-50">
      {showConfetti && <Confetti />}
      
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <Button variant="ghost" onClick={() => setView('home')} className="text-gray-600">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-lg font-bold text-gray-800">My Badges</h1>
          <div className="w-20"></div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-4">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">{progress.badges.length} / {allBadges.length} Badges Earned</span>
          </div>
          <Progress value={(progress.badges.length / allBadges.length) * 100} className="h-3 max-w-md mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allBadges.map(badge => (
            <BadgeCard key={badge.id} badge={badge} earned={progress.badges.includes(badge.id)} />
          ))}
        </div>
      </main>
    </div>
  )

  // FLASHCARDS VIEW
  const renderFlashcards = () => {
    const categories = [...new Set(pythonFlashcards.map(f => f.category))]
    const cards = getFilteredFlashcards()
    const currentCard = cards[currentFlashcardIndex]
    const learnedCount = Object.keys(progress.flashcardProgress).filter(k => progress.flashcardProgress[Number(k)]).length

    return (
      <div className="min-h-screen bg-gray-50">
        {showConfetti && <Confetti />}
        
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <Button variant="ghost" onClick={() => setView('home')} className="text-gray-600">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100">
                {learnedCount}/100 Learned
              </Badge>
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                {progress.xp} XP
              </Badge>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Python 100 Flashcards</h2>
            <p className="text-gray-600 mb-4">Master essential Python functions, statements, and operators</p>
            <Progress value={getFlashcardProgress()} className="h-2 max-w-md mx-auto" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <Button 
              variant={flashcardCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => { setFlashcardCategory(null); setCurrentFlashcardIndex(0) }}
              className={flashcardCategory === null ? "bg-blue-600 hover:bg-blue-700" : ""}
            >
              All (100)
            </Button>
            {categories.map(cat => {
              const count = pythonFlashcards.filter(f => f.category === cat).length
              return (
                <Button
                  key={cat}
                  variant={flashcardCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => { setFlashcardCategory(cat); setCurrentFlashcardIndex(0) }}
                  className={flashcardCategory === cat ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {cat} ({count})
                </Button>
              )
            })}
          </div>

          {/* Flashcard */}
          {currentCard && (
            <div className="max-w-xl mx-auto mb-8">
              <div 
                className="bg-white rounded-xl p-8 min-h-[280px] flex flex-col items-center justify-center cursor-pointer border-2 border-gray-200 hover:border-blue-400 shadow-sm transition-all"
                onClick={() => setShowDefinition(!showDefinition)}
              >
                <div className="text-xs text-blue-600 mb-4 uppercase tracking-wider font-semibold">{currentCard.category}</div>
                
                {!showDefinition ? (
                  <>
                    <div className="text-sm text-gray-500 mb-2">Click to reveal</div>
                    <h3 className="text-3xl font-mono font-bold text-blue-600">{currentCard.term}</h3>
                  </>
                ) : (
                  <>
                    <div className="text-sm text-gray-500 mb-2">Definition</div>
                    <h3 className="text-xl font-medium text-center text-gray-800">{currentCard.definition}</h3>
                    <div className="text-blue-600 mt-4 font-mono text-sm">{currentCard.term}</div>
                  </>
                )}
              </div>
              
              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <Button variant="outline" onClick={prevFlashcard} disabled={currentFlashcardIndex === 0}>
                  Previous
                </Button>
                <span className="text-gray-600 font-medium">
                  {currentFlashcardIndex + 1} / {cards.length}
                </span>
                <Button variant="outline" onClick={nextFlashcard} disabled={currentFlashcardIndex === cards.length - 1}>
                  Next
                </Button>
              </div>
              
              {/* Actions */}
              <div className="flex gap-4 mt-6 justify-center">
                <Button 
                  variant="outline"
                  onClick={() => markFlashcardLearned(currentCard.id)}
                  disabled={progress.flashcardProgress[currentCard.id]}
                >
                  {progress.flashcardProgress[currentCard.id] ? (
                    <><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Learned</>
                  ) : (
                    <><Star className="w-4 h-4 mr-2" /> Mark Learned (+1 XP)</>
                  )}
                </Button>
                <Button variant="outline" onClick={shuffleFlashcards}>
                  <Shuffle className="w-4 h-4 mr-2" /> Shuffle
                </Button>
              </div>
            </div>
          )}

          {/* Quiz Section */}
          <Card className="max-w-xl mx-auto">
            <CardContent className="p-6 text-center">
              <Lightbulb className="w-10 h-10 mx-auto mb-4 text-amber-500" />
              <h3 className="text-lg font-bold text-gray-800 mb-2">Test Your Knowledge</h3>
              <p className="text-gray-600 mb-4 text-sm">Take a 20-question quiz</p>
              {progress.flashcardQuizScore !== null && (
                <div className="text-sm text-gray-600 mb-4">
                  Best Score: <span className="font-bold text-blue-600">{progress.flashcardQuizScore}%</span>
                </div>
              )}
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={generateFlashcardQuiz}>
                <Target className="w-4 h-4 mr-2" /> Start Quiz
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  // HOME VIEW
  const renderHome = () => (
    <div className="min-h-screen bg-gray-50">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">CS Learning Portal</h1>
              <p className="text-sm text-gray-500">12th Computer Science - TN State Board</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:bg-gray-100"
              onClick={() => setView('badges')}
            >
              <Trophy className="w-5 h-5 mr-1 text-amber-500" />
              <span className="font-semibold">{progress.badges.length}</span>
            </Button>
            <div className="flex items-center gap-1.5 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="font-semibold text-amber-700">{progress.xp} XP</span>
            </div>
            <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200">
              <Flame className="w-4 h-4 text-orange-500" />
              <span className="font-semibold text-orange-700">{progress.streak}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Learn Computer Science
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
            Master all 16 chapters with interactive lessons, quizzes, and flashcards
          </p>
          
          {/* Progress */}
          <div className="grid md:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            <Card className="bg-white border border-gray-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Course Progress</span>
                  <span className="font-bold text-blue-600">{getTotalProgress()}%</span>
                </div>
                <Progress value={getTotalProgress()} className="h-2.5" />
                <p className="text-sm text-gray-500 mt-2">{progress.completedLessons.length} of 16 lessons completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200 shadow-sm cursor-pointer hover:border-blue-300 transition-colors" onClick={() => setView('flashcards')}>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-medium">Flashcards</span>
                  <span className="font-bold text-teal-600">{getFlashcardProgress()}%</span>
                </div>
                <Progress value={getFlashcardProgress()} className="h-2.5" />
                <p className="text-sm text-gray-500 mt-2">{Object.keys(progress.flashcardProgress).filter(k => progress.flashcardProgress[Number(k)]).length} of 100 learned</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8" onClick={() => setView('flashcards')}>
              <Layers className="w-4 h-4 mr-2" /> Flashcards
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
          {[
            { label: 'Lessons', value: '16', icon: BookOpen, color: 'text-blue-500' },
            { label: 'Units', value: '5', icon: Target, color: 'text-purple-500' },
            { label: 'Questions', value: '100+', icon: Brain, color: 'text-green-500' },
            { label: 'Flashcards', value: '100', icon: Layers, color: 'text-teal-500' },
            { label: 'Badges', value: '15', icon: Medal, color: 'text-amber-500' },
            { label: 'Final Exam', value: '55 Qs', icon: Trophy, color: 'text-rose-500' },
          ].map((stat, i) => (
            <div key={i} className="p-3">
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Units */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Course Units</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {units.map(unit => {
              const unitLessons = lessons.filter(l => l.unitId === unit.id)
              const completedCount = unitLessons.filter(l => progress.completedLessons.includes(l.id)).length
              const isComplete = completedCount === unitLessons.length
              
              return (
                <Card 
                  key={unit.id}
                  className={`bg-white border shadow-sm cursor-pointer hover:shadow-md transition-all ${isComplete ? 'border-green-300' : 'border-gray-200'}`}
                  onClick={() => { setSelectedUnit(unit.id); setView('units') }}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <Badge variant={isComplete ? "default" : "secondary"} className={`mb-2 ${isComplete ? 'bg-green-500' : 'bg-gray-100 text-gray-600'}`}>
                        Unit {unit.id}
                      </Badge>
                      {isComplete && <CheckCircle className="w-5 h-5 text-green-500" />}
                    </div>
                    <CardTitle className="text-lg text-gray-800">{unit.title}</CardTitle>
                    <CardDescription className="text-gray-500">{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{completedCount}/{unitLessons.length} lessons</span>
                      <span>{Math.round((completedCount/unitLessons.length)*100)}%</span>
                    </div>
                    <Progress value={(completedCount/unitLessons.length)*100} className="h-2" />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Badges */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-800">Recent Badges</h3>
            <Button variant="ghost" className="text-blue-600" onClick={() => setView('badges')}>
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {allBadges.slice(0, 5).map(badge => (
              <BadgeCard key={badge.id} badge={badge} earned={progress.badges.includes(badge.id)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )

  // UNITS VIEW
  const renderUnits = () => {
    const unit = units.find(u => u.id === selectedUnit)
    const unitLessons = lessons.filter(l => l.unitId === selectedUnit)
    const allComplete = unitLessons.every(l => progress.completedLessons.includes(l.id))
    
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto p-4 flex justify-between items-center">
            <Button variant="ghost" onClick={() => setView('home')} className="text-gray-600">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="flex items-center gap-3">
              {allComplete && canTakeUnitQuiz(selectedUnit!) && (
                <Button onClick={() => startQuiz(unitQuizzes[selectedUnit! - 1]?.quiz || [], 'unit', selectedUnit!)}>
                  <Trophy className="w-4 h-4 mr-2" /> Unit Quiz
                </Button>
              )}
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <div className="mb-6">
            <Badge className="mb-2 bg-blue-100 text-blue-700">Unit {unit?.id}</Badge>
            <h1 className="text-2xl font-bold text-gray-800">{unit?.title}</h1>
            <p className="text-gray-600">{unit?.description}</p>
          </div>

          <div className="space-y-3">
            {unitLessons.map((lesson, index) => {
              const isCompleted = progress.completedLessons.includes(lesson.id)
              const prevCompleted = index === 0 || progress.completedLessons.includes(unitLessons[index - 1].id)
              const canAccess = isCompleted || prevCompleted
              
              return (
                <Card 
                  key={lesson.id}
                  className={`bg-white border transition-all ${
                    isCompleted ? 'border-green-300' : canAccess ? 'border-gray-200 hover:border-blue-300 cursor-pointer' : 'border-gray-100 opacity-60'
                  }`}
                  onClick={() => canAccess && startLesson(lesson)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted ? 'bg-green-100' : canAccess ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : canAccess ? (
                          <Play className="w-5 h-5 text-blue-600" />
                        ) : (
                          <Lock className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{lesson.title}</h3>
                        <p className="text-sm text-gray-500">{lesson.topics.length} topics</p>
                      </div>
                      {progress.lessonQuizScores[lesson.id] !== undefined && (
                        <Badge className="bg-blue-100 text-blue-700">
                          {progress.lessonQuizScores[lesson.id]}%
                        </Badge>
                      )}
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>
      </div>
    )
  }

  // LESSON VIEW
  const renderLesson = () => {
    if (!selectedLesson) return null
    const currentTopic = selectedLesson.topics[currentTopicIndex]
    const currentSubtopic = currentTopic?.subtopics[currentSubtopicIndex]
    const totalSubtopics = selectedLesson.topics.reduce((acc, t) => acc + t.subtopics.length, 0)
    const currentSubtopicNumber = selectedLesson.topics.slice(0, currentTopicIndex).reduce((acc, t) => acc + t.subtopics.length, 0) + currentSubtopicIndex + 1

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-2">
              <Button variant="ghost" onClick={() => setView('units')} className="text-gray-600">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <span className="text-sm text-gray-500">{currentSubtopicNumber} of {totalSubtopics}</span>
              <Button 
                onClick={() => startQuiz(selectedLesson.quiz, 'lesson')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Target className="w-4 h-4 mr-2" /> Take Quiz
              </Button>
            </div>
            <Progress value={(currentSubtopicNumber / totalSubtopics) * 100} className="h-1" />
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6">
          <div className="mb-6">
            <Badge className="mb-2 bg-blue-100 text-blue-700">Chapter {selectedLesson.id}</Badge>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">{selectedLesson.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>{currentTopic.title}</span>
              <ChevronRight className="w-4 h-4" />
              <span>{currentSubtopic?.title}</span>
            </div>
          </div>

          {currentSubtopic && (
            <Card className="bg-white border border-gray-200 shadow-sm mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">{currentSubtopic.title}</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">{currentSubtopic.content}</p>
                </div>
                
                {currentSubtopic.codeExample && (
                  <CodeBlock code={currentSubtopic.codeExample} />
                )}
                
                {currentSubtopic.keyPoints && currentSubtopic.keyPoints.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-amber-500" />
                      Key Points
                    </h3>
                    <div className="space-y-2">
                      {currentSubtopic.keyPoints.map((point, i) => (
                        <KeyPointCard key={i} point={point} index={i} />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={prevTopic} disabled={currentTopicIndex === 0 && currentSubtopicIndex === 0}>
              <ChevronLeft className="w-4 h-4 mr-2" /> Previous
            </Button>
            <Button onClick={nextTopic} disabled={currentTopicIndex === selectedLesson.topics.length - 1 && currentSubtopicIndex === currentTopic.subtopics.length - 1}>
              Next <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </main>
      </div>
    )
  }

  // QUIZ VIEW
  const renderQuiz = () => {
    const question = quizQuestions[currentQuestionIndex]
    if (!question) return null

    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-2xl mx-auto p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                Score: {quizScore}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
              </span>
            </div>
            <Progress value={(currentQuestionIndex / quizQuestions.length) * 100} className="h-1" />
          </div>
        </header>

        <main className="max-w-2xl mx-auto p-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">{question.question}</h2>
              
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  let buttonClass = "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                  if (showExplanation) {
                    if (index === question.correctAnswer) {
                      buttonClass = "border-green-500 bg-green-50"
                    } else if (index === selectedAnswer) {
                      buttonClass = "border-red-500 bg-red-50"
                    }
                  } else if (selectedAnswer === index) {
                    buttonClass = "border-blue-500 bg-blue-50"
                  }
                  
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className={`w-full justify-start text-left h-auto py-4 px-4 ${buttonClass}`}
                      onClick={() => handleAnswer(index)}
                      disabled={showExplanation}
                    >
                      <span className="mr-3 font-semibold text-gray-400">{String.fromCharCode(65 + index)}.</span>
                      <span className="text-gray-700">{option}</span>
                    </Button>
                  )
                })}
              </div>

              {showExplanation && (
                <div className={`mt-6 p-4 rounded-lg ${selectedAnswer === question.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className={`font-semibold mb-1 ${selectedAnswer === question.correctAnswer ? 'text-green-700' : 'text-red-700'}`}>
                    {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </p>
                  <p className="text-gray-700">{question.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-4 flex justify-end">
            {showExplanation && (
              <Button onClick={nextQuestion} className="bg-blue-600 hover:bg-blue-700">
                {currentQuestionIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </main>
      </div>
    )
  }

  // RESULTS VIEW
  const renderResults = () => {
    const finalScore = Math.round((quizScore / quizQuestions.length) * 100)
    const passed = finalScore >= 60

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        {showConfetti && <Confetti />}
        
        <Card className="max-w-md w-full bg-white border border-gray-200 shadow-lg">
          <CardContent className="p-8 text-center">
            <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
              passed ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {passed ? (
                <CheckCircle className="w-10 h-10 text-green-600" />
              ) : (
                <X className="w-10 h-10 text-red-600" />
              )}
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {passed ? 'Congratulations!' : 'Keep Practicing!'}
            </h2>
            <p className="text-gray-600 mb-6">
              {passed ? 'You passed the quiz!' : 'You need 60% to pass. Try again!'}
            </p>
            
            <div className="text-5xl font-bold mb-6">
              <span className={passed ? 'text-green-600' : 'text-red-600'}>{finalScore}%</span>
            </div>
            
            <p className="text-gray-500 mb-6">
              You got {quizScore} out of {quizQuestions.length} questions correct
            </p>

            {quizType === 'lesson' && (
              <Badge className="bg-amber-100 text-amber-700 mb-6">
                <Zap className="w-4 h-4 mr-1" /> +50 XP Earned
              </Badge>
            )}
            
            <div className="space-y-3">
              <Button 
                onClick={() => {
                  if (quizType === 'lesson') setView('units')
                  else if (quizType === 'flashcard') setView('flashcards')
                  else setView('home')
                }}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Continue Learning
              </Button>
              <Button variant="outline" onClick={() => {
                setCurrentQuestionIndex(0)
                setSelectedAnswer(null)
                setShowExplanation(false)
                setQuizScore(0)
                setView('quiz')
              }} className="w-full">
                <RotateCcw className="w-4 h-4 mr-2" /> Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main render
  return (
    <>
      {view === 'home' && renderHome()}
      {view === 'badges' && renderBadges()}
      {view === 'units' && renderUnits()}
      {view === 'lesson' && renderLesson()}
      {view === 'quiz' && renderQuiz()}
      {view === 'results' && renderResults()}
      {view === 'flashcards' && renderFlashcards()}
    </>
  )
}
