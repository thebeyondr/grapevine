import { ChevronRight, Inbox, VaultIcon, Vote } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessVoting = () => {
  return (
    <article className="flex flex-col space-y-4" id="business-voting">
      <h2 className="text-xl md:text-2xl font-semibold">Business Voting</h2>
      <div className="flex flex-col items-center justify-center bg-slate-200 rounded-lg px-2 py-6 md:px-6">
        <section
          id="frame"
          className="w-72 md:w-96 bg-white rounded-2xl p-5 flex flex-col space-y-4"
        >
          <h3 className="text-sm tracking-widest text-slate-600">VOTA</h3>

          {/* <h5 className="font-bold text-xl">Hey CJ,</h5>

          <Button
            size="lg"
            className="w-full py-8 flex items-center justify-between transition-colors hover:bg-slate-800 group shadow-md"
          >
            <Inbox size={18} className="text-slate-300" />
            <span className="text-slate-300">13 active polls</span>
            <ChevronRight
              size={18}
              className="transition-transform group-hover:translate-x-1 duration-300"
            />
          </Button> */}

          <section>
            <h3 className="font-semibold">
              Begin 6-month test for South East Asia
            </h3>
            <div className="relative">
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full rounded-lg bg-slate-200/70 backdrop-blur-sm p-3 border-2 border-slate-400 border-dashed">
                <span className="text-sm text-slate-600 text-center">
                  Click to unlock content and voting
                </span>
              </div>
              <section className="p-3">
                <p>The test will focus on the following areas:</p>
                <ul>
                  <li>Marketing</li>
                  <li>Sales</li>
                  <li>Customer Success</li>
                </ul>
              </section>
            </div>
          </section>
        </section>
      </div>
    </article>
  );
};

export default BusinessVoting;
