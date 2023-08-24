import Age from "@/components/age-calculator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import Statistics from "@/components/statistics";

export default async function About() {
  const generateTooltip = (url: any, name: any) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href={url}
              className="underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              {name}
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{url}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <main className="mx-auto max-w-2xl space-y-8 my-10">
      <h1 className="text-4xl font-bold">About</h1>
      <div className="space-y-4">
        <p>
          Hey there! I am Gonzalo, a <Age /> year old Web Developer based in
          Dublin. I currently work as an full stack developer at Brainrex, a company offering machine learning inference API and data integrations for the financial industry.
        </p>
        <p>
          My backend stack right now{" "}
          {generateTooltip("https://python.org/", "Python")},{" "}
          {generateTooltip("https://tensorflow.org/", "Tensorflow")},{" "}
          {generateTooltip("https://tailwindcss.com/", "NLTK")} with{" "}
          {generateTooltip("https://ui.shadcn.com/", "Flask")},{" "}
          {generateTooltip("https://mongo.com/", "MongoDB")} for large data storage.
          My favourite frontend stack right now{" "}
          {generateTooltip("https://react.dev/", "React")},{" "}
          {generateTooltip("https://nextjs.org/", "Next.js")},{" "}
          {generateTooltip("https://tailwindcss.com/", "TailwindCSS")} with{" "}
          {generateTooltip("https://ui.shadcn.com/", "shadcn/ui")},{" "}
          {generateTooltip("https://clerk.com/", "Clerk")} for authentication
          and {generateTooltip("https://www.prisma.io/", "Prisma")} with{" "}
          {generateTooltip("https://planetscale.com/", "PlanetScale")}.
        </p>
        <p>
          I have extensive experience with {" "}
          {generateTooltip("https://aws.amazon.com/", "AWS")},{" "}
          {generateTooltip("https://www.cloudfare.com/", "Cloudfare")} and{" "}
          {generateTooltip("https://docker.io/", "Docker")} for dev ops
          related work. I love to self-host my own services and have a passion
          for privacy and security.
        </p>
        {/* <p>
          If you are interested in my full tech stack 
          day-to-day, check out{" "}
          <Link
            href="/uses"
            className="underline hover:no-underline"
            aria-label="Uses Page"
          >
            /uses
          </Link>
          .
        </p> */}
      </div>

      <div className="space-y-8">
        <div className="flex justify-between my-auto">
          <h2 className="text-2xl font-bold">Events Gallery</h2>
          <Link
            href="/gallery"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="All images"
          >
            Explore past events
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <div className="row-span-2 col-span-2">
            <Image
              src="/gonzalo-gomad-talk-1.jpg"
              width={500}
              height={500}
              alt="On the road"
              className="rounded-md"
              />
          </div>
          <div>
            <Image
              src="/gonzalo-google-osweekends-1.jpg"
              width={500}
              height={500}
              alt="On the road"
              className="rounded-md"
            />
          </div>
          <div>
            <Image
              src="/gonzalo-gomad-talk-2.jpg"
              width={500}
              height={500}
              alt="On the road"
              className="rounded-md"
            />
          </div>
          <div>
            <Image
              src="/group-liferay-blockmad.jpg"
              width={500}
              height={500}
              alt="On the road"
              className="rounded-md hidden sm:flex"
            />
          </div>
          <div>
            <Image
              src="/gonzalo-starfish-san-francisco.jpg"
              width={500}
              height={500}
              alt="On the road"
              className="rounded-md hidden sm:flex"
            />
          </div>
        </div>
        {/* <Statistics /> */}
      </div>
    </main>
  );
}
