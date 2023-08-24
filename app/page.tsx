import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import prisma from "@/lib/prisma";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, CalendarIcon } from "lucide-react";
import SocialButtons from "@/components/social-buttons";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const posts = await prisma.posts.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return (
    <main>
      <div className="mx-auto max-w-2xl space-y-8 my-10">
        <h1 className="text-4xl font-bold">G&apos;day 👋</h1>
        <div>
          <div className="space-y-4">
            <p>
              I&apos;m Gonzalo, a Spanish full stack dev and owner of{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://www.brainrex.com/"
                      target="_blank"
                      aria-label="Brainrex Website"
                    >
                      Brainrex
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage src="https://www.brainrex.com/_next/image?url=%2Fapple-touch-icon.png&w=32&q=75" />
                        <AvatarFallback>Brainrex</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          Brainrex
                        </h4>
                        <p className="text-sm">
                          Over the past 5 years, I have been pleased to design, implement and deploy several full stacks applications in NLP, CV, and anomaly detection.
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Working @ Brainrex since 2018
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </span>
              . Training models by day, crafting beautiful websites by night.
            </p>

            {/* <p>
              Currently building an invesment research chatbot called{" "}
              <span className="underline hover:no-underline cursor-pointer">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a
                      href="https://bitlongs.com/"
                      target="_blank"
                    >
                      Bitlongs
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <Avatar>
                        <AvatarImage
                          className="bg-white"
                          src="https://bitlongs.com"
                        />
                        <AvatarFallback>TAB</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">
                          Bitlongs
                        </h4>
                        <p className="text-sm">
                          An investment research chatbot powered by Brainrex Data API, Langchain and Llama2
                        </p>
                        <div className="flex items-center pt-2">
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Building @ Bitlongs since 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </span>
              .
            </p> */}
          </div>
        </div>
        {/* <hr className="my-8" /> */}

        <p className="font-semibold text-lg">Projects</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-6">
          {siteConfig.projects.map((project) => (
            <Card key={project.name} className="p-3 dark:bg-muted">
            <div key={project.name} className="space-y-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={project.url}
                      className="font-bold underline hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.name}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{project.url}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <p className="text-sm 	">{project.description}</p>
            </div>
            </Card>
          ))}
        </div>
        {/* <hr className="my-8" /> */}

        <div className="flex justify-between my-auto">
          <p className="my-auto font-semibold text-lg">Articles</p>
          <Link
            href="/articles"
            className={buttonVariants({ variant: "ghost" })}
            aria-label="All articles"
          >
            All articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        <div>
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/article/${encodeURIComponent(post.slug)}`}
                  prefetch={false}
                  aria-label={post.title}
                >
                  <div className="sm:flex justify-between gap-2">
                    <p className="truncate">{post.title}</p>

                    <div className="flex gap-2">
                      <p className="whitespace-nowrap">{post.views} views</p>/
                      <Badge variant="secondary">{post.tag}</Badge>/
                      <p className="whitespace-nowrap">
                        {new Date(post.createdAt).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-8" />

        <SocialButtons />
      </div>
    </main>
  );
}
