/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { videosData } from "@/data/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { VideoCard } from "@/components/card-components";

interface VideoPageProps {
  params: {
    id: string;
  };
}

export default function VideoPage({ params }: VideoPageProps) {
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedVideos, setRelatedVideos] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundVideo = videosData.find(v => v.id === params.id);
      if (foundVideo) {
        setVideo(foundVideo);
        setRelatedVideos(videosData.filter(v => v.id !== params.id));
      } else {
        setError("Video not found");
      }
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4">
          <div className="w-full aspect-video bg-muted animate-pulse rounded-md"></div>
          <div className="mt-4 h-8 bg-muted animate-pulse rounded-md w-1/2"></div>
          <div className="mt-2 h-4 bg-muted animate-pulse rounded-md w-1/4"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4 text-center">
          <h1 className="text-2xl font-bold text-destructive">Error: {error}</h1>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </Layout>
    );
  }

  if (!video) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto pt-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-video bg-black rounded-md overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full w-16 h-16 flex items-center justify-center"
                >
                  <Icons.PlayIcon className="h-8 w-8" />
                </Button>
              </div>
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h1 className="text-2xl font-bold">{video.title}</h1>
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

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Link href={`/author/${video.author.name}`}>
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={video.author.avatar} alt={video.author.name} />
                      <AvatarFallback>{video.author.name[0]}</AvatarFallback>
                    </Avatar>
                  </Link>
                  <div>
                    <Link href={`/author/${video.author.name}`} className="font-medium hover:underline">
                      {video.author.name}
                    </Link>
                    <div className="text-sm text-muted-foreground">Forex Trader & Educator</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm">
                    <Icons.EyeIcon className="h-4 w-4 mr-2" />
                    {video.views} views
                  </Button>
                  <Button variant="outline" size="sm">
                    Share
                  </Button>
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h2 className="text-lg font-medium">About this video</h2>
                <p className="text-muted-foreground text-sm">
                  This educational video explores the differences between swing trading and intraday trading,
                  helping traders decide which strategy suits their lifestyle, risk tolerance, and financial goals.
                  The content covers time commitment, capital requirements, risk management, and profit potential,
                  offering practical insights for both beginners and experienced traders looking to refine their approach.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge variant="outline">Trading Strategies</Badge>
                  <Badge variant="outline">Forex</Badge>
                  <Badge variant="outline">Swing Trading</Badge>
                  <Badge variant="outline">Day Trading</Badge>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <h2 className="text-lg font-medium">Comments</h2>

                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>YC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="mb-1">
                      <span className="font-medium">Your Comment</span>
                    </div>
                    <textarea
                      className="w-full p-2 border rounded-md min-h-[100px] bg-background"
                      placeholder="Add a comment..."
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <Button>Comment</Button>
                    </div>
                  </div>
                </div>

                <Card className="mt-6">
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="https://ext.same-assets.com/338467261/2780338374.jpeg" alt="User" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">John Doe</span>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm">
                          Thank you for this insightful video! I've been struggling to decide between swing and intraday trading,
                          and your explanation of the pros and cons really helped me understand which approach better fits my schedule.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Icons.PlayIcon className="h-4 w-4 mr-2" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-lg font-medium">Related Videos</h2>
            <div className="space-y-4">
              {relatedVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  views={video.views}
                  author={video.author}
                  badge={video.badge}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
