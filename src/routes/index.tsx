import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Preloader } from "@/components/portfolio/Preloader";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import {
  Hero, About, Skills, Projects, Resume, Profiles, Articles, Contact, FinalCTA, Footer,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dhanush Babu — B.Tech IT · ML & Full Stack Developer" },
      { name: "description", content: "Portfolio of Dhanush Babu — pre-final year B.Tech IT student building intelligent web experiences with Machine Learning, Data Science, and modern UI engineering." },
      { property: "og:title", content: "Dhanush Babu — ML & Full Stack Developer" },
      { property: "og:description", content: "Premium futuristic portfolio showcasing ML projects, web experiments, and IoT builds." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Preloader />
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Profiles />
      <Articles />
      <Contact />
      <FinalCTA />
      <Footer />
    </main>
  );
}
