/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { ebooksData } from "@/data/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EBookCard } from "@/components/card-components";
import { Icons } from "@/components/ui/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EbookPageProps {
  params: {
    id: string;
  };
}

// Mock chapters for the e-book
const chapters = [
  { id: "1", title: "Introduction to Trading" },
  { id: "2", title: "Understanding Market Structure" },
  { id: "3", title: "Risk Management Principles" },
  { id: "4", title: "Technical Analysis Basics" },
  { id: "5", title: "Chart Patterns and Indicators" },
  { id: "6", title: "Developing a Trading Plan" },
];

// Mock content for the current chapter
const chapterContent = `
# Introduction to Trading

## What is Trading?

Trading is the process of buying and selling financial instruments, such as stocks, bonds, currencies, commodities, and derivatives, with the goal of making a profit. Traders aim to capitalize on price movements in these instruments by applying various strategies and techniques.

## Different Types of Trading

1. **Day Trading**: Involves buying and selling securities within the same trading day, with no positions held overnight.

2. **Swing Trading**: Involves holding positions for several days or weeks to profit from price "swings."

3. **Position Trading**: A longer-term approach where trades might be held for weeks, months, or even years.

4. **Scalping**: An ultra-short-term strategy that involves making numerous trades throughout the day to capture small price movements.

## The Psychology of Trading

Trading psychology is critical to success. Key psychological aspects include:

- **Discipline**: Following your trading plan even when emotions suggest otherwise.
- **Patience**: Waiting for the right setup rather than jumping in out of boredom or fear of missing out.
- **Emotional Control**: Managing fear and greed, which can lead to poor decision-making.
- **Resilience**: Bouncing back from inevitable losses and learning from mistakes.

Remember, successful trading requires more than just technical knowledge—it demands emotional intelligence and the ability to manage risk effectively.
`;

