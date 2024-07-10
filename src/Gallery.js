import { sculptureList } from "./data";
import { useState } from "react";

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Toolbar({onPlayMovie, onUploadImage}) {
    return(
        <div>
            <Button handleClick={onPlayMovie}>Play movie</Button>
            <Button handleClick={onUploadImage}>Upload image</Button>
        </div>
    );
}

function Button({handleClick, children}) {
 return (
    <button onClick={handleClick}>
        {children}
    </button>
 );   
}

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const [score, setScore] = useState(0)

    function increment() {
        setScore(s => s + 1)
    }

    const hasNext = index < sculptureList.length - 1;
    const hasPrevious = index > 0;

    let sculpture = sculptureList[index];

    function handlePreviousClick() {
        if (hasPrevious) {
            setIndex(index - 1);
        } else {
            // loop
            setIndex(sculptureList.length - 1);
        }
    }

    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1);
        } else {
            // loop
            setIndex(0);
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <>
            <section>
                <h1>Amazing scientists</h1>
                <Profile />
                <Profile />
                <Profile />
            </section>
            <Toolbar
                onPlayMovie={() => alert('Playing')}
                onUploadImage={() => alert('Uploading')}
            />
            <div>
                <h2>
                    <i>{sculpture.name} by {sculpture.artist}</i>
                </h2>
                <h3>({index + 1} of {sculptureList.length})</h3>
                <button onClick={handlePreviousClick}>
                    Previous
                </button>
                <button onClick={handleNextClick}>
                    Next
                </button>
                <div>
                    <img
                        src={sculpture.url}
                        alt={sculpture.alt}
                    />
                </div>
                <button onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Show'}details
                </button>
                {showMore && <p>{sculpture.description}</p>}
            </div>
            <button onClick={increment}>+1</button>
            <button onClick={() => {
                increment()
                increment()
                increment()
            }}>
                +3
            </button>
            <div>Score: {score}</div>
        </>
    );
}