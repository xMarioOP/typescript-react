import { useEffect, useRef, useState } from "react";

type Props = { image: string }

const RandomFox = ({ image }: Props): JSX.Element => {
    const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    const node = useRef<HTMLImageElement>(null)


    useEffect(() => {
        //observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //anIntersection => console.log
                if (entry.isIntersecting) {
                    console.log("hey!")
                    setSrc(image)
                }
            })
        })

        //observer node
        if (node.current) {
            observer.observe(node.current)
        }

        //disconnect
        return () => {
            observer.disconnect()
        }
    }, [image])



    return (
        < img
            ref={node}
            width={320}
            height="auto"
            className="rounded bg-gray-300"
            src={src}
            alt="fox image"
        />
    );
};

export { RandomFox };






















// import type { FunctionComponent, FC } from "react";

// const RandomFox = ()  => {
//     return (
//         <img src="" alt="" />
//     );
// };

// const RandomFox: FunctionComponent = () => {                      /////// PREVIOUSLY USED
//     return (
//         <img src="" alt="" />
//     );
// };

// const RandomFox: FC = () => {
//     return (
//         <img src="" alt="" />
//     );
// };