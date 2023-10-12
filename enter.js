document.addEventListener("DOMContentLoaded", function () {
    const getActivityButton = document.getElementById("getActivityButton");
    const activityResult = document.getElementById("activityResult");

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


