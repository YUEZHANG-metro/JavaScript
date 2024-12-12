   'use strict';

    document.getElementById('search-form')
      .addEventListener('submit', async (event) => {
        event.preventDefault();

        const query = document.getElementById('query').value.trim();

        if (!query) {
          console.log('Please enter a TV series name.');
          return;
        }

        const resultsContainer = document.getElementById('results');

        try {
          const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
          if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
          }

          const data = await response.json();

          console.log(data);

          if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No results found for your query.</p>';
            return;
          }

          resultsContainer.innerHTML = '';
          data.forEach(item => {
            const show = item.show;
            const showDiv = document.createElement('div');
            showDiv.className = 'show';

            showDiv.innerHTML = `
              <h2>${show.name}</h2>
              <p><strong>Genres:</strong> ${show.genres.join(', ') || 'N/A'}</p>
              <p><strong>Language:</strong> ${show.language || 'N/A'}</p>
              <p><strong>Premiered:</strong> ${show.premiered || 'N/A'}</p>
              <p><strong>Summary:</strong> ${show.summary || 'N/A'}</p>
              ${show.image ? `<img src="${show.image.medium}" alt="${show.name}">` : ''}
            `;

            resultsContainer.appendChild(showDiv);
          });
        } catch (error) {
          console.error('Error fetching data:', error);
          resultsContainer.innerHTML = '<p>There was an error fetching the data. Please try again later.</p>';
        }
      });