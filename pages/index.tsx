import React, { useEffect, useState } from 'react'
import useASR from '../src/hooks/useASR'

export default function index() {

    const { start, stop } = useASR({
        onMessage: (e) => console.log("asr msg", e),
    })

    const onStart = () => {
        start()

    }
    const onStop = () => {
        stop()
    }
    return (
        <div>
            Hello
            <button onClick={onStart}> start</button>
            <button onClick={onStop}> stop</button>
        </div>
    )
}
