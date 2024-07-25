const generateRandomNumber = (num) => {
  const randomNum = Math.floor(Math.random() * num);
  return randomNum;
};

const motivationalMessages = {
  greetings: ["Hey there", "Hello", "Hi", "Greetings"],
  actions: ["remember", "never forget", "always believe", "keep in mind"],
  motivations: [
    "you are capable of amazing things",
    "today is a new opportunity",
    "your potential is limitless",
    "great things take time",
  ],
};

let personalMotivationMessage = "";

const generateMessage = () => {
  for (let key in motivationalMessages) {
    let index = generateRandomNumber(motivationalMessages[key].length);
    switch (key) {
      case "greetings":
        personalMotivationMessage += motivationalMessages[key][index] + " ";
        break;
      case "actions":
        personalMotivationMessage += motivationalMessages[key][index] + " ";
        break;
      case "motivations":
        personalMotivationMessage += motivationalMessages[key][index] + " ";
        break;
    }
  }
  return personalMotivationMessage;
};

console.log(generateMessage());
