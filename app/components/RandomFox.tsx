import { useEffect, useRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type LazyImageProps = { src: string }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNative

const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    const [currentSrc, setCurrentSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    const node = useRef<HTMLImageElement>(null)


    useEffect(() => {
        //observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                //anIntersection => console.log
                if (entry.isIntersecting) {
                    console.log("hey!")
                    setCurrentSrc(src)
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
    }, [src])



    return (
        < img
            ref={node}
            src={currentSrc}
            {...imgProps}
        />
    );
};

export { LazyImage };






















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