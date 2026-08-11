import { Button } from "#components/ui/button";
import { NavLink } from "react-router";

export default function About() {
    return (
        <div className="bg-linear-to-br from-gray-900 to-green-600 h-screen w-screen">
            <div className=' text-white p-10 container h-fit m-auto'>
                <h1 className="text-7xl pb-5">Welcome to the about page</h1>
                <h1 className="text-muted pb-5">This page is only for showing that react router exists</h1>

                {/* https://reactrouter.com/start/declarative/navigating 
                    <Link> can't generate an active state, <NavLink> can
                */}
                <NavLink to="/">
                    <Button variant={"default"} className="p-4 active:bg-blue-500">Home</Button>
                </NavLink>
            </div>
        </div>
        // <>
        //     <div>
        //         <div className=' bg-gray-300 dark:bg-gray-700 dark:text-white p-10'>
        //             <h1 className="text-7xl pb-5">Welcome to my about page!</h1>
        //             <NavLink to="/">
        //                 <Button variant={"default"} className="p-4 active:bg-blue-500">Home</Button>
        //             </NavLink>
        //         </div>
        //     </div>
        // </>
    )
}