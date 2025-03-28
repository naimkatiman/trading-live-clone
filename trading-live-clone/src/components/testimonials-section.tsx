import React from "react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/card-components";
import { testimonialsData, lecturersData } from "@/data/mock-data";

interface TestimonialCardProps {
  id: string;
  name: string;
  avatar: string;
  text: string;
  className?: string;
}

export function TestimonialCard({
  id,
  name,
  avatar,
  text,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <Avatar className="h-10 w-10 mt-1">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <Link href={`/user/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm">{name}</h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
          {text}
        </p>
      </div>
    </div>
  );
}

interface LecturerCardProps {
  id: string;
  name: string;
  avatar: string;
  description: string;
  className?: string;
}

export function LecturerCard({
  id,
  name,
  avatar,
  description,
  className,
}: LecturerCardProps) {
  return (
    <Card className={cn("flex flex-col items-center p-5 text-center", className)}>
      <Avatar className="h-16 w-16 mb-4">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <Link href={`/lecturer/${id}`} className="hover:underline">
        <h3 className="font-medium text-sm mb-2">{name}</h3>
      </Link>
      <p className="text-xs text-muted-foreground mb-4 line-clamp-4">
        {description}
      </p>
      <Button
        variant="outline"
        size="sm"
        className="border-primary text-primary hover:bg-primary/10 text-xs"
      >
        Subscribe
      </Button>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <div className="mb-8">
      <SectionHeader title="Testimonials" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            avatar={testimonial.avatar}
            text={testimonial.text}
          />
        ))}
      </div>
    </div>
  );
}

export function LecturersSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Top Lecturers"
        link={{ href: "/lecturers", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {lecturersData.map((lecturer) => (
          <LecturerCard
            key={lecturer.id}
            id={lecturer.id}
            name={lecturer.name}
            avatar={lecturer.avatar}
            description={lecturer.description}
          />
        ))}
      </div>
    </div>
  );
}