export default function EbookPage({ params }: EbookPageProps) {
  const [ebook, setEbook] = useState<typeof ebooksData[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [relatedEbooks, setRelatedEbooks] = useState<typeof ebooksData>([]);
  const [currentChapter, setCurrentChapter] = useState("1");

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const foundEbook = ebooksData.find(e => e.id === params.id);
      if (foundEbook) {
        setEbook(foundEbook);
        setRelatedEbooks(ebooksData.filter(e => e.id !== params.id));
      } else {
        setError("E-book not found");
      }
      setLoading(false);
    }, 500);
  }, [params.id]);

  if (loading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="aspect-[3/4] md:col-span-1 bg-muted animate-pulse rounded-md"></div>
            <div className="md:col-span-3 space-y-4">
              <div className="h-8 bg-muted animate-pulse rounded-md w-1/2"></div>
              <div className="h-4 bg-muted animate-pulse rounded-md w-1/4"></div>
              <div className="h-48 bg-muted animate-pulse rounded-md w-full"></div>
            </div>
          </div>
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

  if (!ebook) {
    return null;
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto pt-4 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="relative aspect-[3/4] bg-background rounded-md overflow-hidden border">
                <Image
                  src={ebook.cover}
                  alt={ebook.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <Button variant="outline" className="w-full">
                    <Icons.EyeIcon className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  {ebook.badge && (
                    <Badge
                      className={
                        ebook.badge === "FREE"
                          ? "bg-trading-green text-white"
                          : ebook.badge === "SPEAKER"
                          ? "bg-trading-red text-white"
                          : "bg-trading-yellow text-white"
                      }
                    >
                      {ebook.badge}
                    </Badge>
                  )}
                  <span className="text-sm text-muted-foreground">{ebook.downloads} downloads</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link href={`/author/${ebook.author.name}`}>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={ebook.author.avatar} alt={ebook.author.name} />
                      <AvatarFallback>{ebook.author.name[0]}</AvatarFallback>
                    </Avatar>
                  </Link>
                  <Link href={`/author/${ebook.author.name}`} className="text-sm font-medium hover:underline">
                    {ebook.author.name}
                  </Link>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="font-medium">Chapters</h3>
                  <div className="space-y-1">
                    {chapters.map((chapter) => (
                      <Button
                        key={chapter.id}
                        variant={currentChapter === chapter.id ? "secondary" : "ghost"}
                        className="w-full justify-start text-sm"
                        onClick={() => setCurrentChapter(chapter.id)}
                      >
                        {chapter.id}. {chapter.title}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="read" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="read">Read</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  </TabsList>

                  <TabsContent value="read" className="pt-4">
                    <div className="flex justify-between items-center mb-6">
                      <h1 className="text-2xl font-bold">{ebook.title}</h1>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" disabled={currentChapter === "1"}>
                          Previous
                        </Button>
                        <Button variant="outline" size="sm" disabled={currentChapter === chapters.length.toString()}>
                          Next
                        </Button>
                      </div>
                    </div>

                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      <h2 className="text-xl font-semibold mb-4">
                        Chapter {currentChapter}: {chapters.find(c => c.id === currentChapter)?.title}
                      </h2>

                      <div className="whitespace-pre-line">
                        {chapterContent}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="details" className="pt-4">
                    <h2 className="text-xl font-semibold mb-4">About this E-Book</h2>
                    <p className="mb-4">
                      This comprehensive e-book provides a detailed introduction to trading financial markets.
                      Whether you're a complete beginner or looking to refine your trading approach, this guide
                      covers essential concepts, strategies, and practical tips to help you navigate the complex
                      world of trading with confidence.
                    </p>

                    <h3 className="text-lg font-medium mt-6 mb-2">What You'll Learn</h3>
                    <ul className="list-disc pl-5 space-y-1 mb-4">
                      <li>Fundamental trading concepts and market structure</li>
                      <li>Risk management principles for protecting your capital</li>
                      <li>Technical analysis tools and how to use them effectively</li>
                      <li>Developing a personalized trading plan suited to your goals</li>
                      <li>Psychological aspects of trading and maintaining discipline</li>
                      <li>Common trading pitfalls and how to avoid them</li>
                    </ul>

                    <h3 className="text-lg font-medium mt-6 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Trading Basics</Badge>
                      <Badge variant="outline">Forex</Badge>
                      <Badge variant="outline">Technical Analysis</Badge>
                      <Badge variant="outline">Risk Management</Badge>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="pt-4">
                    <h2 className="text-xl font-semibold mb-6">Reviews</h2>

                    <div className="space-y-6">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="https://ext.same-assets.com/338467261/2780338374.jpeg" alt="User" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">Sarah Thomson</span>
                                <div className="flex items-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                      key={star}
                                      className="h-4 w-4 text-yellow-500 fill-current"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                                </div>
                              </div>
                              <p className="text-sm">
                                This e-book is an absolute gem for beginners. The way it breaks down complex trading concepts
                                into digestible sections helped me understand the markets much better. The chapter on risk
                                management was particularly eye-opening.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="https://ext.same-assets.com/338467261/1722170525.jpeg" alt="User" />
                              <AvatarFallback>MK</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">Michael Kozlov</span>
                                <div className="flex items-center">
                                  {[1, 2, 3, 4].map((star) => (
                                    <svg
                                      key={star}
                                      className="h-4 w-4 text-yellow-500 fill-current"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                  ))}
                                  <svg
                                    className="h-4 w-4 text-gray-300 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-sm">
                                Very informative content with practical examples. The only thing missing is more
                                advanced trading strategies for experienced traders, but as an introduction to
                                trading fundamentals, it's excellent.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-8">
              <h2 className="text-lg font-medium mb-4">Related E-Books</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedEbooks.slice(0, 3).map((book) => (
                  <EBookCard
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    cover={book.cover}
                    downloads={book.downloads}
                    author={book.author}
                    badge={book.badge}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
