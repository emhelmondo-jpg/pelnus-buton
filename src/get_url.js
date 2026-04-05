import https from 'https';

https.get('https://maps.app.goo.gl/d5jSLCWArXaoRtpC7', (res) => {
  console.log("LOCATION:", res.headers.location);
}).on('error', (e) => {
  console.error(e);
});
