import { sleep,block } from "../../lib/sleep"

export const ExpensiveComponent = () => {
    block()
    return (
        <div className="px-4 py-2 font-bold text-center bg-orange-400 border">I am expensive</div>
    )
}