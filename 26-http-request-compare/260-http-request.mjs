import {bench, run } from "./bench.mjs"
const http = await import ("http")
const count = 100;
  
bench(`request(http://example.com) x ${count}`, async () => {
  const requests = new Array(count);

  for (let i = 0; i < requests.length; i++) {
    requests[i] = http.request(`http://www.example.com/?nocache=${i}`)
  }

 // await Promise.all(requests);
});

await run();
 