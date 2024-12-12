'use strict';

    async function fetchJoke() {
      try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');

        if (!response.ok) {
          throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data.value);

      } catch (error) {
        console.error('Error fetching the joke:', error);
      }
    }

    fetchJoke();