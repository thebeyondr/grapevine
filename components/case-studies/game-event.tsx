"use client";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Eye, EyeOff, Loader2, Lock, TicketCheck } from "lucide-react";
import Image from "next/image";
import { MouseEvent, useState } from "react";

const GameEvent = () => {
  const [imgPosition, setImgPosition] = useState({ x: 0, y: 0 });
  const [passwordCheckState, setPasswordCheckState] = useState<
    "loading" | "success" | "error" | "complete" | "idle"
  >("idle");
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const dampeningFactor = 0.01;
    const newX = (e.clientX - 167 - 200) * dampeningFactor;
    const newY = (e.clientY - 367 - 200) * dampeningFactor;
    setImgPosition({ x: newX, y: newY });
  };

  const handleMouseLeave = () => {
    setImgPosition({ x: 0, y: 0 });
  };

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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
            <motion.h3
              layout
              className="text-white text-3xl md:text-4xl font-semibold leading-8 tracking-tight"
            >
              {passwordCheckState === "complete"
                ? "Let's party together, warrior!"
                : "Something awesome awaits the beckoned few."}
            </motion.h3>
            <div className="p-2"></div>
            <AnimatePresence mode="popLayout">
              {passwordCheckState !== "complete" && (
                <motion.div
                  className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0 justify-center items-center"
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
                      className="flex-1 h-11 bg-slate-700 text-slate-100 border-slate-500 focus-visible:ring-slate-400 ring-offset-slate-700 placeholder:text-slate-400 pl-10"
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
                    })} w-full ${
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

            {/* <Button
              variant={"ghost"}
              size={"lg"}
              className="text-white bg-slate-900/60"
            >
              Unlock details
            </Button> */}
          </div>
        </motion.div>
        <Card className="w-full bg-slate-900 rounded-lg flex flex-col md:w-[500px]">
          <CardHeader>
            <CardTitle className="text-sm tracking-widest text-blue-300 flex items-center space-x-1">
              <TicketCheck size={16} />
              <span>NHANCE</span>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export { GameEvent };
