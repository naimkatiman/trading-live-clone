"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { communityPostsData } from "@/data/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/lib/auth";

type Params = {
  id: string;
}

interface PostPageProps {
  params: Params;
}

// Mock answers
const answers = [
  {
    id: "1",
    author: {
      name: "James Thompson",
      avatar: "https://ext.same-assets.com/338467261/2780338374.jpeg",
    },
    content: "When I first started trading, my entry criteria was based solely on basic chart patterns. I'd enter a trade whenever I saw a 'textbook' head and shoulders or double bottom without considering market context or other confirming factors. As you might guess, this led to many false signals and unnecessary losses. Over time, I've learned to incorporate volume analysis, market structure, and even fundamental factors to create a more robust entry strategy. Now, I wait for multiple confirming signals before entering a trade, which has significantly improved my win rate.",
    createdAt: "3 days ago",
    upvotes: 24,
  },
  {
    id: "2",
    author: {
      name: "Sophia Chen",
      avatar: "https://ext.same-assets.com/338467261/1722170525.jpeg",
    },
    content: "My trading journey began with significant losses because I didn't have proper risk management. I would risk 10-15% of my account on a single trade, which quickly depleted my capital during drawdown periods. The turning point was when I implemented the 1% rule - never risking more than 1% of my account on any single trade. This simple change allowed me to stay in the game long enough to develop my skills. For entries, I focus on key support/resistance levels with confirmation from RSI divergences. This combination gives me an edge that I've refined over years of trading.",
    createdAt: "2 days ago",
    upvotes: 18,
  },
];

export default function PostPage({ params }: PostPageProps) {
  const { user } = useAuth();
  const [post, setPost] = useState<typeof communityPostsData[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundPost = communityPostsData.find(p => p.id === params.id);
      if (foundPost) {
        setPost(foundPost);
      } else {
        setError("Post not found");
      }
      setLoading(false);
    }, 500);
  }, [params.id]);

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;

    // In a real app, we would send this to an API
    alert("Answer submitted: " + comment);
    setComment("");
  };

  if (loading) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto pt-8 px-4">
          <div className="h-8 bg-muted animate-pulse rounded-md w-3/4 mb-4"></div>
          <div className="h-4 bg-muted animate-pulse rounded-md w-1/2 mb-8"></div>
          <div className="space-y-4">
            <div className="h-32 bg-muted animate-pulse rounded-md w-full"></div>
            <div className="h-32 bg-muted animate-pulse rounded-md w-full"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto pt-8 px-4 text-center">
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

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto pt-6 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Button variant="ghost" size="sm" className="h-8" onClick={() => window.history.back()}>
              <Icons.ArrowRightIcon className="h-4 w-4 mr-1 rotate-180" />
              Back
            </Button>
            <span className="text-sm text-muted-foreground">Community &gt; Questions</span>
          </div>

          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-muted-foreground">{post.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-2">
              {post.avatars && post.avatars.length > 0 ? (
                post.avatars.map((avatar, index) => (
                  <Avatar key={index} className="border-2 border-background h-6 w-6">
                    <AvatarImage src={avatar} alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))
              ) : (
                <Avatar className="h-6 w-6">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              )}
            </div>
            <span className="text-sm">
              {post.answers ? `${post.answers} Answers` : post.upvotes ? `${post.upvotes} Upvotes` : "No responses yet"}
            </span>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="space-y-6">
          <h2 className="text-lg font-medium">Answers</h2>

          {answers.map((answer) => (
            <Card key={answer.id} className="mb-4">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={answer.author.avatar} alt={answer.author.name} />
                    <AvatarFallback>{answer.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">{answer.author.name}</span>
                      <span className="text-xs text-muted-foreground">{answer.createdAt}</span>
                    </div>
                    <p className="text-sm whitespace-pre-line">
                      {answer.content}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 py-2 flex justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="h-8 gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m19 14-7-7-7 7" />
                    </svg>
                    Upvote ({answer.upvotes})
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8">
                    Reply
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="h-8">
                  Share
                </Button>
              </CardFooter>
            </Card>
          ))}

          {user ? (
            <Card className="mt-8">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Your Answer</h3>
                <form onSubmit={handleSubmitAnswer}>
                  <textarea
                    className="w-full p-3 border rounded-md min-h-[150px] bg-background"
                    placeholder="Share your experience or thoughts..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="flex justify-end mt-4">
                    <Button type="submit" disabled={!comment.trim()}>
                      Post Answer
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-muted/50 mt-8">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-medium mb-2">Want to contribute?</h3>
                <p className="text-muted-foreground mb-4">
                  Log in to share your trading experience and help others on their journey.
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline">Sign Up</Button>
                  <Button>Log In</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
