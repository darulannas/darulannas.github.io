const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");
const language = prompt("Your language?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Welcome to Portfolio Website of Darul Annas Septihan Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Bienvenue sur le site Web de Darul Annas Septihan Portfolio Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Darul Annas Septihan pōtoforio u~ebu saito e yōkoso Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Selamat Datang di Website Portfolio Darul Annas Septihan Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}