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

          resultsContainer.innerHTML = '';

          if (data.length === 0) {
            resultsContainer.innerHTML = '<p>No results found for your query.</p>';
            return;
          }

          data.forEach(item => {
            const show = item.show;

            const article = document.createElement('article');
            const title = document.createElement('h2');
            title.textContent = show.name;
            article.appendChild(title);

            const link = document.createElement('a');
            link.href = show.url;
            link.target = '_blank';  // Open link in a new tab
            link.textContent = 'More details';
            article.appendChild(link);

            // Using ternary operator to handle missing image
            const image = document.createElement('img');
            image.src = show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            image.alt = show.name;
            article.appendChild(image);

            if (show.summary) {
              const summary = document.createElement('div');
              summary.innerHTML = show.summary;
              article.appendChild(summary);
            }

            resultsContainer.appendChild(article);
          });
        } catch (error) {
          console.error('Error fetching data:', error);
          resultsContainer.innerHTML = '<p>There was an error fetching the data. Please try again later.</p>';
        }
      });