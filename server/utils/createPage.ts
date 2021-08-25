export const createPage = (title: string) => {
  const page = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="./favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="DreamD4 - Dream Store" />
      <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap" rel="stylesheet">
      <script src="https://use.fontawesome.com/releases/v5.2.0/js/all.js"></script>
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
      <title>배민 문방구 | ${title}</title>
    </head>
    <body>
      <div id="root"></div>
      <div id="root-modal"></div>
      <script type="module" src="/main.js"></script>
    </body>
  </html>`;
  return page;
};
