import { useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
    const commands = [
        {
            command: 'I would like to order *',
            callback: (food) => setMessage(`Your order is for: ${food}`)
        },
    ]

    const { transcript } = useSpeechRecognition({ commands })


    return (
        <div>
            <h3>Hello World!</h3>
            <p>{transcript ? transcript : 'Start listening for transcript'}</p>

            <button onClick={SpeechRecognition.startListening}>Start listening</button>
            &nbsp;
            <button onClick={SpeechRecognition.stopListening}>Stop listening</button>
        </div>
    );
}
