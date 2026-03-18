// Complete Course Data for 12th Computer Science - Tamil Nadu State Board
// Simple topics with definitions - No code examples

export interface SubTopic {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  keyPoints: string[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface Lesson {
  id: number;
  title: string;
  unitId: number;
  topics: Topic[];
  quiz: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  lessons: number[];
  quiz: QuizQuestion[];
}

export const units: Unit[] = [
  { id: 1, title: "Problem Solving Techniques", description: "Functions, Data Abstraction, Scoping, Algorithms, Python Variables, Control Structures", lessons: [1, 2, 3, 4, 5, 6], quiz: [] },
  { id: 2, title: "Core Python", description: "Python Functions, Strings and String Manipulation", lessons: [7, 8], quiz: [] },
  { id: 3, title: "Modularity and OOPS", description: "Lists, Tuples, Sets, Dictionary, Classes and Objects", lessons: [9, 10], quiz: [] },
  { id: 4, title: "Database Concepts", description: "Database Concepts, SQL, Python and CSV Files", lessons: [11, 12, 13], quiz: [] },
  { id: 5, title: "Integration", description: "C++ Integration, SQL with Python, Data Visualization", lessons: [14, 15, 16], quiz: [] }
];

export const lessons: Lesson[] = [
  // ==================== CHAPTER 1 - FUNCTION ====================
  {
    id: 1,
    title: "Function",
    unitId: 1,
    topics: [
      {
        id: "1.1",
        title: "Introduction to Functions",
        subtopics: [
          {
            id: "1.1.1",
            title: "What is a Function?",
            content: "A function is a block of code that performs a specific task. Think of it like a recipe - you write the steps once, and use it whenever needed. Functions help you organize code, avoid repetition, and make programs easier to understand. In programming, these are also called subroutines.",
            keyPoints: [
              "Function = A block of code for a specific task",
              "Define once, use many times",
              "'def' keyword is used to define a function in Python",
              "Functions make code reusable and organized",
              "Subroutines are small sections of code for particular tasks"
            ]
          },
          {
            id: "1.1.2",
            title: "Why Use Functions?",
            content: "Functions help in three main ways: (1) Code Reuse - Write once, use many times (2) Organization - Break big problems into small parts (3) Easy Debugging - Find and fix errors easily. Instead of writing the same code multiple times, put it in a function!",
            keyPoints: [
              "Functions save time - write once, use many times",
              "Makes code easier to read and understand",
              "Helps find and fix bugs quickly",
              "Breaks complex problems into simple parts",
              "Reduces code duplication"
            ]
          }
        ]
      },
      {
        id: "1.2",
        title: "Parameters and Arguments",
        subtopics: [
          {
            id: "1.2.1",
            title: "What are Parameters?",
            content: "Parameters are variables listed inside the parentheses in the function definition. They are like placeholders that receive values when the function is called. Think of parameters as empty boxes that get filled when you use the function.",
            keyPoints: [
              "Parameter = Variable in function definition (placeholder)",
              "Argument = Actual value passed to function when called",
              "Parameters act as placeholders for input values",
              "Arguments fill in the placeholders with real values",
              "Multiple parameters are separated by commas"
            ]
          },
          {
            id: "1.2.2",
            title: "Return Statement",
            content: "The return statement sends a value back from the function. Instead of just printing, the function can calculate and give you a result that you can store in a variable or use elsewhere. When return is executed, the function stops running.",
            keyPoints: [
              "'return' sends a value back from function to caller",
              "Returned value can be stored in a variable",
              "Function stops executing after return statement",
              "Use return for calculations, print for display",
              "Returned value can be used in expressions"
            ]
          }
        ]
      },
      {
        id: "1.3",
        title: "Interface vs Implementation",
        subtopics: [
          {
            id: "1.3.1",
            title: "What is Interface?",
            content: "Interface is WHAT a function does - it's like a menu in a restaurant. You see the dish name and description, but you don't know how the chef prepares it. Similarly, function interface tells you: the function name, what inputs it needs, and what it returns.",
            keyPoints: [
              "Interface = What the function does (visible to user)",
              "Shows function name and required parameters",
              "Shows what the function returns",
              "Like a restaurant menu - shows options, not cooking",
              "User only needs to know the interface to use it"
            ]
          },
          {
            id: "1.3.2",
            title: "What is Implementation?",
            content: "Implementation is HOW a function works - it's the actual code inside the function. This is hidden from the user. The user doesn't need to know the details, just how to use the function through its interface. Implementation can be changed without affecting users.",
            keyPoints: [
              "Implementation = How the function works internally",
              "Contains the actual code and logic",
              "Hidden from the user who calls the function",
              "Can be changed without affecting interface users",
              "User only interacts with interface, not implementation"
            ]
          }
        ]
      },
      {
        id: "1.4",
        title: "Pure and Impure Functions",
        subtopics: [
          {
            id: "1.4.1",
            title: "Pure Functions",
            content: "A pure function always gives the same output for the same input. It doesn't change anything outside the function. Think of it like a calculator - 2 + 2 always equals 4, no matter how many times you calculate it. Pure functions have no side effects.",
            keyPoints: [
              "Pure function: Same input = Same output always",
              "Does not modify variables outside the function",
              "No side effects - completely predictable",
              "Easy to test and debug",
              "Example: mathematical functions like sin(), sqrt()"
            ]
          },
          {
            id: "1.4.2",
            title: "Impure Functions",
            content: "An impure function may give different outputs even with the same input. It can change variables outside the function or depend on external factors. Examples include random() which gives different values, or functions that use global variables.",
            keyPoints: [
              "Impure function: Can give different outputs for same input",
              "May change variables outside the function (side effects)",
              "Depends on external state or factors",
              "Examples: random(), Date(), input()",
              "Using 'global' keyword makes function impure"
            ]
          }
        ]
      },
      {
        id: "1.5",
        title: "Recursive Functions",
        subtopics: [
          {
            id: "1.5.1",
            title: "What is Recursion?",
            content: "Recursion is when a function calls itself. A recursive function must have: (1) A base case - condition to stop recursion (2) A recursive case - function calls itself with smaller input. Think of it like Russian dolls - each doll contains a smaller version of itself.",
            keyPoints: [
              "Recursion = Function calls itself",
              "Must have a base case to stop recursion",
              "Each recursive call should work on smaller input",
              "Like Russian dolls - nested versions inside each other",
              "Factorial calculation is a classic recursion example"
            ]
          },
          {
            id: "1.5.2",
            title: "GCD - Greatest Common Divisor",
            content: "GCD (Greatest Common Divisor) is the largest number that divides two numbers without remainder. Using Euclid's algorithm: GCD(a, b) = GCD(b, a % b). The recursion continues until b becomes 0. GCD(48, 18) = 6.",
            keyPoints: [
              "GCD = Greatest Common Divisor of two numbers",
              "Uses Euclid's algorithm: GCD(a, b) = GCD(b, a % b)",
              "Recursion stops when second number becomes 0",
              "Example: GCD(48, 18) = GCD(18, 12) = GCD(12, 6) = 6",
              "Very efficient algorithm for finding GCD"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q1.1", question: "The small sections of code that are used to perform a particular task is called?", options: ["Subroutines", "Files", "Pseudo code", "Modules"], correctAnswer: 0, explanation: "Subroutines are small sections of code used to perform particular tasks repeatedly." },
      { id: "q1.2", question: "Which of the following is a unit of code that is often defined within a greater code structure?", options: ["Subroutines", "Function", "Files", "Modules"], correctAnswer: 1, explanation: "A function is a unit of code defined within a greater code structure." },
      { id: "q1.3", question: "The variables in a function definition are called as?", options: ["Subroutines", "Function", "Definition", "Parameters"], correctAnswer: 3, explanation: "Parameters are the variables in a function definition." },
      { id: "q1.4", question: "The values which are passed to a function definition are called?", options: ["Arguments", "Subroutines", "Function", "Definition"], correctAnswer: 0, explanation: "Arguments are the actual values passed to a function when calling it." },
      { id: "q1.5", question: "Which of the following defines what an object can do?", options: ["Operating System", "Compiler", "Interface", "Interpreter"], correctAnswer: 2, explanation: "Interface defines what an object can do, not how it does it." },
      { id: "q1.6", question: "Which of the following carries out the instructions defined in the interface?", options: ["Operating System", "Compiler", "Implementation", "Interpreter"], correctAnswer: 2, explanation: "Implementation carries out the instructions defined in the interface." },
      { id: "q1.7", question: "The functions which will give exact result when same arguments are passed are called?", options: ["Impure functions", "Partial Functions", "Dynamic Functions", "Pure functions"], correctAnswer: 3, explanation: "Pure functions always give the same output for the same input." },
      { id: "q1.8", question: "The functions which cause side effects to the arguments passed are called?", options: ["Impure function", "Partial Functions", "Dynamic Functions", "Pure functions"], correctAnswer: 0, explanation: "Impure functions can cause side effects and give different results for same input." }
    ]
  },

  // ==================== CHAPTER 2 - DATA ABSTRACTION ====================
  {
    id: 2,
    title: "Data Abstraction",
    unitId: 1,
    topics: [
      {
        id: "2.1",
        title: "Introduction to Data Abstraction",
        subtopics: [
          {
            id: "2.1.1",
            title: "What is Data Abstraction?",
            content: "Data abstraction means hiding the complex details and showing only what's necessary. Think of a car - you know how to drive it (steering, pedals), but you don't need to know how the engine works. Similarly, in programming, you use functions without knowing their internal code.",
            keyPoints: [
              "Data abstraction = Hiding details, showing essentials",
              "Like driving a car without knowing how engine works",
              "Use functions without knowing internal implementation",
              "Makes programming simpler and more organized",
              "Focus on WHAT, not HOW"
            ]
          },
          {
            id: "2.1.2",
            title: "Abstract Data Type (ADT)",
            content: "ADT is a data type that specifies WHAT operations can be done, but not HOW they are implemented. For example, a Stack ADT specifies push and pop operations, but doesn't say if it uses arrays or linked lists internally. The implementation is hidden.",
            keyPoints: [
              "ADT = Abstract Data Type",
              "Specifies WHAT operations exist, not HOW they work",
              "Stack ADT: Push (add) and Pop (remove) operations",
              "Implementation details are hidden from user",
              "Examples: Stack, Queue, List, Dictionary"
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "Constructors and Selectors",
        subtopics: [
          {
            id: "2.2.1",
            title: "Constructors",
            content: "Constructors are functions that CREATE new data objects. They bundle multiple pieces of data into one unit. Think of it like filling out a form - the constructor collects all the information and creates a record. In Python classes, __init__ is the constructor.",
            keyPoints: [
              "Constructor = Function that creates new objects",
              "Bundles multiple pieces of data together",
              "Returns a new data structure/object",
              "Like filling out a form to create a record",
              "__init__ is the constructor in Python classes"
            ]
          },
          {
            id: "2.2.2",
            title: "Selectors",
            content: "Selectors are functions that RETRIEVE data from objects. They extract individual pieces of information from the bundled data. If constructor is like creating a form, selector is like reading a specific field from that form.",
            keyPoints: [
              "Selector = Function that retrieves data from objects",
              "Extracts individual piece of information",
              "Works with constructor-created objects",
              "Like reading a specific form field",
              "Each piece of data has its own selector function"
            ]
          }
        ]
      },
      {
        id: "2.3",
        title: "Lists and Tuples",
        subtopics: [
          {
            id: "2.3.1",
            title: "Python Lists",
            content: "A list is an ordered collection of items created using square brackets []. Lists are mutable - you can add, remove, or change items. Index starts from 0 (first item is at index 0). Lists can hold items of different types.",
            keyPoints: [
              "List = Ordered, mutable collection using []",
              "Index starts from 0, negative index counts from end",
              "Mutable - can add, remove, change items",
              "Can hold items of different types",
              "Methods: append(), insert(), remove(), pop(), sort()"
            ]
          },
          {
            id: "2.3.2",
            title: "Python Tuples",
            content: "A tuple is like a list, but IMMUTABLE - you cannot change it after creation. Tuples are created using parentheses (). They are faster than lists and safer when you don't want data to change. Used for fixed collections of items.",
            keyPoints: [
              "Tuple = Ordered, immutable collection using ()",
              "Immutable - cannot be changed after creation",
              "Faster and safer than lists for constant data",
              "Use when data should not change",
              "Methods: count(), index()"
            ]
          }
        ]
      },
      {
        id: "2.4",
        title: "Concrete vs Abstract Data Types",
        subtopics: [
          {
            id: "2.4.1",
            title: "Concrete Data Types",
            content: "A concrete data type is a data type whose representation is KNOWN. You know exactly how the data is stored and organized. For example, a list where you know it stores items at specific indices that you can access directly.",
            keyPoints: [
              "Concrete data type = Representation is known",
              "You know how data is stored and organized",
              "Can access data directly by structure",
              "Example: List with known indices",
              "Opposite of abstract data type"
            ]
          },
          {
            id: "2.4.2",
            title: "Abstract Data Types",
            content: "An abstract data type is a data type whose representation is UNKNOWN to the user. You only know what operations can be performed, not how the data is stored internally. This provides implementation independence.",
            keyPoints: [
              "Abstract data type = Representation is hidden/unknown",
              "User only knows operations, not storage details",
              "Provides implementation independence",
              "Can change implementation without affecting users",
              "Examples: Stack, Queue, Dictionary ADT"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q2.1", question: "Which of the following functions that build the abstract data type?", options: ["Constructors", "Destructors", "Recursive", "Nested"], correctAnswer: 0, explanation: "Constructors are functions that build the abstract data type by bundling data together." },
      { id: "q2.2", question: "Which of the following functions that retrieve information from the data type?", options: ["Constructors", "Selectors", "Recursive", "Nested"], correctAnswer: 1, explanation: "Selectors are functions that retrieve information from the data type." },
      { id: "q2.3", question: "The data structure which is a mutable ordered sequence of elements is called?", options: ["Built in", "List", "Tuple", "Derived data"], correctAnswer: 1, explanation: "List is a mutable ordered sequence of elements." },
      { id: "q2.4", question: "A sequence of immutable objects is called?", options: ["Built in", "List", "Tuple", "Derived data"], correctAnswer: 2, explanation: "Tuple is a sequence of immutable objects." },
      { id: "q2.5", question: "The data type whose representation is known are called?", options: ["Built in datatype", "Derived datatype", "Concrete datatype", "Abstract datatype"], correctAnswer: 2, explanation: "Concrete data types have known representation." },
      { id: "q2.6", question: "The data type whose representation is unknown are called?", options: ["Built in datatype", "Derived datatype", "Concrete datatype", "Abstract datatype"], correctAnswer: 3, explanation: "Abstract data types have hidden representation." },
      { id: "q2.7", question: "Which of the following is a compound structure?", options: ["Pair", "Triplet", "Single", "Quadrat"], correctAnswer: 0, explanation: "Pair is a compound structure that bundles two values together." },
      { id: "q2.8", question: "Which of the following allow to name the various parts of a multi-item object?", options: ["Tuples", "Lists", "Classes", "Quadrats"], correctAnswer: 2, explanation: "Classes allow naming various parts of multi-item objects through attributes." }
    ]
  },

  // ==================== CHAPTER 3 - SCOPING ====================
  {
    id: 3,
    title: "Scoping",
    unitId: 1,
    topics: [
      {
        id: "3.1",
        title: "What is Scope?",
        subtopics: [
          {
            id: "3.1.1",
            title: "Understanding Scope",
            content: "Scope determines WHERE a variable can be accessed in your program. Think of it like rooms in a house - you can see things in your current room, but not in other rooms. Variables created inside a function are 'local' to that function and cannot be accessed outside.",
            keyPoints: [
              "Scope = Where a variable can be accessed/visible",
              "Variables have visibility limits like rooms in a house",
              "Local variables only accessible inside their function",
              "Global variables accessible everywhere",
              "Understanding scope prevents naming conflicts"
            ]
          },
          {
            id: "3.1.2",
            title: "Namespaces",
            content: "Namespaces are containers that map variable names to objects. Think of them as dictionaries - they keep track of which name refers to which value. Different scopes have different namespaces. This helps organize variable bindings.",
            keyPoints: [
              "Namespace = Container mapping names to objects",
              "Like a dictionary: name → value mapping",
              "Different scopes have different namespaces",
              "Helps organize and track variable bindings",
              "Prevents naming conflicts between different scopes"
            ]
          }
        ]
      },
      {
        id: "3.2",
        title: "LEGB Rule",
        subtopics: [
          {
            id: "3.2.1",
            title: "The LEGB Rule",
            content: "LEGB stands for Local, Enclosing, Global, Built-in. When you use a variable, Python looks for it in this order: First Local (inside current function), then Enclosing (outer function), then Global (outside all functions), finally Built-in (Python's built-in names).",
            keyPoints: [
              "L = Local (inside current function)",
              "E = Enclosing (outer function for nested functions)",
              "G = Global (top level, outside all functions)",
              "B = Built-in (Python's predefined names like print, len)",
              "Python searches in order: L → E → G → B"
            ]
          },
          {
            id: "3.2.2",
            title: "Local Scope",
            content: "Local scope refers to variables defined inside a function. They only exist while the function runs. Once the function ends, local variables are destroyed. Other functions cannot access them. Each function call creates new local variables.",
            keyPoints: [
              "Local variables created inside function",
              "Only exist while function is running",
              "Destroyed when function ends",
              "Not accessible from outside the function",
              "Each function call creates fresh local scope"
            ]
          },
          {
            id: "3.2.3",
            title: "Global Scope",
            content: "Global variables are created outside all functions. They can be accessed from anywhere in the program. To MODIFY a global variable inside a function, use the 'global' keyword. Without 'global', Python creates a new local variable instead.",
            keyPoints: [
              "Global variables created outside all functions",
              "Accessible from anywhere in the program",
              "Use 'global' keyword to modify inside functions",
              "Without 'global', creates new local variable",
              "Use global variables sparingly - can cause bugs"
            ]
          },
          {
            id: "3.2.4",
            title: "Enclosing Scope",
            content: "Enclosing scope applies to nested functions. When a function is defined inside another function, the inner function can access variables from the outer (enclosing) function. Use 'nonlocal' keyword to modify enclosing variables.",
            keyPoints: [
              "Enclosing scope = outer function's scope for nested functions",
              "Inner function can access outer function's variables",
              "Use 'nonlocal' to modify enclosing variables",
              "Creates closures - function remembers its environment",
              "Useful for data hiding and encapsulation"
            ]
          },
          {
            id: "3.2.5",
            title: "Built-in Scope",
            content: "Built-in scope contains Python's predefined names like print(), len(), type(), int(), str(). These are always available without any import. Built-in scope has the lowest priority in LEGB - searched last. You should not override built-in names.",
            keyPoints: [
              "Built-in = Python's predefined names",
              "Always available without import",
              "Examples: print, len, type, int, str, max, min",
              "Lowest priority in LEGB rule",
              "Can be overridden (not recommended)"
            ]
          }
        ]
      },
      {
        id: "3.3",
        title: "Modular Programming",
        subtopics: [
          {
            id: "3.3.1",
            title: "What is a Module?",
            content: "A module is a part of a program that can be developed and tested independently. Programs are composed of one or more modules. The process of dividing a program into smaller modules is called modular programming. Modules make code easier to develop, test, and maintain.",
            keyPoints: [
              "Module = Independent part of a program",
              "Can be developed and tested separately",
              "Modular programming divides programs into modules",
              "Makes debugging easier",
              "Modules can be reused in other programs"
            ]
          },
          {
            id: "3.3.2",
            title: "Characteristics of Modules",
            content: "Good modules have these characteristics: (1) Contain instructions, processing logic, and data (2) Can be compiled and stored separately (3) Can be included in programs (4) Can be used by invoking name with parameters (5) Can be used by other modules.",
            keyPoints: [
              "Modules contain instructions and processing logic",
              "Can be compiled and stored separately in libraries",
              "Can be included in different programs",
              "Invoked by name with parameters",
              "Can be shared between multiple modules"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q3.1", question: "What does scope determine?", options: ["Variable value", "Where variable can be accessed", "Variable type", "Variable name"], correctAnswer: 1, explanation: "Scope determines where a variable can be accessed in a program." },
      { id: "q3.2", question: "What does L stand for in LEGB?", options: ["Large", "Local", "Long", "Loop"], correctAnswer: 1, explanation: "L stands for Local scope (inside current function)." },
      { id: "q3.3", question: "Where are global variables created?", options: ["Inside functions", "Outside all functions", "In classes", "In loops"], correctAnswer: 1, explanation: "Global variables are created outside all functions." },
      { id: "q3.4", question: "What keyword is used to modify global variable inside function?", options: ["local", "global", "variable", "modify"], correctAnswer: 1, explanation: "'global' keyword is used to modify global variables inside a function." },
      { id: "q3.5", question: "What is the order of LEGB scope resolution?", options: ["Local → Global → Enclosing → Built-in", "Local → Enclosing → Global → Built-in", "Global → Local → Enclosing → Built-in", "Built-in → Global → Enclosing → Local"], correctAnswer: 1, explanation: "Python searches: Local → Enclosing → Global → Built-in." },
      { id: "q3.6", question: "What happens to local variables when function ends?", options: ["They become global", "They are destroyed", "They are saved", "They are printed"], correctAnswer: 1, explanation: "Local variables are destroyed when the function ends." }
    ]
  },

  // ==================== CHAPTER 4 - ALGORITHMIC STRATEGIES ====================
  {
    id: 4,
    title: "Algorithmic Strategies",
    unitId: 1,
    topics: [
      {
        id: "4.1",
        title: "What is an Algorithm?",
        subtopics: [
          {
            id: "4.1.1",
            title: "Introduction to Algorithms",
            content: "An algorithm is a step-by-step procedure to solve a problem. Think of it like a recipe - you follow specific steps in order to get the result. A good algorithm should be: Clear (unambiguous), Finite (has end), Effective (doable), and have Input/Output.",
            keyPoints: [
              "Algorithm = Step-by-step problem solving procedure",
              "Like a recipe with ordered steps",
              "Must be clear, finite, and effective",
              "Has defined input and produces output",
              "Can be expressed in pseudocode or programming language"
            ]
          },
          {
            id: "4.1.2",
            title: "Time Complexity",
            content: "Time complexity measures how the runtime of an algorithm grows with input size. Big O notation describes this: O(1) constant, O(n) linear, O(n²) quadratic, O(log n) logarithmic. Lower complexity means faster algorithm for large inputs.",
            keyPoints: [
              "Time complexity = How runtime grows with input size",
              "O(1) = Constant time (same regardless of input)",
              "O(n) = Linear time (grows with input)",
              "O(n²) = Quadratic time (grows with square of input)",
              "O(log n) = Logarithmic time (very efficient for large inputs)"
            ]
          }
        ]
      },
      {
        id: "4.2",
        title: "Sorting Algorithms",
        subtopics: [
          {
            id: "4.2.1",
            title: "Bubble Sort",
            content: "Bubble Sort compares adjacent elements and swaps them if they are in wrong order. The largest element 'bubbles up' to the end with each pass. Simple to understand but slow for large lists. Time complexity is O(n²) - not efficient for large data.",
            keyPoints: [
              "Compares adjacent elements repeatedly",
              "Swaps if elements are in wrong order",
              "Largest element 'bubbles up' to end each pass",
              "Simple but slow: O(n²) time complexity",
              "Good for learning, not for large datasets"
            ]
          },
          {
            id: "4.2.2",
            title: "Selection Sort",
            content: "Selection Sort finds the smallest element and places it at the beginning. Then finds the next smallest, places it second, and so on. Builds sorted list from left to right. Also O(n²) but makes fewer swaps than bubble sort.",
            keyPoints: [
              "Finds minimum element, places at beginning",
              "Repeats for remaining unsorted portion",
              "Builds sorted list from left to right",
              "Time complexity: O(n²)",
              "Makes fewer swaps than bubble sort"
            ]
          },
          {
            id: "4.2.3",
            title: "Insertion Sort",
            content: "Insertion Sort works like sorting playing cards in your hand. Take each element and insert it in its correct position among the already sorted elements. Efficient for small or nearly sorted lists. Time complexity O(n²) worst case.",
            keyPoints: [
              "Inserts each element in correct sorted position",
              "Like sorting cards in hand",
              "Efficient for small or nearly sorted lists",
              "Time complexity: O(n²) worst case",
              "O(n) best case for already sorted data"
            ]
          }
        ]
      },
      {
        id: "4.3",
        title: "Searching Algorithms",
        subtopics: [
          {
            id: "4.3.1",
            title: "Linear Search",
            content: "Linear Search checks each element one by one until the target is found or the list ends. Simple to implement but slow for large lists. Works on unsorted data. Time complexity is O(n) - may need to check all elements.",
            keyPoints: [
              "Checks each element sequentially",
              "Works on unsorted data",
              "Simple to implement",
              "Time complexity: O(n)",
              "Returns position if found, -1 or None if not found"
            ]
          },
          {
            id: "4.3.2",
            title: "Binary Search",
            content: "Binary Search finds an element in a SORTED list by repeatedly dividing the list in half. Compare with middle element, then search only the relevant half. Much faster than linear search for large lists. Time complexity O(log n).",
            keyPoints: [
              "Works ONLY on sorted data",
              "Divides search space in half each step",
              "Eliminates half of remaining elements each comparison",
              "Time complexity: O(log n) - very efficient",
              "Much faster than linear search for large lists"
            ]
          }
        ]
      },
      {
        id: "4.4",
        title: "Dynamic Programming",
        subtopics: [
          {
            id: "4.4.1",
            title: "What is Dynamic Programming?",
            content: "Dynamic Programming solves complex problems by breaking them into simpler overlapping subproblems. It stores solutions to subproblems (memoization) so they don't need to be recalculated. Used when a problem has overlapping subproblems and optimal substructure.",
            keyPoints: [
              "Solves complex problems via simpler subproblems",
              "Stores subproblem solutions (memoization)",
              "Avoids recalculating same subproblems",
              "Requires overlapping subproblems and optimal substructure",
              "Examples: Fibonacci, shortest path problems"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q4.1", question: "What is an algorithm?", options: ["A programming language", "Step-by-step problem solving procedure", "A variable type", "A loop structure"], correctAnswer: 1, explanation: "An algorithm is a step-by-step procedure to solve a problem." },
      { id: "q4.2", question: "In Bubble Sort, what happens to the largest element?", options: ["Stays in place", "Bubbles up to end", "Goes to start", "Gets deleted"], correctAnswer: 1, explanation: "In Bubble Sort, the largest element 'bubbles up' to the end." },
      { id: "q4.3", question: "What does Selection Sort do?", options: ["Swaps all elements", "Finds minimum and places at beginning", "Divides list in half", "Uses recursion"], correctAnswer: 1, explanation: "Selection Sort finds the minimum element and places it at the beginning." },
      { id: "q4.4", question: "Binary Search requires the list to be:", options: ["Unsorted", "Sorted", "Empty", "Very large"], correctAnswer: 1, explanation: "Binary Search only works on sorted lists." },
      { id: "q4.5", question: "What is the time complexity of Binary Search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 2, explanation: "Binary Search has time complexity O(log n)." },
      { id: "q4.6", question: "Which sorting algorithm is simplest but slow for large data?", options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"], correctAnswer: 2, explanation: "Bubble Sort is simple but has O(n²) time complexity." }
    ]
  },

  // ==================== CHAPTER 5 - PYTHON VARIABLES AND OPERATORS ====================
  {
    id: 5,
    title: "Python - Variables and Operators",
    unitId: 1,
    topics: [
      {
        id: "5.1",
        title: "Variables in Python",
        subtopics: [
          {
            id: "5.1.1",
            title: "Creating Variables",
            content: "A variable is a container for storing data. In Python, you create a variable by assigning a value using = (equals sign). Python automatically figures out the type based on the value. Variable names should be descriptive and cannot start with a number.",
            keyPoints: [
              "Variable = Container for storing data values",
              "Use = (equals sign) to assign value to variable",
              "Python automatically detects the data type",
              "Variable names should be descriptive (e.g., 'age' not 'a')",
              "Cannot start with number, cannot contain spaces"
            ]
          },
          {
            id: "5.1.2",
            title: "Data Types",
            content: "Python has several built-in data types: int (whole numbers), float (decimal numbers), str (text in quotes), bool (True/False), list (ordered collection), tuple (immutable collection), dict (key-value pairs), set (unique items).",
            keyPoints: [
              "int = Whole numbers (1, 100, -5)",
              "float = Decimal numbers (3.14, 2.5, -0.1)",
              "str = Text in quotes ('Hello', \"World\")",
              "bool = Boolean values (True, False)",
              "type() function shows the data type"
            ]
          }
        ]
      },
      {
        id: "5.2",
        title: "Operators",
        subtopics: [
          {
            id: "5.2.1",
            title: "Arithmetic Operators",
            content: "Arithmetic operators perform mathematical operations: + (add), - (subtract), * (multiply), / (divide - returns float), // (floor divide - returns integer), % (remainder/modulus), ** (power/exponentiation).",
            keyPoints: [
              "+ = Addition",
              "- = Subtraction",
              "* = Multiplication",
              "/ = Division (returns float, e.g., 7/2 = 3.5)",
              "// = Floor division (returns int, e.g., 7//2 = 3)",
              "% = Modulus (remainder, e.g., 7%2 = 1)",
              "** = Power (e.g., 2**3 = 8)"
            ]
          },
          {
            id: "5.2.2",
            title: "Comparison Operators",
            content: "Comparison operators compare values and return True or False: == (equal to), != (not equal), > (greater than), < (less than), >= (greater or equal), <= (less or equal). Used in conditions and loops.",
            keyPoints: [
              "== = Equal to (don't confuse with = assignment)",
              "!= = Not equal to",
              "> = Greater than",
              "< = Less than",
              ">= = Greater than or equal to",
              "<= = Less than or equal to",
              "All return True or False"
            ]
          },
          {
            id: "5.2.3",
            title: "Logical Operators",
            content: "Logical operators combine conditions: and (both must be True), or (at least one must be True), not (reverses the result). These are used in conditional statements to combine multiple conditions.",
            keyPoints: [
              "and = Both conditions must be True",
              "or = At least one condition must be True",
              "not = Reverses the Boolean value",
              "Used to combine conditions in if statements",
              "All return True or False"
            ]
          },
          {
            id: "5.2.4",
            title: "Assignment Operators",
            content: "Assignment operators assign values to variables: = (simple assignment), += (add and assign), -= (subtract and assign), *= (multiply and assign), /= (divide and assign). These are shortcuts for common operations.",
            keyPoints: [
              "= = Simple assignment (x = 5)",
              "+= = Add and assign (x += 3 means x = x + 3)",
              "-= = Subtract and assign (x -= 2 means x = x - 2)",
              "*= = Multiply and assign",
              "/= = Divide and assign"
            ]
          }
        ]
      },
      {
        id: "5.3",
        title: "Input and Output",
        subtopics: [
          {
            id: "5.3.1",
            title: "Input Function",
            content: "The input() function gets user input from keyboard. It always returns a string. Use int() or float() to convert to numbers. The prompt message is displayed to the user before they type.",
            keyPoints: [
              "input() gets text input from user",
              "Always returns string (text) value",
              "Use int(input()) for whole numbers",
              "Use float(input()) for decimal numbers",
              "Can provide prompt message: input('Enter name: ')"
            ]
          },
          {
            id: "5.3.2",
            title: "Output with Print",
            content: "The print() function displays output to the screen. You can print multiple values separated by commas. Use f-strings for formatted output: f\"Text {variable}\". The sep and end parameters customize formatting.",
            keyPoints: [
              "print() displays output to screen",
              "Can print multiple values with commas",
              "f-strings format output: f\"Age: {age}\"",
              "sep parameter sets separator between values",
              "end parameter sets what prints at end (default: newline)"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q5.1", question: "What is a variable?", options: ["A function", "A container for storing data", "An operator", "A loop"], correctAnswer: 1, explanation: "A variable is a container for storing data values." },
      { id: "q5.2", question: "Which is a float data type?", options: ["10", "'Hello'", "3.14", "True"], correctAnswer: 2, explanation: "3.14 is a float (decimal number). 10 is int, 'Hello' is str, True is bool." },
      { id: "q5.3", question: "What does // operator do?", options: ["Division", "Floor division", "Remainder", "Power"], correctAnswer: 1, explanation: "// performs floor division, returning the integer part of the quotient." },
      { id: "q5.4", question: "What does % operator return?", options: ["Quotient", "Remainder", "Product", "Sum"], correctAnswer: 1, explanation: "% (modulus) operator returns the remainder of division." },
      { id: "q5.5", question: "Which operator checks equality?", options: ["=", "==", "!=", ">="], correctAnswer: 1, explanation: "== checks if two values are equal. = is for assignment." },
      { id: "q5.6", question: "What does 'and' operator return if both conditions are True?", options: ["False", "True", "None", "Error"], correctAnswer: 1, explanation: "'and' returns True only if both conditions are True." }
    ]
  },

  // ==================== CHAPTER 6 - CONTROL STRUCTURES ====================
  {
    id: 6,
    title: "Control Structures",
    unitId: 1,
    topics: [
      {
        id: "6.1",
        title: "If Statements",
        subtopics: [
          {
            id: "6.1.1",
            title: "Simple If Statement",
            content: "The if statement executes code only if a condition is True. The condition must be followed by a colon (:), and the code inside must be indented. If the condition is False, the code block is skipped entirely.",
            keyPoints: [
              "if = Execute code block if condition is True",
              "Condition followed by colon (:)",
              "Code inside must be indented (usually 4 spaces)",
              "Nothing happens if condition is False",
              "Comparison operators create conditions"
            ]
          },
          {
            id: "6.1.2",
            title: "If-Else Statement",
            content: "The if-else statement provides two options: one code block if condition is True, another if condition is False. The else block runs when the if condition is False. Only one block executes - never both.",
            keyPoints: [
              "if-else provides two alternative paths",
              "else runs when if condition is False",
              "else also needs colon (:)",
              "Both blocks need proper indentation",
              "Only one block ever executes"
            ]
          },
          {
            id: "6.1.3",
            title: "If-Elif-Else Statement",
            content: "The if-elif-else statement checks multiple conditions in order. It executes the first condition that is True, then skips the rest. 'elif' stands for 'else if'. You can have multiple elif blocks.",
            keyPoints: [
              "elif = 'else if' for checking more conditions",
              "Checks conditions in order from top to bottom",
              "Only first True block executes",
              "else runs if all conditions are False",
              "Can have multiple elif statements"
            ]
          }
        ]
      },
      {
        id: "6.2",
        title: "Loops",
        subtopics: [
          {
            id: "6.2.1",
            title: "For Loop",
            content: "The for loop iterates over a sequence (list, string, range, etc.). It runs the code block for each item in the sequence. range(n) generates numbers from 0 to n-1. Very useful for counted iterations.",
            keyPoints: [
              "for loop = Iterate over sequence items",
              "Runs code block for each item in sequence",
              "range(n) generates 0, 1, 2, ..., n-1",
              "range(start, stop) generates from start to stop-1",
              "Can loop through strings, lists, tuples"
            ]
          },
          {
            id: "6.2.2",
            title: "While Loop",
            content: "The while loop runs as long as a condition is True. The condition is checked before each iteration. Be careful to make the condition False eventually, otherwise it becomes an infinite loop that never stops.",
            keyPoints: [
              "while loop = Run while condition is True",
              "Condition checked before each iteration",
              "Must update condition to avoid infinite loop",
              "May not run at all if condition starts False",
              "Use when number of iterations is unknown"
            ]
          },
          {
            id: "6.2.3",
            title: "Break and Continue",
            content: "break stops the loop immediately and exits. continue skips the current iteration and moves to the next one. Both are used with if statements to control loop execution based on conditions.",
            keyPoints: [
              "break = Stop loop completely, exit immediately",
              "continue = Skip current iteration, continue to next",
              "Both used inside loops with if conditions",
              "break exits the loop entirely",
              "continue jumps to next iteration"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q6.1", question: "What does if statement do?", options: ["Loops code", "Executes code if condition True", "Defines function", "Imports module"], correctAnswer: 1, explanation: "if statement executes code only if the condition is True." },
      { id: "q6.2", question: "What does else do?", options: ["Checks condition", "Runs if condition is False", "Creates loop", "Defines variable"], correctAnswer: 1, explanation: "else runs when the if condition is False." },
      { id: "q6.3", question: "What is elif short for?", options: ["else if", "elif if", "else in", "elif in"], correctAnswer: 0, explanation: "elif is short for 'else if' - it checks another condition." },
      { id: "q6.4", question: "What does for loop iterate over?", options: ["Only numbers", "Only strings", "Any sequence", "Only lists"], correctAnswer: 2, explanation: "for loop can iterate over any sequence: lists, strings, ranges, tuples, etc." },
      { id: "q6.5", question: "When does while loop stop?", options: ["Never", "When condition becomes False", "After 100 iterations", "When break is called"], correctAnswer: 1, explanation: "while loop stops when the condition becomes False." },
      { id: "q6.6", question: "What does break do?", options: ["Skips iteration", "Stops the loop", "Pauses loop", "Continues loop"], correctAnswer: 1, explanation: "break stops the loop immediately." },
      { id: "q6.7", question: "What does continue do?", options: ["Stops the loop", "Skips current iteration", "Ends program", "Restarts loop"], correctAnswer: 1, explanation: "continue skips the current iteration and moves to the next." }
    ]
  },

  // ==================== CHAPTER 7 - PYTHON FUNCTIONS ====================
  {
    id: 7,
    title: "Python Functions",
    unitId: 2,
    topics: [
      {
        id: "7.1",
        title: "Defining Functions",
        subtopics: [
          {
            id: "7.1.1",
            title: "Creating Functions",
            content: "Functions are defined using 'def' keyword. A function groups related code together, making it reusable. Call the function by its name followed by parentheses. The code inside the function only runs when the function is called.",
            keyPoints: [
              "Use 'def' keyword to define function",
              "Function name should describe what it does",
              "Parentheses () after name, colon at end",
              "Code inside must be indented",
              "Function runs only when called"
            ]
          },
          {
            id: "7.1.2",
            title: "Function with Parameters",
            content: "Parameters make functions flexible by accepting input values. List parameters inside parentheses when defining the function. When calling, pass arguments (actual values) that match the parameters. Multiple parameters are separated by commas.",
            keyPoints: [
              "Parameters go inside parentheses in definition",
              "Multiple parameters separated by commas",
              "Arguments are values passed when calling",
              "Parameters act as local variables inside function",
              "Makes functions reusable with different inputs"
            ]
          },
          {
            id: "7.1.3",
            title: "Return Statement",
            content: "The return statement sends a value back from the function. The function stops executing when it reaches return. Use return instead of print for calculations - return gives a usable value, print only displays.",
            keyPoints: [
              "return sends value back to caller",
              "Function stops at return statement",
              "Returned value can be stored in variable",
              "Can use returned value in expressions",
              "return for calculations, print for display"
            ]
          }
        ]
      },
      {
        id: "7.2",
        title: "Special Function Types",
        subtopics: [
          {
            id: "7.2.1",
            title: "Default Arguments",
            content: "Default arguments have preset values. If no value is passed, the default is used. This makes some parameters optional. Default parameters must come after required parameters in the function definition.",
            keyPoints: [
              "Default value assigned in parameter list",
              "Used when argument not provided in call",
              "Makes parameter optional",
              "Default parameters go after required ones",
              "Format: def func(param=default_value)"
            ]
          },
          {
            id: "7.2.2",
            title: "Recursive Functions",
            content: "A recursive function calls itself. It must have a base case (stopping condition) and a recursive case (calling itself with smaller input). Recursion solves problems by breaking them into smaller versions of the same problem.",
            keyPoints: [
              "Recursive function calls itself",
              "Must have base case to stop recursion",
              "Each call should work on smaller problem",
              "Factorial is classic recursion example",
              "Can solve complex problems elegantly"
            ]
          },
          {
            id: "7.2.3",
            title: "Lambda Functions",
            content: "Lambda functions are anonymous (nameless) functions defined in one line. Syntax: lambda parameters: expression. Useful for short, simple operations. Often used as arguments to other functions like map() and filter().",
            keyPoints: [
              "Lambda = Anonymous one-line function",
              "Syntax: lambda params: expression",
              "No 'def' keyword, no name",
              "Useful for short operations",
              "Common with map(), filter(), sorted()"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q7.1", question: "What keyword is used to define a function?", options: ["function", "def", "func", "define"], correctAnswer: 1, explanation: "'def' keyword is used to define a function in Python." },
      { id: "q7.2", question: "What happens when function reaches return?", options: ["Continues running", "Stops and returns value", "Prints value", "Creates error"], correctAnswer: 1, explanation: "Function stops executing when it reaches return statement." },
      { id: "q7.3", question: "What are default arguments?", options: ["Required parameters", "Parameters with preset values", "Return values", "Loop parameters"], correctAnswer: 1, explanation: "Default arguments have preset values used when no argument is provided." },
      { id: "q7.4", question: "What does a recursive function do?", options: ["Calls other functions", "Calls itself", "Returns nothing", "Has no parameters"], correctAnswer: 1, explanation: "A recursive function calls itself." },
      { id: "q7.5", question: "What is essential for recursive function?", options: ["print statement", "Base case", "Multiple parameters", "Global variable"], correctAnswer: 1, explanation: "A recursive function must have a base case to stop recursion." }
    ]
  },

  // ==================== CHAPTER 8 - STRINGS ====================
  {
    id: 8,
    title: "Strings and String Manipulation",
    unitId: 2,
    topics: [
      {
        id: "8.1",
        title: "String Basics",
        subtopics: [
          {
            id: "8.1.1",
            title: "Creating Strings",
            content: "A string is a sequence of characters enclosed in quotes. You can use single quotes (') or double quotes (\"). Triple quotes (''' or \"\"\") allow multi-line strings. Strings are immutable - they cannot be changed after creation.",
            keyPoints: [
              "String = Sequence of characters in quotes",
              "Single quotes: 'Hello' or double: \"World\"",
              "Triple quotes for multi-line strings",
              "Strings are immutable (cannot change)",
              "Empty string '' or \"\" is valid"
            ]
          },
          {
            id: "8.1.2",
            title: "String Indexing",
            content: "Each character has a position called index. Index starts from 0 (first character). Negative index counts from the end: -1 is last character, -2 is second to last. Access characters with square brackets: string[index].",
            keyPoints: [
              "Index starts from 0",
              "Access character with string[index]",
              "Negative index counts from end",
              "-1 is last character",
              "Index must be valid (within string length)"
            ]
          },
          {
            id: "8.1.3",
            title: "String Slicing",
            content: "Slicing extracts a portion of string. Syntax: string[start:end]. Start index is included, end index is excluded. Omit start to slice from beginning. Omit end to slice to end. Step can be added: string[start:end:step].",
            keyPoints: [
              "Slice with string[start:end]",
              "Start included, end excluded",
              "[:5] means from start to index 4",
              "[5:] means from index 5 to end",
              "[::2] gets every second character"
            ]
          }
        ]
      },
      {
        id: "8.2",
        title: "String Methods",
        subtopics: [
          {
            id: "8.2.1",
            title: "Common String Methods",
            content: "Python provides many built-in string methods: upper() converts to uppercase, lower() to lowercase, strip() removes leading/trailing spaces, replace() replaces text, split() divides into list, find() searches for substring.",
            keyPoints: [
              "upper() - Convert to UPPERCASE",
              "lower() - Convert to lowercase",
              "strip() - Remove leading/trailing spaces",
              "replace(old, new) - Replace text",
              "split(delim) - Split into list",
              "find(sub) - Find position of substring"
            ]
          },
          {
            id: "8.2.2",
            title: "String Formatting",
            content: "String formatting inserts values into strings. F-strings (Python 3.6+) are most readable: f\"Text {variable}\". The format() method is older: \"Text {}\".format(value). F-strings can include expressions like calculations.",
            keyPoints: [
              "f-string: f\"Name: {name}, Age: {age}\"",
              "Variables go inside curly braces {}",
              "Can include expressions: f\"Sum: {a+b}\"",
              "Format numbers: f\"{value:.2f}\" for 2 decimals",
              "format() method is older alternative"
            ]
          },
          {
            id: "8.2.3",
            title: "String Concatenation",
            content: "String concatenation joins strings together. Use + operator to join strings. Use * operator to repeat strings. Join list of strings with separator using join() method: separator.join(list).",
            keyPoints: [
              "+ joins strings: 'Hello' + ' ' + 'World'",
              "* repeats: 'Ha' * 3 = 'HaHaHa'",
              "join() joins list: ' '.join(['a','b']) = 'a b'",
              "Cannot concatenate string and number directly",
              "Convert number to string with str() first"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q8.1", question: "How do you create a string?", options: ["Using []", "Using quotes '' or \"\"", "Using {}", "Using ()"], correctAnswer: 1, explanation: "Strings are created using single or double quotes." },
      { id: "q8.2", question: "What is the index of first character?", options: ["1", "0", "-1", "First"], correctAnswer: 1, explanation: "String index starts from 0." },
      { id: "q8.3", question: "What does word[2:5] return?", options: ["Characters at 2,3,4", "Characters at 2,3,4,5", "Characters at 3,4,5", "Character at 2"], correctAnswer: 0, explanation: "Slice [2:5] returns characters at indices 2, 3, 4 (end excluded)." },
      { id: "q8.4", question: "What does upper() do?", options: ["Converts to lowercase", "Converts to uppercase", "Removes spaces", "Splits string"], correctAnswer: 1, explanation: "upper() converts string to uppercase." },
      { id: "q8.5", question: "What is f-string?", options: ["File string", "Formatted string literal", "Function string", "Float string"], correctAnswer: 1, explanation: "f-string is a formatted string literal using f\"text {var}\" syntax." },
      { id: "q8.6", question: "What does strip() do?", options: ["Adds spaces", "Removes leading/trailing spaces", "Splits string", "Joins strings"], correctAnswer: 1, explanation: "strip() removes leading and trailing spaces from string." }
    ]
  },

  // ==================== CHAPTER 9 - LISTS, TUPLES, SETS, DICTIONARY ====================
  {
    id: 9,
    title: "Lists, Tuples, Sets and Dictionary",
    unitId: 3,
    topics: [
      {
        id: "9.1",
        title: "Lists",
        subtopics: [
          {
            id: "9.1.1",
            title: "Creating and Accessing Lists",
            content: "A list is an ordered, mutable collection created with square brackets []. Items can be of different types. Access items by index (starts from 0). len() returns the number of items. Lists can be nested (list inside list).",
            keyPoints: [
              "List = Ordered, mutable collection using []",
              "Index starts from 0, negative from end",
              "Can hold items of different types",
              "len() returns number of items",
              "Lists can contain other lists"
            ]
          },
          {
            id: "9.1.2",
            title: "List Methods",
            content: "Lists have many built-in methods: append() adds to end, insert() adds at position, remove() removes first occurrence, pop() removes and returns item, sort() sorts in place, reverse() reverses order, clear() removes all items.",
            keyPoints: [
              "append(x) - Add item to end",
              "insert(i, x) - Insert item at index i",
              "remove(x) - Remove first occurrence of x",
              "pop() - Remove and return last item",
              "sort() - Sort in ascending order",
              "reverse() - Reverse the order"
            ]
          }
        ]
      },
      {
        id: "9.2",
        title: "Tuples",
        subtopics: [
          {
            id: "9.2.1",
            title: "Working with Tuples",
            content: "A tuple is an ordered, IMMUTABLE collection using parentheses (). Once created, cannot be changed. Faster than lists. Used for fixed data that shouldn't change. Tuple unpacking assigns values to variables.",
            keyPoints: [
              "Tuple = Ordered, immutable collection using ()",
              "Cannot be changed after creation",
              "Faster and safer than lists",
              "Single item tuple needs comma: (5,)",
              "Unpacking: a, b = (1, 2)"
            ]
          }
        ]
      },
      {
        id: "9.3",
        title: "Sets",
        subtopics: [
          {
            id: "9.3.1",
            title: "Working with Sets",
            content: "A set is an unordered collection of UNIQUE items using curly braces {}. Duplicates are automatically removed. Useful for membership testing and removing duplicates. Supports mathematical set operations like union and intersection.",
            keyPoints: [
              "Set = Unordered collection of unique items",
              "Created with {} or set()",
              "Duplicates are automatically removed",
              "add() to add, remove() to remove items",
              "| union, & intersection, - difference"
            ]
          }
        ]
      },
      {
        id: "9.4",
        title: "Dictionary",
        subtopics: [
          {
            id: "9.4.1",
            title: "Working with Dictionaries",
            content: "A dictionary stores data in KEY-VALUE pairs using curly braces {key: value}. Keys must be unique and immutable (strings, numbers, tuples). Access values by key, not index. keys(), values(), items() return views of dictionary contents.",
            keyPoints: [
              "Dictionary = Key-value pairs using {key: value}",
              "Access values by key: dict['key']",
              "Keys must be unique and immutable",
              "keys() returns all keys",
              "values() returns all values",
              "items() returns key-value pairs"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q9.1", question: "Which is used to create a list?", options: ["()", "{}", "[]", "<>"], correctAnswer: 2, explanation: "Lists are created using square brackets []." },
      { id: "q9.2", question: "What does append() do?", options: ["Inserts at beginning", "Adds to end", "Removes item", "Sorts list"], correctAnswer: 1, explanation: "append() adds an item to the end of a list." },
      { id: "q9.3", question: "What is the main feature of tuple?", options: ["Mutable", "Immutable", "Unordered", "Unique items"], correctAnswer: 1, explanation: "Tuples are immutable - cannot be changed after creation." },
      { id: "q9.4", question: "What is the main feature of set?", options: ["Ordered", "Mutable", "Unique items only", "Indexed"], correctAnswer: 2, explanation: "Sets contain only unique items - no duplicates." },
      { id: "q9.5", question: "How do you access dictionary values?", options: ["By index", "By key", "By position", "By value"], correctAnswer: 1, explanation: "Dictionary values are accessed by their keys." },
      { id: "q9.6", question: "What does list.sort() do?", options: ["Reverses list", "Sorts in ascending order", "Removes duplicates", "Clears list"], correctAnswer: 1, explanation: "sort() arranges list items in ascending order." }
    ]
  },

  // ==================== CHAPTER 10 - CLASSES AND OBJECTS ====================
  {
    id: 10,
    title: "Python Classes and Objects",
    unitId: 3,
    topics: [
      {
        id: "10.1",
        title: "Classes and Objects",
        subtopics: [
          {
            id: "10.1.1",
            title: "What is a Class?",
            content: "A class is a blueprint for creating objects. It defines what data (attributes) and actions (methods) objects will have. Think of class as a cookie cutter, objects as cookies made from it. Classes bundle data and functions together.",
            keyPoints: [
              "Class = Blueprint/template for objects",
              "Use 'class' keyword to define",
              "Contains attributes (data) and methods (functions)",
              "Class is like cookie cutter, objects are cookies",
              "Defines structure and behavior"
            ]
          },
          {
            id: "10.1.2",
            title: "Creating Objects",
            content: "An object is an instance of a class. Create objects by calling the class name like a function. Each object has its own copy of attributes. Access attributes and methods using dot notation: object.attribute, object.method().",
            keyPoints: [
              "Object = Instance of a class",
              "Create by calling class: obj = ClassName()",
              "Each object has own copy of data",
              "Access with dot: object.attribute",
              "Call methods with: object.method()"
            ]
          },
          {
            id: "10.1.3",
            title: "Constructor (__init__)",
            content: "The __init__ method is the constructor that initializes object attributes. It runs automatically when an object is created. 'self' parameter refers to the current object. Use self.attribute to set object's data.",
            keyPoints: [
              "__init__ = Constructor method",
              "Runs automatically when object created",
              "'self' refers to current object",
              "self.attribute sets object's data",
              "Parameters after self receive initialization values"
            ]
          },
          {
            id: "10.1.4",
            title: "Public and Private Variables",
            content: "Variables starting with __ (double underscore) are private - cannot be accessed directly outside class. Variables without __ are public. Private variables enforce encapsulation - data can only be accessed through methods.",
            keyPoints: [
              "__variable = Private (hidden outside class)",
              "variable = Public (accessible anywhere)",
              "Private variables enforce encapsulation",
              "Access private data through methods",
              "Protects data from direct modification"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q10.1", question: "What is a class?", options: ["An object", "A blueprint for objects", "A function", "A variable"], correctAnswer: 1, explanation: "A class is a blueprint or template for creating objects." },
      { id: "q10.2", question: "What is __init__?", options: ["A variable", "A constructor", "A method", "An object"], correctAnswer: 1, explanation: "__init__ is the constructor method that initializes object attributes." },
      { id: "q10.3", question: "What does 'self' refer to?", options: ["The class", "Current object", "Parent class", "A variable"], correctAnswer: 1, explanation: "'self' refers to the current object instance." },
      { id: "q10.4", question: "How are private variables indicated?", options: ["Single underscore", "Double underscore __", "No underscore", "Dollar sign"], correctAnswer: 1, explanation: "Variables starting with __ (double underscore) are private." },
      { id: "q10.5", question: "What is an object?", options: ["A class", "An instance of a class", "A function", "A variable"], correctAnswer: 1, explanation: "An object is an instance of a class." }
    ]
  },

  // ==================== CHAPTER 11 - DATABASE CONCEPTS ====================
  {
    id: 11,
    title: "Database Concepts",
    unitId: 4,
    topics: [
      {
        id: "11.1",
        title: "Introduction to Databases",
        subtopics: [
          {
            id: "11.1.1",
            title: "What is a Database?",
            content: "A database is an organized collection of data stored electronically. DBMS (Database Management System) is software that manages databases. Examples: MySQL, SQLite, Oracle, PostgreSQL. Data is organized into tables for efficient storage and retrieval.",
            keyPoints: [
              "Database = Organized collection of data",
              "DBMS = Software to manage databases",
              "Examples: MySQL, SQLite, Oracle",
              "Data organized in tables",
              "Allows efficient storage and retrieval"
            ]
          },
          {
            id: "11.1.2",
            title: "Database Terminology",
            content: "Table = Collection of related records (like a spreadsheet). Record (Row) = Single entry in table. Field (Column) = Category of data. Primary Key = Unique identifier for each record. Foreign Key = Links to primary key in another table.",
            keyPoints: [
              "Table = Collection of related records",
              "Record/Row = Single entry (one row)",
              "Field/Column = Category of data",
              "Primary Key = Unique identifier",
              "Foreign Key = Links to another table"
            ]
          },
          {
            id: "11.1.3",
            title: "Relational Database",
            content: "A relational database organizes data into tables that are related to each other. Tables are connected using keys (primary key and foreign key). This reduces data redundancy and ensures data integrity. SQL is used to interact with relational databases.",
            keyPoints: [
              "Relational database = Tables connected by keys",
              "Primary Key uniquely identifies each record",
              "Foreign Key references another table's primary key",
              "Reduces data redundancy",
              "SQL = Structured Query Language"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q11.1", question: "What is a database?", options: ["A programming language", "An organized collection of data", "A type of software", "A computer"], correctAnswer: 1, explanation: "A database is an organized collection of data stored electronically." },
      { id: "q11.2", question: "What is a table in database?", options: ["A piece of furniture", "Collection of related records", "A single entry", "A category"], correctAnswer: 1, explanation: "A table is a collection of related records (rows)." },
      { id: "q11.3", question: "What is a primary key?", options: ["A duplicate value", "A unique identifier", "A foreign key", "A column name"], correctAnswer: 1, explanation: "A primary key is a unique identifier for each record." },
      { id: "q11.4", question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management System", "Database Manipulation System", "Data Management Software"], correctAnswer: 0, explanation: "DBMS stands for Database Management System." }
    ]
  },

  // ==================== CHAPTER 12 - SQL ====================
  {
    id: 12,
    title: "Structured Query Language (SQL)",
    unitId: 4,
    topics: [
      {
        id: "12.1",
        title: "SQL Basics",
        subtopics: [
          {
            id: "12.1.1",
            title: "SELECT Statement",
            content: "SELECT retrieves data from database. SELECT * FROM table gets all columns. SELECT column1, column2 FROM table gets specific columns. WHERE clause filters results. ORDER BY sorts results. AND/OR combine multiple conditions.",
            keyPoints: [
              "SELECT = Retrieve data from table",
              "* = All columns",
              "FROM table = Specify table name",
              "WHERE condition = Filter results",
              "ORDER BY column = Sort results"
            ]
          },
          {
            id: "12.1.2",
            title: "INSERT, UPDATE, DELETE",
            content: "INSERT adds new records: INSERT INTO table (columns) VALUES (values). UPDATE modifies existing records: UPDATE table SET column = value WHERE condition. DELETE removes records: DELETE FROM table WHERE condition. Always use WHERE clause with UPDATE and DELETE!",
            keyPoints: [
              "INSERT INTO table VALUES (...) - Add records",
              "UPDATE table SET column = value - Modify records",
              "DELETE FROM table WHERE condition - Remove records",
              "Always use WHERE with UPDATE/DELETE",
              "Without WHERE, affects ALL records!"
            ]
          },
          {
            id: "12.1.3",
            title: "CREATE and DROP",
            content: "CREATE makes new tables or databases. CREATE DATABASE name. CREATE TABLE name (column definitions). DROP removes tables or databases. DROP TABLE name removes table and all its data. Be careful - DROP is permanent!",
            keyPoints: [
              "CREATE DATABASE name - Create database",
              "CREATE TABLE name (columns) - Create table",
              "Column format: name TYPE (e.g., id INTEGER)",
              "DROP TABLE name - Delete table permanently",
              "DROP DATABASE name - Delete database"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q12.1", question: "Which SQL command retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correctAnswer: 2, explanation: "SELECT is used to retrieve data from a database." },
      { id: "q12.2", question: "Which clause filters results in SELECT?", options: ["FROM", "WHERE", "INTO", "SET"], correctAnswer: 1, explanation: "WHERE clause filters the results of a SELECT statement." },
      { id: "q12.3", question: "Which command adds new records?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], correctAnswer: 1, explanation: "INSERT adds new records to a table." },
      { id: "q12.4", question: "Which command modifies existing records?", options: ["SELECT", "INSERT", "UPDATE", "CREATE"], correctAnswer: 2, explanation: "UPDATE modifies existing records in a table." },
      { id: "q12.5", question: "Which command creates a new table?", options: ["INSERT", "CREATE", "SELECT", "DROP"], correctAnswer: 1, explanation: "CREATE TABLE creates a new table in the database." },
      { id: "q12.6", question: "What does DROP do?", options: ["Creates table", "Modifies table", "Deletes table", "Selects table"], correctAnswer: 2, explanation: "DROP removes/deletes a table or database permanently." }
    ]
  },

  // ==================== CHAPTER 13 - CSV FILES ====================
  {
    id: 13,
    title: "Python and CSV Files",
    unitId: 4,
    topics: [
      {
        id: "13.1",
        title: "Working with CSV Files",
        subtopics: [
          {
            id: "13.1.1",
            title: "What is CSV?",
            content: "CSV (Comma Separated Values) is a simple file format for storing tabular data. Each line is a row, values separated by commas. First line often contains column headers. Python's csv module handles CSV files easily. Open files with 'r' for reading, 'w' for writing.",
            keyPoints: [
              "CSV = Comma Separated Values",
              "Simple format for tabular data",
              "Each line = one row",
              "Values separated by commas",
              "csv module handles CSV files in Python"
            ]
          },
          {
            id: "13.1.2",
            title: "Reading CSV Files",
            content: "Use csv.reader() to read CSV files. Open file with open() in 'r' mode. Each row is returned as a list of strings. Use next() to skip header row. Can iterate through rows with for loop.",
            keyPoints: [
              "import csv module first",
              "open('file.csv', 'r') opens for reading",
              "csv.reader(file) creates reader object",
              "Each row is a list of strings",
              "for row in reader: processes each row"
            ]
          },
          {
            id: "13.1.3",
            title: "Writing CSV Files",
            content: "Use csv.writer() to write CSV files. Open file with 'w' mode and newline=''. writerow() writes single row. writerows() writes multiple rows. Data must be in list format for writerow.",
            keyPoints: [
              "open('file.csv', 'w', newline='') for writing",
              "csv.writer(file) creates writer object",
              "writerow([row_data]) writes one row",
              "writerows(list_of_rows) writes multiple rows",
              "newline='' prevents blank lines on Windows"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q13.1", question: "What does CSV stand for?", options: ["Computer Separated Values", "Comma Separated Values", "Column Separated Values", "Code Separated Values"], correctAnswer: 1, explanation: "CSV stands for Comma Separated Values." },
      { id: "q13.2", question: "Which module is used for CSV files?", options: ["file", "csv", "data", "table"], correctAnswer: 1, explanation: "Python's built-in csv module is used for CSV files." },
      { id: "q13.3", question: "Which function reads CSV?", options: ["csv.read()", "csv.reader()", "csv.open()", "csv.load()"], correctAnswer: 1, explanation: "csv.reader() is used to read CSV files." },
      { id: "q13.4", question: "Which function writes to CSV?", options: ["csv.write()", "csv.writer()", "csv.save()", "csv.output()"], correctAnswer: 1, explanation: "csv.writer() creates a writer object for writing to CSV." }
    ]
  },

  // ==================== CHAPTER 14 - C++ INTEGRATION ====================
  {
    id: 14,
    title: "Importing C++ Programs in Python",
    unitId: 5,
    topics: [
      {
        id: "14.1",
        title: "Running C++ from Python",
        subtopics: [
          {
            id: "14.1.1",
            title: "Using os.system()",
            content: "Python can run C++ programs using the os module. os.system() executes shell commands. First compile C++ with g++ compiler, then run the executable. This allows integrating existing C++ code with Python programs.",
            keyPoints: [
              "import os for system commands",
              "os.system('command') runs shell command",
              "g++ file.cpp -o output compiles C++",
              "./output runs the compiled program",
              "Can combine: os.system('g++ file.cpp -o out && ./out')"
            ]
          },
          {
            id: "14.1.2",
            title: "Error Handling",
            content: "When running C++ from Python, errors in C++ compilation or execution are displayed. Python shows the compiler errors if C++ code has syntax errors. The subprocess module provides better control over external programs.",
            keyPoints: [
              "Compilation errors shown if C++ has bugs",
              "Runtime errors from C++ also displayed",
              "subprocess module for better control",
              "Can capture output with subprocess",
              "Useful for integrating existing C++ code"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q14.1", question: "Which module runs system commands?", options: ["sys", "os", "cmd", "run"], correctAnswer: 1, explanation: "The os module provides system() function to run commands." },
      { id: "q14.2", question: "What does g++ do?", options: ["Runs Python", "Compiles C++", "Creates database", "Opens file"], correctAnswer: 1, explanation: "g++ is a C++ compiler that converts C++ code to executable." }
    ]
  },

  // ==================== CHAPTER 15 - SQL WITH PYTHON ====================
  {
    id: 15,
    title: "Data Manipulation through SQL",
    unitId: 5,
    topics: [
      {
        id: "15.1",
        title: "SQLite with Python",
        subtopics: [
          {
            id: "15.1.1",
            title: "Connecting to SQLite",
            content: "Python has built-in sqlite3 module for database operations. Connect to database with sqlite3.connect('file.db'). Create cursor for executing SQL. Execute SQL commands with cursor.execute(). Commit changes to save. Close connection when done.",
            keyPoints: [
              "import sqlite3 module",
              "connect('file.db') creates/connects database",
              "cursor() creates cursor for SQL execution",
              "execute('SQL') runs SQL command",
              "commit() saves changes",
              "close() closes connection"
            ]
          },
          {
            id: "15.1.2",
            title: "Querying Data",
            content: "Use cursor.execute() with SELECT statement to query data. fetchone() gets one row. fetchall() gets all rows. Results are returned as tuples. Use parameterized queries with ? to prevent SQL injection.",
            keyPoints: [
              "execute('SELECT * FROM table') queries data",
              "fetchone() returns one row as tuple",
              "fetchall() returns all rows as list of tuples",
              "fetchmany(n) returns n rows",
              "Use ? placeholders for safe queries"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q15.1", question: "Which module connects to SQLite?", options: ["sql", "sqlite", "sqlite3", "database"], correctAnswer: 2, explanation: "sqlite3 is Python's built-in module for SQLite databases." },
      { id: "q15.2", question: "What does cursor.execute() do?", options: ["Connects to DB", "Runs SQL command", "Closes DB", "Creates table"], correctAnswer: 1, explanation: "cursor.execute() runs SQL commands on the database." },
      { id: "q15.3", question: "What does commit() do?", options: ["Connects to DB", "Runs query", "Saves changes", "Closes connection"], correctAnswer: 2, explanation: "commit() saves/permanently applies changes to the database." }
    ]
  },

  // ==================== CHAPTER 16 - DATA VISUALIZATION ====================
  {
    id: 16,
    title: "Data Visualization using Pyplot",
    unitId: 5,
    topics: [
      {
        id: "16.1",
        title: "Creating Charts",
        subtopics: [
          {
            id: "16.1.1",
            title: "Line Chart",
            content: "matplotlib.pyplot creates charts. plot(x, y) creates line chart. xlabel() and ylabel() set axis labels. title() sets chart title. show() displays the chart. Line charts show trends over time or continuous data.",
            keyPoints: [
              "import matplotlib.pyplot as plt",
              "plt.plot(x, y) creates line chart",
              "plt.xlabel('label') sets x-axis label",
              "plt.title('title') sets chart title",
              "plt.show() displays the chart"
            ]
          },
          {
            id: "16.1.2",
            title: "Bar Chart",
            content: "Bar charts compare values across categories. bar(x, y) creates vertical bars. barh(x, y) creates horizontal bars. Can add color parameter. Bar charts are good for comparing discrete categories.",
            keyPoints: [
              "plt.bar(categories, values) for vertical bars",
              "plt.barh(categories, values) for horizontal bars",
              "color='red' sets bar color",
              "width=0.5 sets bar width",
              "Good for comparing categories"
            ]
          },
          {
            id: "16.1.3",
            title: "Pie Chart",
            content: "Pie charts show proportions of a whole. pie(values, labels=labels) creates pie chart. autopct='%.1f%%' shows percentages. explode separates slices. Each slice represents a category's share.",
            keyPoints: [
              "plt.pie(values, labels=labels) creates pie chart",
              "autopct='%1.1f%%' displays percentages",
              "explode=(0, 0.1, 0) separates second slice",
              "colors=['red', 'blue'] sets colors",
              "Shows parts of a whole"
            ]
          },
          {
            id: "16.1.4",
            title: "Saving Charts",
            content: "savefig('filename.png') saves chart to file. Can save as PNG, PDF, SVG, JPG. Call savefig() before show(). dpi parameter sets resolution. bbox_inches='tight' prevents cutoff.",
            keyPoints: [
              "plt.savefig('chart.png') saves to file",
              "Supports PNG, PDF, SVG, JPG formats",
              "Call savefig() before show()",
              "dpi=300 sets high resolution",
              "bbox_inches='tight' prevents cutoff"
            ]
          }
        ]
      }
    ],
    quiz: [
      { id: "q16.1", question: "Which module is used for charts?", options: ["chart", "plot", "matplotlib.pyplot", "graph"], correctAnswer: 2, explanation: "matplotlib.pyplot is used for creating charts and graphs." },
      { id: "q16.2", question: "Which function creates a line chart?", options: ["line()", "chart()", "plot()", "graph()"], correctAnswer: 2, explanation: "plot(x, y) creates a line chart in matplotlib." },
      { id: "q16.3", question: "Which function creates a bar chart?", options: ["plot()", "bar()", "pie()", "hist()"], correctAnswer: 1, explanation: "bar(x, y) creates a bar chart." },
      { id: "q16.4", question: "Which function creates a pie chart?", options: ["circle()", "slice()", "pie()", "round()"], correctAnswer: 2, explanation: "pie(values, labels=) creates a pie chart." },
      { id: "q16.5", question: "What does plt.show() do?", options: ["Saves chart", "Displays chart", "Closes chart", "Clears chart"], correctAnswer: 1, explanation: "plt.show() displays the chart on screen." }
    ]
  }
];

// Flashcard data - 100 Python terms
export const pythonFlashcards = [
  { term: "Variable", definition: "A container for storing data values. Created by assigning a value to a name." },
  { term: "Function", definition: "A block of code that performs a specific task. Defined using 'def' keyword." },
  { term: "List", definition: "An ordered, mutable collection of items. Created using square brackets []." },
  { term: "Tuple", definition: "An ordered, immutable collection of items. Created using parentheses ()." },
  { term: "Dictionary", definition: "A collection of key-value pairs. Created using curly braces {key: value}." },
  { term: "Set", definition: "An unordered collection of unique items. Created using curly braces {}." },
  { term: "String", definition: "A sequence of characters. Created using quotes '' or \"\"." },
  { term: "Integer", definition: "A whole number without decimal. Example: 5, -10, 100." },
  { term: "Float", definition: "A number with decimal. Example: 3.14, -2.5, 0.0." },
  { term: "Boolean", definition: "A value that is either True or False." },
  { term: "if statement", definition: "Executes code only if a condition is True." },
  { term: "else", definition: "Executes code when the if condition is False." },
  { term: "elif", definition: "Stands for 'else if'. Checks another condition." },
  { term: "for loop", definition: "Iterates over a sequence (list, string, range)." },
  { term: "while loop", definition: "Repeats code as long as condition is True." },
  { term: "break", definition: "Stops the loop immediately." },
  { term: "continue", definition: "Skips current iteration, continues to next." },
  { term: "def", definition: "Keyword used to define a function." },
  { term: "return", definition: "Sends a value back from a function." },
  { term: "class", definition: "A blueprint for creating objects. Defines attributes and methods." },
  { term: "object", definition: "An instance of a class with its own data." },
  { term: "self", definition: "Refers to the current object in a class method." },
  { term: "__init__", definition: "Constructor method that initializes object attributes." },
  { term: "import", definition: "Brings modules or libraries into your program." },
  { term: "Parameter", definition: "Variable in function definition that receives values." },
  { term: "Argument", definition: "Actual value passed to a function when called." },
  { term: "Scope", definition: "Where a variable can be accessed in a program." },
  { term: "Local variable", definition: "Variable defined inside a function. Only accessible there." },
  { term: "Global variable", definition: "Variable defined outside functions. Accessible everywhere." },
  { term: "Recursion", definition: "When a function calls itself." },
  { term: "Base case", definition: "Condition that stops recursion." },
  { term: "Index", definition: "Position of an item in a sequence. Starts from 0." },
  { term: "Slice", definition: "Extracting a portion of a sequence using [start:end]." },
  { term: "Method", definition: "A function that belongs to an object." },
  { term: "Attribute", definition: "A variable that belongs to an object." },
  { term: "append()", definition: "Adds an item to the end of a list." },
  { term: "pop()", definition: "Removes and returns the last item from a list." },
  { term: "len()", definition: "Returns the length (number of items) of an object." },
  { term: "print()", definition: "Outputs text or values to the console." },
  { term: "input()", definition: "Gets user input as a string." },
  { term: "range()", definition: "Generates a sequence of numbers." },
  { term: "type()", definition: "Returns the data type of a value." },
  { term: "int()", definition: "Converts a value to integer." },
  { term: "str()", definition: "Converts a value to string." },
  { term: "float()", definition: "Converts a value to float (decimal number)." },
  { term: "upper()", definition: "Converts string to uppercase." },
  { term: "lower()", definition: "Converts string to lowercase." },
  { term: "strip()", definition: "Removes leading and trailing spaces from string." },
  { term: "split()", definition: "Splits a string into a list by a delimiter." },
  { term: "join()", definition: "Joins list items into a string with a separator." },
  { term: "sort()", definition: "Sorts a list in ascending order." },
  { term: "reverse()", definition: "Reverses the order of items in a list." },
  { term: "SELECT", definition: "SQL command to retrieve data from a database." },
  { term: "INSERT", definition: "SQL command to add new records to a table." },
  { term: "UPDATE", definition: "SQL command to modify existing records." },
  { term: "DELETE", definition: "SQL command to remove records from a table." },
  { term: "CREATE", definition: "SQL command to create new tables or databases." },
  { term: "DROP", definition: "SQL command to delete tables or databases." },
  { term: "WHERE", definition: "SQL clause to filter results based on condition." },
  { term: "FROM", definition: "SQL clause to specify the table to query." },
  { term: "Primary Key", definition: "A unique identifier for each record in a table." },
  { term: "Foreign Key", definition: "A field that links to the primary key of another table." },
  { term: "CSV", definition: "Comma Separated Values - simple file format for tabular data." },
  { term: "Database", definition: "An organized collection of data stored electronically." },
  { term: "Table", definition: "A collection of related records in a database." },
  { term: "Record", definition: "A single row in a database table." },
  { term: "Field", definition: "A single column in a database table." },
  { term: "Abstraction", definition: "Hiding complex details and showing only essentials." },
  { term: "Encapsulation", definition: "Bundling data and methods that work on the data." },
  { term: "ADT", definition: "Abstract Data Type - defines what operations exist, not how they work." },
  { term: "Algorithm", definition: "A step-by-step procedure to solve a problem." },
  { term: "Time Complexity", definition: "How the runtime of an algorithm grows with input size." },
  { term: "Linear Search", definition: "Search algorithm that checks each item one by one." },
  { term: "Binary Search", definition: "Fast search on sorted data by dividing in half repeatedly." },
  { term: "Bubble Sort", definition: "Simple sorting algorithm that swaps adjacent elements." },
  { term: "Selection Sort", definition: "Sorting algorithm that finds minimum and places at start." },
  { term: "GCD", definition: "Greatest Common Divisor - largest number dividing two numbers." },
  { term: "LEGB Rule", definition: "Local, Enclosing, Global, Built-in - Python's scope resolution order." },
  { term: "Pure Function", definition: "Function that always returns same output for same input." },
  { term: "Impure Function", definition: "Function that may return different outputs or has side effects." },
  { term: "Side Effect", definition: "When a function modifies something outside its scope." },
  { term: "Constructor", definition: "Function that creates new objects." },
  { term: "Selector", definition: "Function that retrieves data from an object." },
  { term: "Interface", definition: "Defines what a function/object can do, not how." },
  { term: "Implementation", definition: "The actual code that makes a function work." },
  { term: "Module", definition: "A file containing Python code that can be imported." },
  { term: "Package", definition: "A collection of related Python modules." },
  { term: "Exception", definition: "An error that occurs during program execution." },
  { term: "try/except", definition: "Python's way to handle exceptions/errors." },
  { term: "lambda", definition: "Anonymous function defined in a single line." },
  { term: "List Comprehension", definition: "Concise way to create lists: [x for x in iterable]" },
  { term: "f-string", definition: "Formatted string literal: f\"text {variable}\"" },
  { term: "None", definition: "Python's representation of null/no value." },
  { term: "True", definition: "Boolean value representing truth." },
  { term: "False", definition: "Boolean value representing falsehood." },
  { term: "and", definition: "Logical operator - returns True if both conditions are True." },
  { term: "or", definition: "Logical operator - returns True if at least one condition is True." },
  { term: "not", definition: "Logical operator - reverses the Boolean value." },
  { term: "==", definition: "Comparison operator - checks if two values are equal." },
  { term: "!=", definition: "Comparison operator - checks if two values are not equal." },
  { term: "<", definition: "Comparison operator - less than." },
  { term: ">", definition: "Comparison operator - greater than." },
  { term: "<=", definition: "Comparison operator - less than or equal to." },
  { term: ">=", definition: "Comparison operator - greater than or equal to." },
  { term: "+", definition: "Arithmetic operator - addition." },
  { term: "-", definition: "Arithmetic operator - subtraction." },
  { term: "*", definition: "Arithmetic operator - multiplication." },
  { term: "/", definition: "Arithmetic operator - division (returns float)." },
  { term: "//", definition: "Arithmetic operator - floor division (returns integer)." },
  { term: "%", definition: "Arithmetic operator - modulus (remainder)." },
  { term: "**", definition: "Arithmetic operator - exponentiation (power)." }
];

// Default progress
export const defaultProgress = {
  xp: 0,
  level: 1,
  completedLessons: [],
  completedTopics: [],
  completedQuizzes: [],
  badges: [],
  streak: 0,
  lastStudyDate: null
};

export type UserProgress = typeof defaultProgress;

// Unit Quiz Questions
export const unitQuizzes: { [unitId: number]: QuizQuestion[] } = {
  1: [
    { id: "u1q1", question: "What keyword is used to define a function?", options: ["function", "def", "func", "define"], correctAnswer: 1, explanation: "'def' keyword is used to define a function in Python." },
    { id: "u1q2", question: "What is data abstraction?", options: ["Showing all details", "Hiding details and showing essentials", "Creating variables", "Writing functions"], correctAnswer: 1, explanation: "Data abstraction hides complex details and shows only what's necessary." },
    { id: "u1q3", question: "What does L stand for in LEGB?", options: ["Large", "Local", "Long", "Loop"], correctAnswer: 1, explanation: "L stands for Local scope (inside current function)." },
    { id: "u1q4", question: "What is an algorithm?", options: ["A programming language", "Step-by-step problem solving procedure", "A variable type", "A loop structure"], correctAnswer: 1, explanation: "An algorithm is a step-by-step procedure to solve a problem." },
    { id: "u1q5", question: "What does // operator do?", options: ["Division", "Floor division", "Remainder", "Power"], correctAnswer: 1, explanation: "// performs floor division, returning the integer part of the quotient." },
    { id: "u1q6", question: "What does break do?", options: ["Skips iteration", "Stops the loop", "Pauses loop", "Continues loop"], correctAnswer: 1, explanation: "break stops the loop immediately." }
  ],
  2: [
    { id: "u2q1", question: "What keyword is used to define a function?", options: ["function", "def", "func", "define"], correctAnswer: 1, explanation: "'def' keyword is used to define a function in Python." },
    { id: "u2q2", question: "What does return do?", options: ["Prints a value", "Sends value back from function", "Defines a variable", "Creates a loop"], correctAnswer: 1, explanation: "return sends a value back from the function to the caller." },
    { id: "u2q3", question: "How do you create a string?", options: ["Using []", "Using quotes '' or \"\"", "Using {}", "Using ()"], correctAnswer: 1, explanation: "Strings are created using single or double quotes." },
    { id: "u2q4", question: "What does upper() do?", options: ["Converts to lowercase", "Converts to uppercase", "Removes spaces", "Splits string"], correctAnswer: 1, explanation: "upper() converts string to uppercase." }
  ],
  3: [
    { id: "u3q1", question: "Which is used to create a list?", options: ["()", "{}", "[]", "<>"], correctAnswer: 2, explanation: "Lists are created using square brackets []." },
    { id: "u3q2", question: "What is the main feature of tuple?", options: ["Mutable", "Immutable", "Unordered", "Unique items"], correctAnswer: 1, explanation: "Tuples are immutable - cannot be changed after creation." },
    { id: "u3q3", question: "What is a class?", options: ["An object", "A blueprint for objects", "A function", "A variable"], correctAnswer: 1, explanation: "A class is a blueprint or template for creating objects." },
    { id: "u3q4", question: "What is __init__?", options: ["A variable", "A constructor", "A method", "An object"], correctAnswer: 1, explanation: "__init__ is the constructor method that initializes object attributes." }
  ],
  4: [
    { id: "u4q1", question: "What is a database?", options: ["A programming language", "An organized collection of data", "A type of software", "A computer"], correctAnswer: 1, explanation: "A database is an organized collection of data stored electronically." },
    { id: "u4q2", question: "Which SQL command retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correctAnswer: 2, explanation: "SELECT is used to retrieve data from a database." },
    { id: "u4q3", question: "What does CSV stand for?", options: ["Computer Separated Values", "Comma Separated Values", "Column Separated Values", "Code Separated Values"], correctAnswer: 1, explanation: "CSV stands for Comma Separated Values." }
  ],
  5: [
    { id: "u5q1", question: "Which module runs system commands?", options: ["sys", "os", "cmd", "run"], correctAnswer: 1, explanation: "The os module provides system() function to run commands." },
    { id: "u5q2", question: "Which module connects to SQLite?", options: ["sql", "sqlite", "sqlite3", "database"], correctAnswer: 2, explanation: "sqlite3 is Python's built-in module for SQLite databases." },
    { id: "u5q3", question: "Which function creates a line chart?", options: ["line()", "chart()", "plot()", "graph()"], correctAnswer: 2, explanation: "plot(x, y) creates a line chart in matplotlib." }
  ]
};

// Final Exam Questions
export const finalExamQuestions: QuizQuestion[] = [
  { id: "f1", question: "What keyword is used to define a function in Python?", options: ["function", "def", "func", "define"], correctAnswer: 1, explanation: "'def' keyword is used to define a function in Python." },
  { id: "f2", question: "What is data abstraction?", options: ["Showing all details", "Hiding details and showing essentials", "Creating variables", "Writing functions"], correctAnswer: 1, explanation: "Data abstraction hides complex details and shows only what's necessary." },
  { id: "f3", question: "What does LEGB stand for?", options: ["Loop, Exception, Global, Built-in", "Local, Enclosing, Global, Built-in", "Local, External, Global, Base", "Loop, Enclosing, General, Built-in"], correctAnswer: 1, explanation: "LEGB stands for Local, Enclosing, Global, Built-in scope resolution." },
  { id: "f4", question: "What is the time complexity of Binary Search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correctAnswer: 2, explanation: "Binary Search has time complexity O(log n)." },
  { id: "f5", question: "Which is used to create a list?", options: ["()", "{}", "[]", "<>"], correctAnswer: 2, explanation: "Lists are created using square brackets []." },
  { id: "f6", question: "What is the main feature of tuple?", options: ["Mutable", "Immutable", "Unordered", "Unique items"], correctAnswer: 1, explanation: "Tuples are immutable - cannot be changed after creation." },
  { id: "f7", question: "What does a constructor do?", options: ["Removes data", "Creates objects", "Prints data", "Deletes objects"], correctAnswer: 1, explanation: "Constructors are functions that create new data objects." },
  { id: "f8", question: "Which SQL command retrieves data?", options: ["INSERT", "UPDATE", "SELECT", "DELETE"], correctAnswer: 2, explanation: "SELECT is used to retrieve data from a database." },
  { id: "f9", question: "What does CSV stand for?", options: ["Computer Separated Values", "Comma Separated Values", "Column Separated Values", "Code Separated Values"], correctAnswer: 1, explanation: "CSV stands for Comma Separated Values." },
  { id: "f10", question: "Which function creates a bar chart?", options: ["plot()", "bar()", "pie()", "hist()"], correctAnswer: 1, explanation: "bar(x, y) creates a bar chart." }
];
