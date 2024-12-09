const keysPressed = {}; 

function playSoundEffect(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play().catch(error => {
        console.error("Error playing sound:", error);
    });
}

const soundMap = {
    w: { id: "openhat", sound: "./sfx/openhat.wav" },
    n: { id: "clap", sound: "./sfx/clap.wav" },
    l: { id: "tom", sound: "./sfx/tom.wav" },
    e: { id: "ride", sound: "./sfx/ride.wav" },
    q: { id: "hihat", sound: "./sfx/hihat.wav" },
    j: { id: "snare", sound: "./sfx/snare.wav" },
    k: { id: "kick", sound: "./sfx/kick.wav" },
    m: { id: "tink", sound: "./sfx/tink.wav" }
};

window.addEventListener("keydown", (e) => {
    keysPressed[e.key] = true;
    const soundInfo = soundMap[e.key];
    if (soundInfo) {
        playSoundEffect(soundInfo.sound);
    }
});

document.querySelectorAll(".trommekit").forEach(div => {
    const divId = div.id;
    const soundInfo = Object.values(soundMap).find(info => info.id === divId);
    if (soundInfo) {
        div.addEventListener("click", () => {
            playSoundEffect(soundInfo.sound);
        });
    } else {
        console.warn(`No sound mapped for div ID: ${divId}`);
    }
});
