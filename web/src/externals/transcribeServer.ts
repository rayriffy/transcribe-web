const secret = import.meta.env.VITE_TRANSCRIBE_KEY;

const reset = () =>
  fetch("http://localhost:7826/reset?t=" + Date.now(), {
    method: "POST",
    headers: {
      Authorization: "Bearer " + secret,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

const transcribe = () =>
  fetch("http://localhost:7826/transcription?t=" + Date.now(), {
    headers: {
      Authorization: "Bearer " + secret,
    },
  });

const poll = (time: string) =>
  fetch("http://localhost:7826/poll?time=" + encodeURIComponent(time), {
    headers: {
      Authorization: "Bearer " + secret,
    },
  });

export const transcribeServer = {
  reset,
  transcribe,
  poll,
};
