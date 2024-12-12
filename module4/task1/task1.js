document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const query = document.getElementById('query').value;
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;


    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let output = '';

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