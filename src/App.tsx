import { Button } from "#components/ui/button"
import { NavLink } from "react-router"

function App() {
    return (
        <div className="bg-linear-to-br from-gray-900 to-green-600 h-screen w-screen">
            <div className=' text-white p-10 container h-fit m-auto'>
                <h1 className="text-7xl pb-5">Welcome to my template!</h1>
                <h1 className="text-muted pb-5">This is a template for starting a project with Typescript, React, Vite, React Router, TailwindCSS, Shadcn. Delete the code in <span className="monospace">main.tsx</span> and start making your project</h1>

                {/* https://reactrouter.com/start/declarative/navigating 
                    <Link> can't generate an active state, <NavLink> can
                */}
                <NavLink to="/about">
                    <Button variant={"default"} className="p-4 active:bg-blue-500">About</Button>
                </NavLink>
            </div>
        </div>
    )
}

export default App
