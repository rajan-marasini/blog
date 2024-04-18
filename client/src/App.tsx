import { Button } from "./components/ui/button";

export default function App() {
    return (
        <h1 className="text-3xl font-bold underline flex gap-4 items-center">
            <Button variant={"default"} onClick={() => console.log("first")}>
                Click me
            </Button>
        </h1>
    );
}
