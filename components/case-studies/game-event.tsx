"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Clock12,
  Disc2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const GameEvent = () => {
  const [imgPosition, setImgPosition] = useState({ x: 0, y: 0 });
  const [passwordCheckState, setPasswordCheckState] = useState<
    "loading" | "success" | "error" | "complete" | "idle"
  >("idle");
  const [showPassword, setShowPassword] = useState(false);

  const fakeProcessSecret = () => {
    setPasswordCheckState("loading");
    setTimeout(() => {
      setPasswordCheckState("success");
      setTimeout(() => {
        setPasswordCheckState("complete");
      }, 2000);
    }, 2000);
  };

  return (
    <section className="flex flex-col space-y-4" id="game-event">
      <h2 className="text-xl md:text-2xl font-semibold">Game Event</h2>
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg px-2 py-6 md:px-6">
        <motion.div
          layout
          className={`relative rounded-lg overflow-clip`}
          // onMouseMove={handleMouseMove}
          // onMouseLeave={handleMouseLeave}
        >
          <div
            className="relative overflow-clip rounded-lg w-full h-[500px]"
            style={{
              transform: `translate(${imgPosition.x}px, ${imgPosition.y}px)`,
            }}
          >
            <Image
              src={"/arcane-dj.jpg"}
              alt="Arcane DJ"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div
            className={`absolute top-0 left-0 p-5 md:p-6 w-full h-full flex flex-col items-start justify-end bg-gradient-to-t from-cyan-900/80 to-transparent ${
              passwordCheckState === "complete"
                ? "backdrop-blur-none"
                : "backdrop-blur-md"
            } transition-all duration-300`}
          >
            <motion.p
              layoutId="secret-event"
              className="text-blue-100 uppercase tracking-wider text-sm font-semibold"
            >
              Secret event
            </motion.p>
            <motion.h3
              layout
              className="text-white text-3xl md:text-4xl font-semibold leading-8 tracking-tight"
            >
              {passwordCheckState === "complete"
                ? "You're invited to party!"
                : "Something awesome awaits the beckoned few."}
            </motion.h3>
            <div className="p-2"></div>
            <AnimatePresence mode="popLayout">
              {passwordCheckState !== "complete" && (
                <motion.div
                  className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { duration: 0.5 },
                  }}
                >
                  <div className="relative w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter the secret phrase"
                      disabled={
                        passwordCheckState === "loading" ||
                        passwordCheckState === "success"
                      }
                      className="flex-grow h-11 bg-slate-700 text-slate-100 border-slate-500 focus-visible:ring-slate-400 ring-offset-slate-700 placeholder:text-slate-400 pl-10"
                    />
                    <div className="absolute inset-y-1 left-3 top-1/2 transform -translate-y-1/2 text-slate-300 w-max">
                      <Lock size={16} />
                    </div>
                    <div className="absolute inset-y-1 right-3 top-1/2 transform -translate-y-1/2 text-slate-300 w-max">
                      {showPassword ? (
                        <Eye size={16} onClick={() => setShowPassword(false)} />
                      ) : (
                        <EyeOff
                          size={16}
                          onClick={() => setShowPassword(true)}
                        />
                      )}
                    </div>
                  </div>
                  <motion.button
                    className={`${buttonVariants({
                      variant: "ghost",
                      size: "lg",
                    })} w-full md:w-max ${
                      passwordCheckState === "success"
                        ? "bg-green-600"
                        : "bg-slate-800 hover:bg-slate-700"
                    }`}
                    onClick={fakeProcessSecret}
                    disabled={
                      passwordCheckState === "loading" ||
                      passwordCheckState === "success"
                    }
                  >
                    {passwordCheckState === "loading" ? (
                      <Loader2 className="animate-spin text-slate-100" />
                    ) : passwordCheckState === "success" ? (
                      <Check className="text-green-300" />
                    ) : (
                      <span className="text-slate-300">Unlock details</span>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {passwordCheckState === "complete" && (
                <motion.div
                  className="w-full"
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <Card className="bg-slate-900/20 text-slate-50 backdrop-blur-md border-[1.5px] border-slate-100/20">
                    <CardHeader>
                      <CardTitle>Saturday, 20th March</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col space-y-1 text-slate-200">
                        <p className="text-orange-300">193 tickets left!</p>
                        <p className="flex items-center space-x-2">
                          <Clock12 size={16} /> <span>8PM - 6AM</span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <Disc2 size={16} />
                          <span>
                            Sets from RIOT, EPROM, Space Laces and more!
                          </span>
                        </p>
                        <p className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>65 Fridgeon St, New York, NY</span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { GameEvent };
