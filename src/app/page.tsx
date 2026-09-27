import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 pb-16 pt-16">
      <div className="fixed right-4 top-4 z-10">
        <ThemeToggle />
      </div>

      <Profile name={profile.name} bio={profile.bio} image={profile.image} />

      <ul className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard id={link.id} title={link.title} url={link.url} />
          </li>
        ))}
      </ul>
    </main>
  );
}
