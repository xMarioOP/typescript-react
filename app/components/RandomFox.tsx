
type Props = { image: string }

const RandomFox = ({ image }: Props): JSX.Element => {
    return (
        < img
            width={320}
            height="auto"
            className="rounded"
            src={image}
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