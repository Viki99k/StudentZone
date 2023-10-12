document.addEventListener("DOMContentLoaded", function () {
    const getActivityButton = document.getElementById("getActivityButton");
    const activityResult = document.getElementById("activityResult");

    getActivityButton.addEventListener("click", function () {
        fetch("https://api.adviceslip.com/advice/")
            .then(response => response.json())
            .then(data => {
                const adviceText = data.advice;
                activityResult.textContent = "Advise: " + adviceText;
                activityResult.classList.remove("error");
                activityResult.classList.add("success");
            })
            .catch(error => {
                console.error("Error:", error);
                activityResult.textContent = "Unable to fetch activity. Please try again.";
                activityResult.classList.remove("success");
                activityResult.classList.add("error");
            });
    });

   
});

