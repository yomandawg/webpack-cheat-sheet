export default ({ htmlWebpackPlugin }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${htmlWebpackPlugin.options.title}</title>
    </head>
    <body></body>
  </html>`;
