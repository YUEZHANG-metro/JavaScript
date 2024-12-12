 'use strict';

    async function fetchJokes(query) {
      try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();

        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';

        if (data.result.length === 0) {
          resultsContainer.innerHTML = '<p>No jokes found for your query.</p>';
          return;
        }

        data.result.forEach(joke => {
          const article = document.createElement('article');
          const p = document.createElement('p');
          p.textContent = joke.value; // Add joke text
          article.appendChild(p);
          resultsContainer.appendChild(article);
        });

      } catch (error) {
        console.error('Error fetching the jokes:', error);
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '<p>Error fetching jokes. Please try again later.</p>';
      }
    }

    document.getElementById('search-form')
      .addEventListener('submit', function(event) {
        event.preventDefault();

        const query = document.getElementById('query').value.trim();

        if (!query) {
          console.log('Please enter a search term.');
          return;
        }

        fetchJokes(query);
      });