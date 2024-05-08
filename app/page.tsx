import HealthcarePlatform from "@/components/case-studies/healthcare-platform";

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

      {/* <Card className="w-max">
        <CardHeader>
          <CardTitle className="text-lg">Quick Links</CardTitle>
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
      </Card> */}
      <div className="p-6"></div>

      <HealthcarePlatform />
    </main>
  );
}
