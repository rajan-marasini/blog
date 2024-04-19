import { Loader2 } from "lucide-react";

const Loader = () => {
    return (
        <div className="w-full h-60 flex items-center justify-center">
            <Loader2 size={40} className="animate-spin" />
        </div>
    );
};

export default Loader;
