import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EllipsisVertical, Grape } from "lucide-react";
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
    <main className="container mx-auto px-4 py-12 max-w-4xl">
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

      <article
        className="flex flex-col space-y-4"
        id="healthcare-communication-platform"
      >
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
          Healthcare Communication Platform
        </h2>
        <div className="flex flex-col items-center justify-center bg-slate-100 rounded-lg px-2 py-6 md:px-6">
          {/* Patient card */}
          <div className="flex items-center justify-between md:max-w-lg px-3 pt-3 pb-5 bg-slate-800 text-slate-100 w-full border-[1.5px] border-slate-200 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/36730035"
                  alt="@shadcn"
                />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">Case #13434</span>
                <span className="text-sm text-slate-300">
                  Yamm Edd / 32 / Male
                </span>
              </div>
            </div>
            <EllipsisVertical className="text-slate-300" size={20} />
          </div>
          <Card className="w-full md:max-w-lg -mt-2 rounded-xl rounded-tl-none">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                Talk about this case with your network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between space-x-2">
                <Input type="text" placeholder="Search your network" />
                <Button variant="default">Search</Button>
              </div>
              <p className="text-sm text-slate-500 pt-1">
                Find by keyword, name, profession, or location
              </p>
            </CardContent>
            <CardFooter className="flex justify-end items-center bg-slate-100 overflow-clip py-2 px-4 rounded-b-lg text-sm">
              Powered by{" "}
              <Grape className="inline-block text-blue-600 ml-1" size={16} />
              <span className="text-blue-600 ml-1 font-semibold">
                Grapevine
              </span>{" "}
            </CardFooter>
          </Card>
        </div>
      </article>
    </main>
  );
}
