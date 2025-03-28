import React from "react";
import { Layout } from "@/components/layout";
import { FeaturedSection } from "@/components/featured-section";
import {
  LiveSection,
  VideoSection,
  HotVideoSection,
  EBookSection,
  TopStreamersSection
} from "@/components/media-sections";
import {
  CommunityPostsSection,
  GroupsSection
} from "@/components/community-section";
import {
  TestimonialsSection,
  LecturersSection
} from "@/components/testimonials-section";
import HomePageClient from "@/components/home-page-client";

export default function HomePage() {
  return (
    <Layout>
      <HomePageClient>
        <div className="max-w-7xl mx-auto">
          <FeaturedSection />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <LiveSection />
              <VideoSection />
              <EBookSection />
              <CommunityPostsSection />
              <GroupsSection />
              <TestimonialsSection />
              <LecturersSection />
            </div>
            <div>
              <TopStreamersSection />
              <HotVideoSection />
            </div>
          </div>
        </div>
      </HomePageClient>
    </Layout>
  );
}
export const runtime = "nodejs";
