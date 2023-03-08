async function handleRequest(request) {
  const response = await fetch('https://api.waifu.pics/sfw/waifu');
  const data = await response.json();
  const imageUrl = data.url;
  const imageHtml = `<img src="${imageUrl}">`;
  return new Response(imageHtml, {
    headers: { 'content-type': 'text/html' },
  });
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
