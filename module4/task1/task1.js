document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const query = document.getElementById('query').value;  // Get the search query
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;  // TVMaze API URL

    // Fetch data from TVMaze API
    fetch(apiUrl)
      .then(response => response.json())  // Parse the response as JSON
      .then(data => {
        let output = '';  // Initialize output string

        // Loop through the results and format them
        data.forEach(show => {
          output += `Title: ${show.show.name}\n`;
          output += `Genres: ${show.show.genres.join(', ')}\n`;
          output += `Rating: ${show.show.rating.average}\n`;
          output += `Summary: ${show.show.summary}\n\n`;
        });

        // Output the results into the <pre> tag
        document.getElementById('output').textContent = output;
      });
  });
});