"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Grape,
  Loader2,
  Lock,
  TicketCheck,
  Users2,
} from "lucide-react";
import { useState } from "react";
import { buttonVariants } from "../ui/button";

const VOTE_OPTIONS_INITIAL = new Map([
  ["South East Asia", 7],
  ["Turkey", 5],
  ["Greenland", 4],
  ["Australia", 3],
  ["Munich", 2],
  ["London", 1],
  ["New York", 1],
  ["Los Angeles", 1],
  ["Chicago", 1],
]);

const totalVotes = Array.from(VOTE_OPTIONS_INITIAL.values()).reduce(
  (acc, curr) => acc + curr,
  0
);

const VOTES_PROCESSED = Array.from(VOTE_OPTIONS_INITIAL.entries()).map(
  ([name, votes]) => ({
    name,
    votes,
    percentage: (votes / totalVotes) * 100,
  })
);

const BusinessVoting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordCheckState, setPasswordCheckState] = useState("idle");
  const [votesVisible, setVotesVisible] = useState(false);
  const [allVotes, setAllVotes] = useState(VOTES_PROCESSED);
  const [currentVote, setCurrentVote] = useState("");

  const updateVote = (name: string) => {
    const tempVotes = [...allVotes];

    // if a current vote exists, remove one from the current vote
    if (currentVote) {
      const currVoteIndex = tempVotes.findIndex(
        (vote) => vote.name === currentVote
      );
      tempVotes[currVoteIndex].votes -= 1;
      tempVotes[currVoteIndex].percentage =
        (tempVotes[currVoteIndex].votes / totalVotes) * 100;

      if (currentVote === name) {
        return setCurrentVote("");
      }
    }

    // add the new vote
    const newVoteIndex = tempVotes.findIndex((vote) => vote.name === name);
    tempVotes[newVoteIndex].votes += 1;
    tempVotes[newVoteIndex].percentage =
      (tempVotes[newVoteIndex].votes / totalVotes) * 100;
    setAllVotes(tempVotes);
    setCurrentVote(name);
  };

  const fakeProcessSecret = () => {
    setPasswordCheckState("loading");
    setTimeout(() => {
      setPasswordCheckState("success");
      setTimeout(() => {
        setPasswordCheckState("complete");
        setVotesVisible(true);
      }, 2000);
    }, 2000);
  };

  return (
    <section className="flex flex-col space-y-4" id="business-voting">
      <h2 className="text-xl md:text-2xl font-semibold">Business Voting</h2>
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg px-2 py-6 md:px-6">
        <Card
          id="frame"
          className="w-72 md:w-96 bg-slate-900 rounded-2xl flex flex-col space-y-4"
        >
          <CardHeader>
            <CardTitle className="text-sm tracking-widest text-blue-300 flex items-center space-x-1">
              <TicketCheck size={16} />
              <span>VOTA</span>
            </CardTitle>
          </CardHeader>

          <CardContent>
            <h5 className="text-sm text-slate-400 ">Pollen Labs</h5>
            <h3 className="font-semibold text-lg md:text-2xl leading-tighter text-slate-50">
              What is the next expansion location for Ivy Network?
            </h3>
            <div className="flex space-x-2 py-2">
              <div className="flex items-center border border-slate-500 bg-slate-700 text-xs text-slate-300 px-2 py-0.5 rounded-lg">
                <span>
                  <Users2 size={12} className="mr-1" />
                </span>
                <span>
                  {allVotes.reduce((acc, curr) => acc + curr.votes, 0)} voters
                </span>
              </div>
            </div>
            <div className="p-2" />
            <AnimatePresence mode="popLayout">
              {passwordCheckState !== "complete" && (
                <motion.div
                  className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    y: -10,
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
                      className="w-full bg-slate-700 text-slate-100 border-slate-500 focus-visible:ring-slate-400 ring-offset-slate-700 placeholder:text-slate-400 pl-10"
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
                      variant: "default",
                    })} ${
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
                      <Loader2 className="animate-spin" />
                    ) : passwordCheckState === "success" ? (
                      <Check className="text-green-300" />
                    ) : (
                      <span className="text-slate-300">Unlock</span>
                    )}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="relative space-y-3"
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={
                passwordCheckState === "complete"
                  ? { opacity: 1, height: "auto" }
                  : { opacity: 0, height: 0 }
              }
              exit={{
                opacity: 0,
                height: 0,
                transition: { duration: 0.3, delay: 2 },
              }}
            >
              <section className="p-3 select-none text-pretty text-slate-300">
                <ul className="space-y-2">
                  {allVotes.map((vote) => (
                    <li
                      key={vote.name}
                      className={`text-slate-300 relative rounded-lg border-2 ${
                        currentVote === vote.name
                          ? "border-green-500"
                          : "border-slate-500"
                      } overflow-hidden h-12 cursor-pointer hover:border-green-500 active:scale-90 transition-transform duration-300 ease-in-out`}
                      onClick={() => {
                        updateVote(vote.name);
                      }}
                    >
                      <motion.span
                        className={`absolute top-0 left-0 ${
                          currentVote === vote.name
                            ? "bg-green-700"
                            : "bg-slate-700"
                        } h-full`}
                        initial={{ width: 0 }}
                        layout
                        animate={{
                          width: votesVisible ? `${vote.percentage}%` : 0,
                        }}
                        transition={{
                          duration: 0.4,
                          type: "spring",
                          bounce: 0.1,
                          delay: 0.2,
                        }}
                      />
                      <div
                        className={`absolute inset-0 flex items-center justify-center ${
                          currentVote === vote.name
                            ? "text-green-300"
                            : "text-slate-3000"
                        }`}
                      >
                        {vote.name}
                      </div>
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
                        {currentVote === vote.name && (
                          <CheckCircle2 size={18} className="text-green-300" />
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </motion.div>
          </CardContent>

          <CardFooter className="flex justify-end items-center bg-slate-700 py-2 px-4 text-sm rounded-b-lg text-slate-300">
            Powered by{" "}
            <Grape className="inline-block text-blue-300 ml-1" size={16} />
            <span className="text-blue-300 ml-1 font-semibold">
              Grapevine
            </span>{" "}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default BusinessVoting;
