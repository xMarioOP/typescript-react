'use client';

import { MouseEventHandler, } from "react";
import { useState } from "react";
import { RandomFox } from "./components/RandomFox";

const random = () => Math.floor(Math.random() * 124) + 1

type ImageItem = { id: string, url: string }

const generateId = () => Math.random().toString(36).substring(2, 9)

export default function Home() {

  const [images, setImages] = useState<Array<ImageItem>>([])



  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()



    const newImageItem: ImageItem = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <div>
      < main >
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <button onClick={addNewFox}>Add new fox</button>

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
