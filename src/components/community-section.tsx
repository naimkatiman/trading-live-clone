import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/card-components";
import { communityPostsData, groupsData } from "@/data/mock-data";

interface CommunityPostCardProps {
  id: string;
  title: string;
  description: string;
  answers?: number;
  upvotes?: number;
  avatars?: string[];
  className?: string;
}

export function CommunityPostCard({
  id,
  title,
  description,
  answers,
  upvotes,
  avatars = [],
  className,
}: CommunityPostCardProps) {
  return (
    <Card className={cn("p-4 h-full flex flex-col", className)}>
      <Link href={`/community/post/${id}`} className="hover:underline mb-2">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
      </Link>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-3 flex-1">
        {description}
      </p>
      <div className="flex justify-between items-center">
        {answers !== undefined && (
          <div className="flex items-center gap-1">
            {avatars.length > 0 ? (
              <div className="flex -space-x-2">
                {avatars.slice(0, 3).map((avatar, index) => (
                  <Avatar key={index} className="h-6 w-6 border-2 border-white">
                    <AvatarImage src={avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            ) : (
              <Icons.UsersIcon className="h-4 w-4 text-muted-foreground" />
            )}
            <span className="text-xs text-muted-foreground">
              {answers} Answers
            </span>
          </div>
        )}
        {upvotes !== undefined && (
          <div className="flex items-center gap-1">
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
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="m19 14-7-7-7 7" />
            </svg>
            <span className="text-xs text-muted-foreground">
              {upvotes} Upvotes
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-primary hover:text-primary hover:bg-primary/10"
        >
          {answers !== undefined ? "Answer" : "Create Post"}
        </Button>
      </div>
    </Card>
  );
}

interface GroupCardProps {
  id: string;
  name: string;
  members: number;
  avatar: string;
  className?: string;
}

export function GroupCard({
  id,
  name,
  members,
  avatar,
  className,
}: GroupCardProps) {
  return (
    <Link
      href={`/community/group/${id}`}
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors",
        className
      )}
    >
      <Avatar className="h-10 w-10">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-sm truncate">{name}</h3>
        <p className="text-xs text-muted-foreground">{members} members</p>
      </div>
    </Link>
  );
}

export function CommunityPostsSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Community's Choices"
        link={{ href: "/community", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {communityPostsData.map((post) => (
          <CommunityPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            answers={post.answers}
            upvotes={post.upvotes}
            avatars={post.avatars}
          />
        ))}
      </div>
    </div>
  );
}

export function GroupsSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Discover Groups"
        link={{ href: "/community/groups", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {groupsData.map((group) => (
          <GroupCard
            key={group.id}
            id={group.id}
            name={group.name}
            members={group.members}
            avatar={group.avatar}
          />
        ))}
      </div>
    </div>
  );
}
