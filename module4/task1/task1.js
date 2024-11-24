'use strict'; //??

// Get the form and output elements
const form = document.getElementById('search-form');
const output = document.getElementById('output');

// Add event listener to the form
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form from reloading the page

  const query = document.getElementById('query').value.trim(); // Get the search term
  if (!query) {
    output.textContent = 'Please enter a TV series name.';
    return;
  }

  const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(apiUrl); // Make the API request
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json(); // Parse JSON response
    displayResults(data); // Display results
  } catch (error) {
    output.textContent = `An error occurred: ${error.message}`;
    console.error(error);
  }
});

// Function to display results
function displayResults(shows) {
  if (shows.length === 0) {
    output.textContent = 'No results found.';
    return;
  }

  console.clear(); // Clear console before new results
  console.log('TV Series Results:');

  shows.forEach((result, index) => {
    const show = result.show;
    console.log(`${index + 1}. Title: ${show.name}`);
    if (show.genres.length > 0) console.log(`   Genres: ${show.genres.join(', ')}`);
    if (show.language) console.log(`   Language: ${show.language}`);
    if (show.rating.average) console.log(`   Rating: ${show.rating.average}`);
    if (show.summary) console.log(`   Summary: ${stripHTML(show.summary)}`);
    console.log('---');
  });

  output.textContent = 'Results have been logged in the console.';
}

// Helper function to strip HTML tags from a string
function stripHTML(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
}