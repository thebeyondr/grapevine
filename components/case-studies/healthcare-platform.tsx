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
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  CopyIcon,
  EllipsisVertical,
  Grape,
  Link,
  LoaderCircle,
  Lock,
  RefreshCcw,
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
  const [sendState, setSendState] = useState("idle");

  const fakeSend = () => {
    setSendState("loading");
    setTimeout(() => {
      setSendState("complete");
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
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              bounce: 0.2,
              delay: 0.1,
              duration: 0.8,
            },
          }}
          className="bg-slate-800 text-slate-100 md:w-96 rounded-lg rounded-b-xl overflow-hidden border-none"
        >
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
                Collaborate with your network
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between space-x-2">
                <Input
                  type="text"
                  placeholder="Send invites via email"
                  disabled={sendState === "loading" || sendState === "complete"}
                  className="border-[1.5px] border-slate-300 focus:outline-none focus:ring-[1.5px] focus:ring-slate-300 focus:ring-offset-1 transition-colors"
                />
                <motion.button
                  className={`${buttonVariants({
                    variant: "default",
                    size: "sm",
                  })} ${sendState === "complete" ? "bg-green-600" : ""}`}
                  onClick={fakeSend}
                  disabled={sendState === "loading" || sendState === "complete"}
                >
                  {sendState === "loading" ? (
                    <LoaderCircle className="animate-spin" />
                  ) : sendState === "complete" ? (
                    <Check />
                  ) : (
                    <ArrowRight />
                  )}
                </motion.button>
              </div>
              <motion.p
                layout
                className={`text-xs text-slate-500 pt-1 ${
                  sendState === "complete" ? "text-green-600" : ""
                }`}
              >
                {sendState === "complete"
                  ? "Invites sent"
                  : "Separate emails with commas"}
              </motion.p>
              <div className="p-3"></div>

              <div className="space-y-2">
                <div>
                  <div className="flex space-x-2 items-center">
                    <div className="flex items-center flex-1 space-x-4 px-3 py-2 border-[2px] border-slate-300 bg-slate-100 rounded-lg border-dashed border-spacing-4">
                      <div className="p-1 bg-slate-300 rounded-lg">
                        <Lock className="text-slate-600" size={16} />
                      </div>
                      <span className="text-slate-600 text-sm">
                        kgntelkgteIHNaQzplNwQ
                      </span>
                    </div>
                    <Copy className="text-slate-400 inline ml-2" size={16} />
                    <RefreshCcw
                      className="text-slate-400 inline ml-2"
                      size={16}
                    />
                  </div>
                  <p className="text-xs text-slate-500 pt-1 leading-tight">
                    We recommend sending this secret through secure channels.
                  </p>
                </div>
                <div>
                  <div className="flex space-x-2 items-center pt-3">
                    <div className="flex items-center flex-1 space-x-4 px-3 py-2 border-[2px] border-slate-300 bg-slate-100 rounded-lg border-dashed border-spacing-4">
                      <div className="p-1 bg-slate-300 rounded-lg">
                        <Link className="text-slate-600" size={16} />
                      </div>
                      <span className="text-slate-600 text-sm">
                        medica.se/oPldmqUn
                      </span>
                    </div>
                    <CopyIcon
                      className="text-slate-400 inline ml-2 font-bold"
                      size={16}
                    />
                    <RefreshCcw
                      className="text-slate-400 inline ml-2"
                      size={16}
                    />
                  </div>
                  <p className="text-xs text-slate-500 pt-1 leading-tight">
                    Only share with people you trust. They will require the
                    secret passphrase to access this link.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end items-center bg-slate-100 py-2 px-4 text-sm rounded-b-lg">
              Powered by{" "}
              <Grape className="inline-block text-blue-600 ml-1" size={16} />
              <span className="text-blue-600 ml-1 font-semibold">
                Grapevine
              </span>{" "}
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </article>
  );
};

export { HealthcarePlatform as default };
