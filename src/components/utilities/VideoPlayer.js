"use client"

import { XCircleIcon } from "@phosphor-icons/react"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ( { youtubeId } ) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
 
    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-3">
                <button 
                    className="text-primary float-right bg-secondary px-4 mb-1" 
                    onClick={handleVideoPlayer}
                >
                    X
                </button>
                <YouTube 
                    videoId={youtubeId} 
                    onReady={(event) => {event.target.pauseVideo()}}
                    opts={option}    
                    onError={() => alert("Video is Broken, please try another")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return (
            <button 
                onClick={handleVideoPlayer}
                className="rounded fixed bottom-5 right-5 w-32 bg-primary text-dark text-xl hover:bg-accent transition-all"
            >
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player /> : ButtonOpenPlayer()
}

export default VideoPlayer