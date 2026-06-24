import { Greeting } from "./Greeting";
import { Settings } from "./Settings";

export function Header() {
    return (
        <header className='w-full flex gap-4'>
            <Greeting />
            <Settings />
        </header>
    )
}