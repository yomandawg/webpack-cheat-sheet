export default ({ htmlWebpackPlugin }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${htmlWebpackPlugin.options.title}</title>
      <meta name="description" content="${htmlWebpackPlugin.options.description}">
    </head>
    <body></body>
  </html>`;
