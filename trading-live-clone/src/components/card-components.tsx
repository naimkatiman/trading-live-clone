import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";

// Video Card Component
interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  author: {
    name: string;
    avatar: string;
  };
  badge?: "FREE" | "SPEAKER";
  className?: string;
}

export function VideoCard({
  id,
  title,
  thumbnail,
  duration,
  views,
  author,
  badge,
  className,
}: VideoCardProps) {
  return (
    <Card className={cn("overflow-hidden border-0 shadow-sm", className)}>
      <Link href={`/video/${id}`}>
        <div className="relative group">
          <div className="w-full aspect-video rounded-md overflow-hidden bg-gray-100">
            <Image
              src={thumbnail}
              alt={title}
              width={320}
              height={180}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-sm">
            {duration}
          </div>
          {badge && (
            <div className="absolute top-2 left-2">
              <Badge
                className={
                  badge === "FREE"
                    ? "bg-trading-green text-white text-xs px-2 py-0.5"
                    : "bg-trading-red text-white text-xs px-2 py-0.5"
                }
              >
                {badge}
              </Badge>
            </div>
          )}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Icons.PlayIcon className="w-12 h-12 text-white" />
          </div>
        </div>
      </Link>
      <CardContent className="pt-3 pb-2 px-1">
        <Link href={`/video/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        </Link>
      </CardContent>
      <CardFooter className="pt-0 pb-1 px-1 flex items-center gap-2">
        <Link href={`/author/${author.name}`}>
          <Avatar className="h-5 w-5">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <Icons.EyeIcon className="h-3 w-3" />
          <span>{views}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

// E-Book Card Component
interface EBookCardProps {
  id: string;
  title: string;
  cover: string;
  author: {
    name: string;
    avatar: string;
  };
  downloads: string;
  badge?: "FREE" | "SPEAKER" | "PAID FOR";
  className?: string;
}

export function EBookCard({
  id,
  title,
  cover,
  author,
  downloads,
  badge,
  className,
}: EBookCardProps) {
  return (
    <Card className={cn("overflow-hidden border-0 shadow-sm", className)}>
      <Link href={`/ebook/${id}`}>
        <div className="relative group">
          <div className="w-full aspect-[3/4] rounded-md overflow-hidden bg-gray-100">
            <Image
              src={cover}
              alt={title}
              width={240}
              height={320}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          {badge && (
            <div className="absolute top-2 left-2">
              <Badge
                className={cn(
                  "text-white text-xs px-2 py-0.5",
                  badge === "FREE" ? "bg-trading-green" :
                  badge === "SPEAKER" ? "bg-trading-red" :
                  "bg-trading-yellow"
                )}
              >
                {badge}
              </Badge>
            </div>
          )}
        </div>
      </Link>
      <CardContent className="pt-3 pb-2 px-1">
        <Link href={`/ebook/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        </Link>
      </CardContent>
      <CardFooter className="pt-0 pb-1 px-1 flex items-center gap-2">
        <Link href={`/author/${author.name}`}>
          <Avatar className="h-5 w-5">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <Icons.EyeIcon className="h-3 w-3" />
          <span>{downloads}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

// Streamer Card Component
interface StreamerCardProps {
  id: string;
  name: string;
  avatar: string;
  description: string;
  followers: string;
  rank?: number;
  isLive?: boolean;
  className?: string;
}

export function StreamerCard({
  id,
  name,
  avatar,
  description,
  followers,
  rank,
  isLive,
  className,
}: StreamerCardProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {rank && (
        <div className="text-lg font-medium text-muted-foreground">{rank}</div>
      )}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href={`/streamer/${id}`}>
            <div className="relative">
              <Avatar className="h-12 w-12">
                <AvatarImage src={avatar} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              {isLive && (
                <span className="absolute -top-1 -right-1 block h-3 w-3 rounded-full bg-red-500 ring-2 ring-white" />
              )}
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-80">
          <div className="flex justify-between space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{name}</h4>
              <p className="text-xs text-muted-foreground line-clamp-3">
                {description}
              </p>
              <div className="flex items-center pt-2">
                <Icons.EyeIcon className="h-3 w-3 mr-1 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{followers}</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      <div className="flex-1 min-w-0">
        <Link href={`/streamer/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm truncate">{name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground truncate">{description.split('<br>')[0]}</p>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Icons.EyeIcon className="h-3 w-3" />
        <span>{followers}</span>
      </div>
    </div>
  );
}

// Live Stream Card Component
interface LiveStreamCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  viewers: string;
  streamer: {
    name: string;
    avatar: string;
  };
  className?: string;
}

export function LiveStreamCard({
  id,
  title,
  thumbnail,
  duration,
  viewers,
  streamer,
  className,
}: LiveStreamCardProps) {
  return (
    <Card className={cn("overflow-hidden border-0 shadow-sm", className)}>
      <Link href={`/stream/${id}`}>
        <div className="relative group">
          <div className="w-full aspect-video rounded-md overflow-hidden bg-gray-100">
            <Image
              src={thumbnail}
              alt={title}
              width={320}
              height={180}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-sm flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            LIVE
          </div>
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded-sm">
            {duration}
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
            <Icons.PlayIcon className="w-12 h-12 text-white" />
          </div>
        </div>
      </Link>
      <CardContent className="pt-3 pb-2 px-1">
        <Link href={`/stream/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        </Link>
      </CardContent>
      <CardFooter className="pt-0 pb-1 px-1 flex items-center gap-2">
        <Link href={`/streamer/${streamer.name}`}>
          <Avatar className="h-5 w-5">
            <AvatarImage src={streamer.avatar} alt={streamer.name} />
            <AvatarFallback>{streamer.name[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <Icons.EyeIcon className="h-3 w-3" />
          <span>{viewers}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

// Section Header Component
interface SectionHeaderProps {
  title: string;
  link?: {
    href: string;
    text: string;
  };
  className?: string;
}

export function SectionHeader({ title, link, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-4", className)}>
      <h2 className="text-lg font-medium flex items-center gap-2">
        {title}
        {link && (
          <Icons.ArrowRightIcon className="h-4 w-4 text-muted-foreground" />
        )}
      </h2>
      {link && (
        <Link
          href={link.href}
          className="text-sm text-muted-foreground hover:text-primary hover:underline flex items-center"
        >
          {link.text}
          <Icons.ArrowRightIcon className="h-4 w-4 ml-1" />
        </Link>
      )}
    </div>
  );
}
