"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Copy,
  CopyIcon,
  EllipsisVertical,
  Grape,
  Link,
  LoaderCircle,
  Lock,
} from "lucide-react";
import { useState } from "react";

const medicalProfiles = [
  {
    name: "Eddard Yusef, Ph.D.",
    profession: "Medical Doctor",
    avatar: "https://avatars.githubusercontent.com/u/36730035",
  },
  {
    name: "John Doe",
    profession: "General Practitioner",
    avatar: "https://avatars.githubusercontent.com/u/36730035",
  },
  {
    name: "Jane Doe",
    profession: "Maxillofacial Surgeon",
    avatar: "https://avatars.githubusercontent.com/u/36730035",
  },
];

const HealthcarePlatform = () => {
  const baseDelay = 0.6;
  const dynamicDelay = (impact: number) => baseDelay * impact;
  const [searchState, setSearchState] = useState("idle");
  const [phraseGenerationStatus, setPhraseGenerationStatus] = useState("idle");
  const phraseLabels = {
    idle: "Generate secret passphrase",
    loading: "Generating...",
    complete: "Generated",
  };
  const fakeSearch = () => {
    setSearchState("loading");
    setTimeout(() => {
      setSearchState("complete");
    }, 1500);
  };

  const fakeGeneratePhrase = () => {
    setPhraseGenerationStatus("loading");
    setTimeout(() => {
      setPhraseGenerationStatus("complete");
    }, 1500);
  };
  return (
    <article
      className="flex flex-col space-y-4"
      id="healthcare-communication-platform"
    >
      <h2 className="text-xl md:text-2xl font-semibold">
        Healthcare Communication Platform
      </h2>
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg px-2 py-6 md:px-6">
        <div className="bg-slate-800 text-slate-100 md:w-96 rounded-lg rounded-b-xl overflow-hidden border-none">
          <div className="flex items-center justify-between px-3 py-4 w-full">
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
          <Card className="w-full rounded-t-xl">
            <CardHeader>
              <CardTitle className="text-lg font-medium text-slate-700">
                Invite your network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between space-x-2">
                <Input
                  type="text"
                  placeholder="Send invites via email"
                  className="focus:outline-none focus:ring-[1.5px] focus:ring-slate-300 focus:ring-offset-1 transition-colors"
                />
                <motion.button
                  className={buttonVariants({
                    variant: "default",
                    size: "sm",
                  })}
                  onClick={fakeSearch}
                >
                  {searchState === "loading" ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <ArrowRight />
                  )}
                </motion.button>
              </div>
              <p className="text-sm text-slate-500 pt-1">
                Separate emails with commas
              </p>
              <div className="p-3"></div>

              <div className="space-y-2">
                <div className="flex items-center justify-between px-3 py-2 border-[2px] border-slate-300 bg-slate-100 rounded-lg border-dashed border-spacing-4">
                  <div className="p-1 bg-slate-300 rounded-lg">
                    <Lock className="text-slate-600" size={16} />
                  </div>
                  <span className="text-slate-600">kgntelkgteIHNaQzplNwQ</span>
                  <span>
                    <Copy className="text-slate-400 inline ml-2" size={16} />
                  </span>
                </div>

                <div className="flex items-center justify-between px-3 py-2 border-[2px] border-slate-300 bg-slate-100 rounded-lg border-dashed border-spacing-4">
                  <div className="p-1 bg-slate-300 rounded-lg">
                    <span>
                      <Link className="text-slate-600" size={16} />
                    </span>
                  </div>
                  <span className="text-slate-600">medica.se/oPldmqUn</span>
                  <span>
                    <CopyIcon
                      className="text-slate-400 inline ml-2 font-bold"
                      size={16}
                    />
                  </span>
                </div>
              </div>

              <section className="flex space-x-4 py-3">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`${buttonVariants({
                      variant: "secondary",
                      size: "sm",
                    })}`}
                  >
                    Copy <ChevronDown className="inline ml-1" size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Secret phrase</DropdownMenuItem>
                    <DropdownMenuItem>Share link</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={`${buttonVariants({
                      variant: "secondary",
                      size: "sm",
                    })}`}
                  >
                    Regenerate <ChevronDown className="inline ml-1" size={14} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Secret phrase</DropdownMenuItem>
                    <DropdownMenuItem>Share link</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </section>

              <div className="p-3"></div>
              {searchState === "complete" && (
                <ul>
                  {medicalProfiles.map((profile, index) => (
                    <motion.li
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          type: "spring",
                          bounce: 0.2,
                          delay: dynamicDelay(0.5),
                        },
                      }}
                      className="relative hover:bg-slate-50 transition-colors cursor-pointer"
                      key={index}
                    >
                      <div className="flex items-center space-x-2 border-b-[1.5px] border-slate-100 p-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={profile.avatar}
                            alt={profile.name}
                          />
                          <AvatarFallback>{profile.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm md:text-base font-semibold">
                            {profile.name}
                          </span>
                          <span className="text-sm text-slate-400">
                            {profile.profession}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter className="flex justify-end items-center bg-slate-100 py-2 px-4 text-sm rounded-b-lg">
              Powered by{" "}
              <Grape className="inline-block text-blue-600 ml-1" size={16} />
              <span className="text-blue-600 ml-1 font-semibold">
                Grapevine
              </span>{" "}
            </CardFooter>
          </Card>
        </div>
      </div>
    </article>
  );
};

export { HealthcarePlatform as default };
