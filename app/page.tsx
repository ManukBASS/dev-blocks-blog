import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { LatestPost } from "@/components/LatestPost/LatestPost";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <section className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl lg:text-5xl">The Dev Notes</h1>
        <p className="opacity-75 text-sm leading-8">
          Welcome to The Dev Notes, a blog{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            created by developers for developers
          </span>{" "}
          where tech meets curiosity!, Quick reads on web development, fun
          facts, and history. Bite-sized insights for your daily tech cravings.
        </p>
      </section>
      <Separator />
      <>
        <h2>Latest posts</h2>
        <section>
          <LatestPost />
        </section>
      </>
      <Footer />
    </main>
  );
}
