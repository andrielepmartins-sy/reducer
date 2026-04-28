"use client";

import { useState } from 'react';
import { VideoPlayer } from '../components/videoPlayer';

export default function home() {
    const [playing, setPlaying] = useState(false);

    return (
        <div className="flex flex-col flex-1 items-center justify-center
         bg-zinc-50 font-sans dark:bg-black"> 
            <div className="border  border-blue-400 rounded-lg w-96 h-11/12 p-4 mb-4 " > 
            <p className='text-2x1 text-blue-400 mb-3 justify-center items-center flex'>
                {playing ? 'RODANDO' : 'PAUSADO'}
            </p>
            </div>

            <button
                onClick={() => setPlaying(!playing)}
                className="bg-blue-600 text-white rounded-md p-3 m-4 min-w-50"
            >
                {playing ? 'pause' : 'play'}
            </button>
            <div className="border-2 border-blue-500 p-2 mb-4 rounded-lg">
                <VideoPlayer
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    isPLaying={playing}
                />
            </div>
        </div>
    );
}
