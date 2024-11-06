'use client';

import { MouseEventHandler, } from "react";
import { useState } from "react";
import { LazyImage } from "./components/RandomFox";

const random = () => Math.floor(Math.random() * 124) + 1
const generateId = () => Math.random().toString(36).substring(2, 9)

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const newImageItem: IFoxImageItem = { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` }
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
            <LazyImage
              className="rounded bg-gray-300"
              width={320}
              height="auto"
              title="Random Fox"
              src={url}
              onClick={() => console.log("hey")}
            />
          </div>
        ))}
      </main >
      <footer >

      </footer>
    </div >
  );
}
