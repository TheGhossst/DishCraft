import { NavBar } from "./components/NavBar"
import { IngredientsForm } from './components/IngredientsForm'

export function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="container mx-auto max-w-2xl space-y-8 p-4">
        <IngredientsForm />
      </main>
    </div>
  )
}