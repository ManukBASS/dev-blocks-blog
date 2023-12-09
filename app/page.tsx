import { LatestPost } from "@/components/LatestPost/LatestPost";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-12 pt-12">
      <section className="flex flex-col gap-10">
        <h1 className="font-bold text-3xl lg:text-5xl bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
          Dev Blocks
        </h1>
        <div>
          <p className="opacity-80 text-sm leading-8">
            Welcome to Dev Blocks, a blog{" "}
            <span className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
              created by developers for developers.
            </span>{" "}
          </p>
          <p className="opacity-80 text-sm leading-8">
            Where tech meets curiosity, Quick reads on web development, fun
            facts, and history.
          </p>
          <p className="opacity-80 text-sm leading-8">
            Bite-sized insights for your daily tech cravings.
          </p>
        </div>
      </section>
      <Separator />
      <>
        <h2>Latest Articles</h2>
        <section>
          <LatestPost />
        </section>
      </>
    </main>
  );
}
