export default ({ htmlWebpackPlugin }) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>${htmlWebpackPlugin.options.title}</title>
    </head>
    <body>
      <div class="alert alert-primary" role="alert">
        This is a primary alert!
      </div>
      <div class="dropdown my-dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </body>
  </html>`;
