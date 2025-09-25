const moods = {
  happy: {
    title: "Today you are feeling Happy 😁",
    definition: "Definition: feeling or showing pleasure or contentment.",
    advice: "Enjoy the moment and share your happiness with others!"
  },
  sad: {
    title: "Today you are feeling Sad 😞",
    definition: "Definition: feeling or showing sorrow; unhappy.",
    advice: "It's okay to feel sad. Talk to a friend or do something you enjoy."
  },
  excited: {
    title: "Today you are feeling Excited 🤩",
    definition: "Definition: very enthusiastic and eager.",
    advice: "Channel your excitement into something creative or fun!"
  },
  angry: {
    title:"Today you are feeling Angry 😡",
    definition: "Definition: feeling or showing strong annoyance, displeasure, or hostility.",
    advice: "Take a few deep breaths, count to 10, or go for a walk."
  },
  sick: {
    title: "Today you are feeling Sick 🤢",
    definition: "Definition: affected by illness or unwell.",
    advice: "Rest, drink fluids, and take care of yourself."
  },
  bored: {
    title: "Today you are feeling Bored 😐",
    definition: "Definition: feeling weary because one is unoccupied or lacks interest in one's current activity.",
    advice: "Try a new activity, read a book, or go for a walk to refresh your mind."
  }
};

// Grab the display section
const display = document.getElementById("mood-display");

// Grab all mood buttons
const buttons = document.querySelectorAll(".mood_options button");

// Add click listeners
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const moodKey = button.dataset.mood;
    const mood = moods[moodKey];

    // Replace content in the display area
    display.innerHTML = `
      <h2>${mood.title}</h2>
      <p class="definition">${mood.definition}</p>
      <p class="advice">${mood.advice}</p>
    `;
  });
});