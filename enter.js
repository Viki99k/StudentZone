document.addEventListener("DOMContentLoaded", function () {
    const getActivityButton = document.getElementById("getActivityButton");
    const activityResult = document.getElementById("activityResult");

    getActivityButton.addEventListener("click", function () {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => {
                if (data && data.slip && data.slip.advice) {
                    const adviceText = data.slip.advice;
                    activityResult.textContent = "Advice: " + adviceText;
                    activityResult.classList.remove("error");
                    activityResult.classList.add("success");
                } else {
                    console.error("Error: Unable to fetch advice data");
                    activityResult.textContent = "Unable to fetch advice. Please try again.";
                    activityResult.classList.remove("success");
                    activityResult.classList.add("error");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                activityResult.textContent = "Unable to fetch advice. Please try again.";
                activityResult.classList.remove("success");
                activityResult.classList.add("error");
            });
    });
});


