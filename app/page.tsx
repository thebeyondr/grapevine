import BusinessVoting from "@/components/case-studies/business-voting";
import { GameEvent } from "@/components/case-studies/game-event";
import HealthcarePlatform from "@/components/case-studies/healthcare-platform";

const useCaseList = [
  {
    title: "Healthcare Communication Platform",
    anchor: "healthcare-communication-platform",
    description:
      "Explore how Grapevine can be used to build a healthcare communication platform for shared patient care",
  },
  {
    title: "Gaming Community Event	",
    anchor: "game-event",
    description:
      "Explore how Grapevine can be used to build a gaming community for shared gaming experiences",
  },
  {
    title: "Business Decision-Making",
    anchor: "business-decision-making",
    description:
      "Explore how Grapevine can be used to build a business decision-making platform for shared business strategy",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <section className="flex flex-col justify-center space-y-2">
        <h1 className="text-4xl md:text-5xl tracking-tighter font-semibold">
          Grapevine in use
        </h1>
        <p className="text-lg text-muted-foreground leading-6">
          Imagining use cases with the Grapevine toolkit across different
          platforms and industries
        </p>
      </section>
      <section className="flex flex-col space-y-4">
        <HealthcarePlatform />
        <BusinessVoting />
        <GameEvent />
      </section>
    </main>
  );
}
