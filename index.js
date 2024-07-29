function machineLearning() {
  let ml_algorithm = prompt(
    "Which ML algorithm you'd like to learn more about?"
  );
  ml_algorithm = ml_algorithm.toLowerCase().trim();

  if (ml_algorithm === "reinforcement learning") {
    window.location = "https://en.wikipedia.org/wiki/Reinforcement_learning";
  } else if (ml_algorithm === "supervised learning") {
    window.location = "https://en.wikipedia.org/wiki/Supervised_learning";
  } else if (ml_algorithm === "unsupervised learning") {
    window.location = "https://en.wikipedia.org/wiki/Unsupervised_learning";
  } else {
    alert(`Nothing!!!`);
  }
}

let learnML = document.querySelector("button");
learnML.addEventListener("click", machineLearning);
