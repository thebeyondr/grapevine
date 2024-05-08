"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Grape } from "lucide-react";
import { motion } from "framer-motion";

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
  return (
    <article
      className="flex flex-col space-y-4"
      id="healthcare-communication-platform"
    >
      <h2 className="text-xl md:text-2xl font-semibold">
        Healthcare Communication Platform
      </h2>
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg px-2 py-6 md:px-6">
        <div className="bg-slate-800 text-slate-100 md:max-w-xl rounded-lg rounded-b-xl overflow-hidden border-none">
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
              <CardTitle className="text-lg md:text-xl">
                Talk about this case with your network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between space-x-2">
                <Input
                  type="text"
                  placeholder="Search your network"
                  className="focus:outline-none focus:ring-[1.5px] focus:ring-slate-300 focus:ring-offset-1 transition-colors"
                />
                <Button variant="default">Search</Button>
              </div>
              <p className="text-sm text-slate-500 pt-1">
                Find by keyword, name, profession, or location
              </p>

              <div className="p-3"></div>
              <motion.ul layout>
                {medicalProfiles.map((profile, index) => (
                  <motion.li
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        bounce: 0.2,
                        opacity: { delay: dynamicDelay(0.05) },
                      },
                    }}
                    className="relative hover:bg-slate-50 transition-colors cursor-pointer"
                    key={index}
                  >
                    <div className="flex items-center space-x-2 border-b-[1.5px] border-slate-100 p-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
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
              </motion.ul>
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
