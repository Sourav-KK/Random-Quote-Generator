function generate() {
  document.getElementById("lem").innerText = quote();
}
function quote() {
  let quotes = [
    "The sentence 'Don't objectify women' has women as the object of the sentence",
    "A man got fired from his job because he told his coworker Susan that she swallowed too many kids. thats why everthing out her mouth sound childish.",
    "What is the most popular place on earth?? Graveyard. people are dying to get there",
    "life is like a sandwich. no matter which side you flip it, the bread comes first",
    "What do you call a factory that makes okay products? 'A satisfactory'.",
    "Dear Math, grow up and solve your own problems.",
    "Have you heard about the chocolate record player? It sounds pretty sweet.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "what is the best part of stage 4 cancer?. there is no stage 5 ",
    " why do most orpahns end up being a criminal. because they just want to be wanted",
    " i was hooking up with my German girlfriend. but it was really distracting me when she kept saying her age",
    " what do you call a disabled chinese baby. Sumtin Wong",
    " jesus was not that great. While Jesus made 5000 people bread, Hitler made 6000 people toast",
    " Do you know why ISIS jokes hits sos hard. It's all about the execution",
    " ",
  ];

  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}
