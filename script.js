let clickCount = 0; // Initializes click count

function changePosition() {
  let noBtn = document.getElementById("noBtn");
  let question = document.getElementById("question");
  let img = document.getElementById("valentineImage");

  // Increment the click count
  clickCount++;

  // Temporarily add shake and red background classes
  noBtn.classList.add("shake", "red-bg");

  // Fade out the current text and image
  question.classList.add("hidden");
  img.classList.add("hidden");

  setTimeout(() => {
    // Update the text and the GIF based on the number of times 'No' has been clicked
    switch (clickCount) {
      case 1:
        question.textContent = "Try again😒";
        img.src = "assets/dudu-mad.gif";
        break;
      case 2:
        question.textContent = "Ermm, wrong answer😤";
        img.src = "assets/dudu-angry.gif";
        break;
      case 3:
        question.textContent = "Last try😡";
        img.src = "assets/dudu-lastangry.gif";
        break;
      case 4:
        question.textContent = "Try now ☺️";
        img.src = "assets/dudu-laugh.gif";
        noBtn.innerText = "Yes"; // This updates the text but maintains the original style
        noBtn.onclick = function () {
          showAppreciation(); // Trigger appreciation function
        };
        break;
      default:
        clickCount = 0; // Reset click count and start again
    }

    // Fade in the updated text and image
    question.classList.remove("hidden");
    img.classList.remove("hidden");
  }, 500); // Matches the transition time to allow the previous content to fade out first

  document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
        button.addEventListener("touchend", function() {
            // Force remove hover styles
            button.style.backgroundColor = "#f7a8cf"; // Reset to original pink color
        });
    });
});
  // Timeout to remove the temporary styles and revert to original after 2 seconds
  setTimeout(() => {
    noBtn.classList.remove("shake", "red-bg");
    noBtn.classList.add("pink-bg"); // Ensure it returns to original pink color
  }, 2000);
}

function showAppreciation() {
  let question = document.getElementById("question");
  let img = document.getElementById("valentineImage");
  let yesBtn = document.getElementById("yesBtn");
  let noBtn = document.getElementById("noBtn");

  question.classList.add("hidden");
  img.classList.add("hidden");

  setTimeout(() => {
    // Update the text and image to show appreciation
    question.textContent = "Love you baby 🥰";
    img.src = "assets/bubu-dudu.gif";

    // Hide the buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Fade in the updated text and image
    question.classList.remove("hidden");
    img.classList.remove("hidden");

    // Trigger confetti animation
    triggerConfetti();
  }, 500);
}


function triggerConfetti() {
  const confettiWrapper = document.getElementById("confetti-wrapper");
  confettiWrapper.style.display = "block"; // Make the confetti wrapper visible

  // Create 100 confetti pieces
  for (let i = 0; i < 100; i++) {
    let confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Between 2 and 5 seconds for variety
    confettiWrapper.appendChild(confetti);
  }

  // Optional: Clear confetti after animation to avoid DOM buildup
  setTimeout(() => {
    confettiWrapper.innerHTML = ""; // Clears the confetti from the DOM
    confettiWrapper.style.display = "none"; // Hide the wrapper again
  }, 9000); // Waiting for the fade-out to finish
}

function toggleSound() {
  var audio = document.getElementById("backgroundMusic");
  var button = document.getElementById("soundBtn");

  // Check if music is playing and toggle
  if (audio.paused) {
    audio.play();
    button.textContent = "Disable Sound"; // Change button text
  } else {
    audio.pause();
    button.textContent = "Enable Sound"; // Reset button text
  }
}
