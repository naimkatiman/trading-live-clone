import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  id: string;
  title: string;
  subtitle: string;
  bgColor: string;
  image: string;
  badge?: {
    text: string;
    color: string;
  }[];
  completions?: string;
  className?: string;
}

export function FeaturedCard({
  id,
  title,
  subtitle,
  bgColor,
  image,
  badge,
  completions,
  className,
}: FeaturedCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-sm relative flex flex-col md:flex-row items-center",
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      <div className="p-6 flex-1">
        <h2 className="text-xl font-semibold text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-white/90 mb-4">
          {subtitle}
        </p>
        {completions && (
          <p className="text-xs text-white/80 mb-4">
            {completions} completed
          </p>
        )}
        {badge && (
          <div className="flex flex-wrap gap-2">
            {badge.map((item, index) => (
              <Link href={`/category/${item.text.toLowerCase()}`} key={index}>
                <Badge
                  className="bg-white hover:bg-white/90 text-gray-800 font-medium"
                  style={{
                    borderColor: item.color,
                    borderWidth: '1px'
                  }}
                >
                  {item.text}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-auto">
        <Image
          src={image}
          alt={title}
          width={280}
          height={200}
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function FeaturedSection() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-8">
      <FeaturedCard
        id="video-course"
        title="Best Forex Video Course-100 lessons from novice to master trader"
        subtitle="Comprehensive video course covering all aspects of forex trading"
        bgColor="#e44f2e"
        image="https://ext.same-assets.com/2752171162/659076605.png"
        completions="1M"
        badge={[
          { text: "Beginner (1-20)", color: "#3cd099" },
          { text: "Intermediate (21-71)", color: "#e5a728" },
          { text: "Advanced (72-100)", color: "#e44f2e" },
        ]}
      />
      <FeaturedCard
        id="ebook-collection"
        title="Best Forex E-book Collection-34 series from novice to master trader"
        subtitle="Comprehensive e-book library for forex traders at all levels"
        bgColor="#e5a728"
        image="https://ext.same-assets.com/2752171162/259953842.png"
        completions="1.1M"
        badge={[
          { text: "Beginner (1-8)", color: "#3cd099" },
          { text: "Intermediate (9-19)", color: "#e5a728" },
          { text: "Advanced (20-34)", color: "#e44f2e" },
        ]}
      />
    </div>
  );
}
