import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { VideoCard } from "@/components/card-components";
import { videosData } from "@/data/mock-data";
import { Icons } from "@/components/ui/icons";

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  // Find the video that matches the ID
  const video = videosData.find((v) => v.id === params.id);

  // Get related videos (excluding the current one)
  const relatedVideos = videosData.filter((v) => v.id !== params.id);

  // If video not found, show a message
  if (!video) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Video not found</h1>
          <p className="mb-6">The video you're looking for doesn't exist or has been removed.</p>
          <Link href="/videos">
            <Button>Browse Videos</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Video player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden mb-4">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-16 w-16 rounded-full bg-primary/90 hover:bg-primary"
                >
                  <Icons.PlayIcon className="h-8 w-8 text-white" />
                </Button>
              </div>
            </div>

            {/* Video info */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>2 months ago</span>
                  </div>
                </div>
                {video.badge && (
                  <Badge
                    className={
                      video.badge === "FREE"
                        ? "bg-trading-green text-white"
                        : "bg-trading-red text-white"
                    }
                  >
                    {video.badge}
                  </Badge>
                )}
              </div>

              {/* Author info */}
              <div className="flex items-center justify-between p-4 border rounded-lg bg-card">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={video.author.avatar} alt={video.author.name} />
                    <AvatarFallback>{video.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href={`/author/${video.author.name}`} className="font-medium hover:underline">
                      {video.author.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">1.2M followers</p>
                  </div>
                </div>
                <Button>Follow</Button>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <div className="text-sm text-card-foreground space-y-2 bg-muted/40 p-4 rounded-lg">
                <p>
                  In this comprehensive video, we explore the key differences between swing trading and intraday trading,
                  helping you choose the right strategy based on your lifestyle, risk tolerance, and financial goals.
                </p>
                <p>
                  Topics covered:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Time commitment required for each strategy</li>
                  <li>Capital requirements and profit potential</li>
                  <li>Risk management techniques for both approaches</li>
                  <li>Psychological factors to consider</li>
                  <li>Best markets and instruments for each style</li>
                </ul>
                <p className="pt-2">
                  Whether you're a beginner looking to start trading or an experienced trader considering a change
                  in strategy, this video provides valuable insights to help you make an informed decision.
                </p>
              </div>
            </div>

            {/* Comments section */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Comments (24)</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Input placeholder="Add a comment..." className="w-full" />
                  </div>
                </div>
                <div className="space-y-4 pt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://ext.same-assets.com/338467261/${1000000 + i * 500000}.jpeg`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">Trader{i}</span>
                          <span className="text-xs text-muted-foreground">2 weeks ago</span>
                        </div>
                        <p className="text-sm mt-1">
                          {i === 1 && "Great video! This really helped me understand the difference between the two trading styles."}
                          {i === 2 && "I've been doing intraday trading but after watching this I might try swing trading as it seems to fit better with my schedule."}
                          {i === 3 && "Could you make a follow-up video about specific indicators that work best for swing trading?"}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                            <Icons.AwardIcon className="h-3 w-3 mr-1" /> 12
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with related videos */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((relatedVideo) => (
                <VideoCard
                  key={relatedVideo.id}
                  id={relatedVideo.id}
                  title={relatedVideo.title}
                  thumbnail={relatedVideo.thumbnail}
                  duration={relatedVideo.duration}
                  views={relatedVideo.views}
                  author={relatedVideo.author}
                  badge={relatedVideo.badge as "FREE" | "SPEAKER"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Input(props: React.ComponentPropsWithoutRef<"input">) {
  return (
    <input
      {...props}
      className={`px-3 py-2 rounded-md border border-input bg-background text-sm ${props.className}`}
    />
  );
}
