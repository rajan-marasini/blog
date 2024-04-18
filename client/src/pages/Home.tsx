import CardSection from "@/components/home/CardSection";
import Hero from "@/components/home/Hero";
import { UserSelector } from "@/features/userSlice";
import { useSelector } from "react-redux";

const Home = () => {
    const user = useSelector(UserSelector);

    return (
        <div className="space-y-4">
            {user && <span>Hi, {user.name}</span>}
            <Hero />
            <CardSection />
        </div>
    );
};

export default Home;
