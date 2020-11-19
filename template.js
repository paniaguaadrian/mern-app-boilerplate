// Render the HTML with React components

export default () => {
  return `<!doctype html>
      <html lang="en">
       <head>
        <meta charset="utf-8">
        <title>MERN Kickstart</title>
       </head>
       <body>
        <div id="root"></div>
        <script type="text/javascript" src="/dist/bundle.js">
       </script>
       </body>
</html>`;
};

// The div with id root will contain our React component
