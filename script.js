// Initialize the Scores:
let userScore = 0;
let compScore = 0;

// Function to select an image and save the selection
function setActiveImage(userImage) {
    // Generate a random image:
    const images = ['Images/Stone.png', 'Images/Scissors.png', 'Images/Paper.png'];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    // Store values of Images in "sessionStorage":
    sessionStorage.setItem('userImage', userImage);     
    sessionStorage.setItem('randomImage', randomImage);
    
    // Function to redirecting to the New pages and update the Scores:
    const winner = (userWin) => {
        // Redirecting to Win Page:
        if(userWin) {
            userScore++;
            window.sessionStorage.setItem('userScore', userScore);
            window.location.href = "win.html";
        }
        // Redirecting to Lost Page:
        else {
            compScore++;
            window.sessionStorage.setItem('compScore', compScore);
            window.location.href = "lost.html";
        }
    }

    // Checking and redirecting to Tie Page :
    if(userImage === randomImage) {
        window.location.href = "tie.html";
    }
    // Checking else winning conditions:
    else {
        let userWin = true;
        if(userImage === 'Images/Stone.png') {
            userWin = randomImage === 'Images/Paper.png'? false : true;
        }
        else if(userImage === 'Images/Paper.png') {
            userWin = randomImage === 'Images/Scissors.png'? false : true;
        }
        else {
            userWin = randomImage === 'Images/Stone.png'? false : true;
        }
        winner(userWin);
    }
}

// Function to geting the Score:
function loadScores() {
    // User choose Score:
    userScore = parseInt(window.sessionStorage.getItem('userScore', userScore)) || 0;
    document.getElementById("userScore").textContent = userScore;
    
    // Computer Random choose Score:
    compScore = parseInt(window.sessionStorage.getItem('compScore', compScore)) || 0;
    document.getElementById("compScore").textContent = compScore;
}

// Function to getting the image:
function loadImages() {
    // User Score:
    const userImage = window.sessionStorage.getItem('userImage');
    document.getElementById("userImage").src = userImage;

    // Computer Score:
    const randomImage = window.sessionStorage.getItem('randomImage');
    document.getElementById("randomImage").src = randomImage;
}

// Reset the LoadScore Function :
window.onload = function() {
    loadScores();
    if (document.getElementById('userImage')) {
        loadImages();
    }
};

// Showing the Rules Box:
document.querySelector(".showRulesBtn").addEventListener("click", () => {
    document.querySelector(".rulesBox").classList.add("active");
});

// Hiding the Rules Box:
document.querySelector(".cancleBtn").addEventListener("click", () => {
    document.querySelector(".rulesBox").classList.remove("active");
});

// Redirect the page to the Play Page:
document.querySelector(".replay").addEventListener("click", () => {
    window.location.href = "play.html";
});

// Redirect the page to the Hurray Page:
document.querySelector(".nextBtn").addEventListener("click", () => {
    window.location.href = "hurray.html";
});