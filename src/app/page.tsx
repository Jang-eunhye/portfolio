import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex-1">
      <Profile />
      <Projects />
    </main>
  );
}
