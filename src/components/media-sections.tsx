import React from "react";
import { SectionHeader } from "@/components/card-components";
import { VideoCard, EBookCard, LiveStreamCard, StreamerCard } from "@/components/card-components";
import { videosData, ebooksData, liveStreamsData, streamersData } from "@/data/mock-data";

export function LiveSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Must-Watch Live"
        link={{ href: "/live", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {liveStreamsData.map((stream) => (
          <LiveStreamCard
            key={stream.id}
            id={stream.id}
            title={stream.title}
            thumbnail={stream.thumbnail}
            duration={stream.duration}
            viewers={stream.viewers}
            streamer={stream.streamer}
          />
        ))}
      </div>
    </div>
  );
}

export function VideoSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Trending Videos"
        link={{ href: "/videos", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {videosData.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            thumbnail={video.thumbnail}
            duration={video.duration}
            views={video.views}
            author={video.author}
            badge={video.badge as "FREE" | "SPEAKER"}
          />
        ))}
      </div>
    </div>
  );
}

export function HotVideoSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Hot Videos"
        link={{ href: "/videos/hot", text: "More" }}
      />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <VideoCard
            id={videosData[3].id}
            title={videosData[3].title}
            thumbnail={videosData[3].thumbnail}
            duration={videosData[3].duration}
            views={videosData[3].views}
            author={videosData[3].author}
            badge={videosData[3].badge as "FREE" | "SPEAKER"}
            className="w-1/3"
          />
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">1</span>
              <div>
                <h3 className="text-sm font-medium">What is Forex?</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">2</span>
              <div>
                <h3 className="text-sm font-medium">Currency Pairs</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">3</span>
              <div>
                <h3 className="text-sm font-medium">Single Candle Reversal Pattern</h3>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-muted-foreground">4</span>
              <div>
                <h3 className="text-sm font-medium">Double Candle Reversal Pattern</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EBookSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Popular E-books"
        link={{ href: "/ebooks", text: "More" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {ebooksData.map((ebook) => (
          <EBookCard
            key={ebook.id}
            id={ebook.id}
            title={ebook.title}
            cover={ebook.cover}
            downloads={ebook.downloads}
            author={ebook.author}
            badge={ebook.badge as "FREE" | "SPEAKER" | "PAID FOR"}
          />
        ))}
      </div>
    </div>
  );
}

export function TopStreamersSection() {
  return (
    <div className="mb-8">
      <SectionHeader
        title="Top Streamers"
        link={{ href: "/streamers", text: "More" }}
      />
      <div className="flex flex-col gap-3">
        {streamersData.slice(0, 5).map((streamer) => (
          <StreamerCard
            key={streamer.id}
            id={streamer.id}
            name={streamer.name}
            avatar={streamer.avatar}
            description={streamer.description}
            followers={streamer.followers}
            rank={streamer.rank}
            isLive={streamer.isLive}
          />
        ))}
      </div>
    </div>
  );
}
