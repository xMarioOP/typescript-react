'use client';

import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = () => Math.floor(Math.random() * 124) + 1

type ImageItems = { id: string, url: string }

const generateId = () => Math.random().toString(36).substring(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ])

  return (
    <div>
      < main >
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url} />
          </div>
        ))}
      </main >
      <footer >

      </footer>
    </div >
  );
}
