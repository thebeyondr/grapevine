import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const useCaseList = [
  {
    title: "Healthcare Communication Platform",
    anchor: "healthcare-communication-platform",
    description:
      "Explore how Grapevine can be used to build a healthcare communication platform for shared patient care",
  },
  {
    title: "Gaming Community Engagement	",
    anchor: "gaming-community-engagement",
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
    <main className="container mx-auto px-4 py-12">
      <section className="flex flex-col justify-center space-y-2">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          Grapevine in use
        </h1>
        <p className="text-lg text-muted-foreground leading-6">
          Interactions with the Grapevine toolkit across different platforms
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {useCaseList.map((useCase) => (
              <li key={useCase.anchor}>
                <Link href={`#${useCase.anchor}`} key={useCase.anchor}>
                  <Button
                    variant="link"
                    className="w-full h-full justify-start px-0 "
                  >
                    {useCase.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <section
        className="flex flex-col items-center space-y-4"
        id="healthcare-communication-platform"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Healthcare Communication Platform
        </h2>
      </section>
    </main>
  );
}
