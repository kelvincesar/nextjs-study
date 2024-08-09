"use client"

import { useState } from "react";

export default function UpVoteButton() {
    const [upvoteCount, setupvoteCount] = useState(0);
    return (
        <button 
            onClick={() => setupvoteCount(upvoteCount + 1)}
            className="bg-emerald-500 text-white p-2 mt-10">
            Joinha ({upvoteCount})
        </button>
    )
}