import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-full flex-1 flex-col">
      <Profile />
      <Projects />
    </main>
  );
}
