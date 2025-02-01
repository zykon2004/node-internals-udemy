import {bench, run } from "./bench.mjs"
const https = await import ("https")
const count = 100;
 
bench(`request(https://example.com) x ${count}`, async () => {
  const requests = new Array(count);

  for (let i = 0; i < requests.length; i++) {
    requests[i] = https.request(`https://www.example.com/?nocache=${i}`)
  }

 // await Promise.all(requests);
});

await run();
