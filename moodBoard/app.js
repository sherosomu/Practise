const quotes = [
  "Keep going!",
  "You're doing great!",
  "IITG makes diamonds 💎",
  "Don't quit yet.",
  "One bug at a time.",
  "Trust the grind!"
];

$(".tile").on("click", function () {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  $(this).hide().html(`<div>${randomQuote}</div>`).fadeIn();
});