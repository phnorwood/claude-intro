'use client';

import ReactPlayer from 'react-player/lazy';

interface VideoEmbedProps {
  url: string;
  title?: string;
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  return (
    <div className="my-8">
      {title && <h2 className="mb-4 text-2xl font-semibold">{title}</h2>}
      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          config={{
            youtube: {
              playerVars: { modestbranding: 1 },
            },
          }}
        />
      </div>
    </div>
  );
}
