document.addEventListener("DOMContentLoaded", function () {
    const getActivityButton = document.getElementById("getActivityButton");
    const activityResult = document.getElementById("activityResult");

      const getJokeButton = document.getElementById("getJokeButton");
    const jokeText = document.getElementById("jokeText");

    getJokeButton.addEventListener("click", function () {
        fetch("https://v2.jokeapi.dev/joke/Any")
            .then(response => response.json())
            .then(data => {
                if (data.setup && data.delivery) {
                   activityResult.textContent = `${data.setup}\n${data.delivery}`;
                } else if (data.joke) {
                    activityResult.textContent = data.joke;
                } else {
                    console.error("Error: Unable to fetch joke data");
                   activityResult.textContent = "Unable to fetch a joke. Please try again.";
                }
            })
            .catch(error => {
                console.error("Error:", error);
                activityResult.textContent = "Unable to fetch a joke. Please try again.";
            });
    });
});
This code adds a "Get Joke" button and a result paragraph for displaying jokes fetched from the Unofficial JokeAPI. When you click the "Get Joke" button, it fetches a random joke from the API and displays it in the result paragraph. Don't forget to style the "jokeResult" element to make the joke text visually appealing.






    });
});


