
// 1.
//This line grabs the button with the ID "fetchTrivia" and listens for a click event.
//When the user clicks that button, the function inside will run.

document.getElementById("fetchTrivia").addEventListener("click", function() {

// 2.
//This calls the Open Trivia API. The "fetch" function reaches out to this web address and asks for one multiple-choice trivia question (amount=1&type=multiple).

  fetch("https://opentdb.com/api.php?amount=1&type=multiple")

// 3.  
//  Once the data comes back, this tells the browser:
//“Hey, turn that response into JSON (a readable JavaScript object) so we can use it.”

    .then(response => response.json())

//4.
//Now we are inside the second .then().
//The data is the whole response object.
//We grab the first trivia question with data.results[0].question and store it in a variable named question.

    .then(data => {
      const question = data.results[0].question;

// 5.
//This line finds the HTML element with the ID "triviaBox" and fills it with our trivia question.
//We use decodeURIComponent() in case the text contains special codes (like &amp; instead of &)—this makes it more human-readable.

      document.getElementById("triviaBox").innerHTML = decodeURIComponent(question);

// 6.
//If something breaks(maybe no internet or the API isn’t responding) this catch() block will log a friendly error message.

    })
    .catch(error => console.error("Oops! Something went wrong:", error));
});



//JSON (JavaScript Object Notation) is a lightweight data format that’s easy for both humans and computers to read and write. It’s widely used in web development to send and receive data between a website and an API.

//🌐 Why JSON?
//Think of JSON like a structured way to package information—kind of like a digital lunchbox! Instead of sending a raw pile of data, JSON organizes it neatly so different programs can understand it.

//🏗️ JSON Structure
//JSON is made up of key-value pairs, enclosed in {} for objects or [] for arrays. Here’s a simple example:

//ie
// {
//   "name": "Liz"
//   "skills": ["HTML", "CSS", "JavaScript"],
//   "projects": {
//     "game": "Rock-Paper-Scissors",
//     "progress": "Building animations"
//   }
// }

//🔄 How It’s Used
//- APIs: When fetching data (like MeowFacts), the API responds in JSON format.
//- Web Apps: JavaScript can grab JSON data and display it dynamically.
//- Databases & Config Files: Many applications store information as JSON because it’s compact and easy to manipulate.

//🤝 JSON vs Other Formats
//Compared to XML or plain text, JSON is simpler and faster for computers to process, making it the go-to format for modern web apps.
