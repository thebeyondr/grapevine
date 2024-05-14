import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Grape,
  Loader2,
  Lock,
  ThumbsUpIcon,
  TicketCheck,
  Users2,
} from "lucide-react";

const BusinessVoting = () => {
  return (
    <article className="flex flex-col space-y-4" id="business-voting">
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

          <CardContent>
            <h5 className="text-sm text-slate-400 ">Pollen Labs</h5>
            <h3 className="font-semibold text-lg md:text-2xl leading-tight text-slate-50">
              Should we expand Ivy Network into South East Asia?
            </h3>
            <div className="flex space-x-2 py-2">
              <div className="flex items-center border border-slate-500 bg-slate-700 text-xs text-slate-300 px-2 py-0.5 rounded-lg">
                <span>
                  <Users2 size={12} className="mr-1" />
                </span>
                <span className="">13 voters</span>
              </div>
              <div className="flex items-center border border-green-600 bg-green-950 text-xs text-green-400 px-2 py-0.5 rounded-lg">
                <span>
                  <ThumbsUpIcon size={12} className="mr-1" />
                </span>
                <span>68% approval</span>
              </div>
            </div>
            <div className="relative space-y-3">
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full rounded-lg bg-slate-700/50 backdrop-blur-sm p-3 border-2 border-slate-600 border-dashed">
                <Lock size={16} className="text-slate-300 mr-1" />
                <span className="text-sm text-slate-300 text-center">
                  Unlock more details
                </span>
              </div>
              <section className="p-3 select-none">
                <p>The test will focus on the following areas:</p>
                <ul>
                  <li>Marketing</li>
                  <li>Sales</li>
                  <li>Customer Success</li>
                </ul>
              </section>
            </div>
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
    </article>
  );
};

export default BusinessVoting;
