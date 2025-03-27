import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { EBookCard } from "@/components/card-components";
import { ebooksData } from "@/data/mock-data";
import { Icons } from "@/components/ui/icons";

export default function EBookDetailPage({ params }: { params: { id: string } }) {
  // Find the ebook that matches the ID
  const ebook = ebooksData.find((e) => e.id === params.id);

  // Get related ebooks (excluding the current one)
  const relatedEbooks = ebooksData.filter((e) => e.id !== params.id);

  // If ebook not found, show a message
  if (!ebook) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">E-book not found</h1>
          <p className="mb-6">The e-book you're looking for doesn't exist or has been removed.</p>
          <Link href="/ebooks">
            <Button>Browse E-books</Button>
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
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              {/* Book cover */}
              <div className="w-full md:w-56 shrink-0">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={ebook.cover}
                    alt={ebook.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* E-book info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{ebook.title}</h1>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{ebook.downloads} downloads</span>
                      <span>•</span>
                      <span>Published 3 months ago</span>
                    </div>
                  </div>
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
                </div>

                {/* Author info */}
                <div className="flex items-center gap-3 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={ebook.author.avatar} alt={ebook.author.name} />
                    <AvatarFallback>{ebook.author.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link href={`/author/${ebook.author.name}`} className="font-medium hover:underline">
                      {ebook.author.name}
                    </Link>
                    <p className="text-sm text-muted-foreground">800K followers</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button className="gap-2">
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Download PDF
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Icons.BookIcon className="h-4 w-4" />
                    Read Online
                  </Button>
                  <Button variant="outline">
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
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>

            {/* Book description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">About This E-book</h2>
              <div className="text-sm text-card-foreground space-y-3 bg-muted/40 p-4 rounded-lg">
                <p>
                  {ebook.title === "The Trader's Mindset" ? (
                    <>
                      "The Trader's Mindset" is an essential guide for anyone looking to master the psychological aspects of trading.
                      This comprehensive e-book delves into the mental challenges that traders face and provides practical strategies
                      to overcome them.
                    </>
                  ) : ebook.title === "6 Steps to Trading Financial Markets" ? (
                    <>
                      This practical guide breaks down the complex world of financial trading into six clear, actionable steps.
                      Whether you're a complete beginner or looking to refine your approach, this e-book provides a structured
                      path to developing a profitable trading system.
                    </>
                  ) : ebook.title === "FOREX MADE FUN - EASY FOR NEWBIE" ? (
                    <>
                      A beginner-friendly introduction to the foreign exchange market, designed to make learning about forex trading
                      enjoyable and accessible. This e-book uses simple language, helpful analogies, and visual aids to explain complex
                      concepts in an engaging way.
                    </>
                  ) : (
                    <>
                      This comprehensive diagram provides a visual roadmap for traders at every level. From market analysis to
                      execution strategies, risk management to psychological preparation, this blueprint covers all essential
                      aspects of successful trading.
                    </>
                  )}
                </p>
                <p>
                  <strong>What You'll Learn:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Understanding market dynamics and identifying opportunities</li>
                  <li>Developing a robust trading strategy suited to your personality</li>
                  <li>Effective risk management techniques to protect your capital</li>
                  <li>Psychological tools to maintain discipline and emotional control</li>
                  <li>Practical tips for implementation in real-world trading scenarios</li>
                </ul>
                <p className="pt-2">
                  Perfect for traders at all levels, this e-book combines theoretical knowledge with practical
                  advice to help you navigate the markets with confidence and consistency.
                </p>
              </div>
            </div>

            {/* Table of contents */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Table of Contents</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-card p-4 border-b">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chapter 1: Introduction</span>
                    <span className="text-xs text-muted-foreground">8 pages</span>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chapter 2: Understanding Market Psychology</span>
                    <span className="text-xs text-muted-foreground">12 pages</span>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chapter 3: Developing Your Trading Plan</span>
                    <span className="text-xs text-muted-foreground">15 pages</span>
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chapter 4: Managing Risk Effectively</span>
                    <span className="text-xs text-muted-foreground">18 pages</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Chapter 5: Practical Application</span>
                    <span className="text-xs text-muted-foreground">20 pages</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Reviews (36)</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://ext.same-assets.com/338467261/${2000000 + i * 300000}.jpeg`} />
                          <AvatarFallback>R{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">Reader{i}</div>
                          <div className="text-xs text-muted-foreground">1 month ago</div>
                        </div>
                      </div>
                      <div className="flex">
                        {Array(5).fill(0).map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill={index < 5 - i % 2 ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-yellow-500 h-4 w-4"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">
                      {i === 1 && "This e-book completely changed my approach to trading. The concepts are clearly explained and the practical examples make it easy to apply in real trading scenarios."}
                      {i === 2 && "A must-read for anyone serious about trading. I especially appreciated the section on risk management, which helped me protect my capital while still making profitable trades."}
                      {i === 3 && "Well-written and insightful. The psychological aspects covered in this book are rarely discussed in other trading materials, but they're crucial for long-term success."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar with related ebooks */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Related E-books</h2>
            <div className="space-y-4">
              {relatedEbooks.map((relatedEbook) => (
                <EBookCard
                  key={relatedEbook.id}
                  id={relatedEbook.id}
                  title={relatedEbook.title}
                  cover={relatedEbook.cover}
                  downloads={relatedEbook.downloads}
                  author={relatedEbook.author}
                  badge={relatedEbook.badge as "FREE" | "SPEAKER" | "PAID FOR"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
