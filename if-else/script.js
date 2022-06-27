var age = prompt( "Insert your age")
  if (age >= 18 ) {
    alert( "Open")
  }else {
    alert ( "Minor Detected")
    }

var human = prompt("Are you an human? (YES/NO)")
  if ( age >= 1 && human == "YES"){
    alert ( "Human detected, free acess to you")
  }else {
    alert ( "Robot detected, you cant get in here")
   }
  
var birthdayMonth = prompt( "Insert your birthday month. (NUMBERS ONLY)")
  if (birthdayMonth == 12 || birthdayMonth == 1) {
    alert( "You was born under Capricorn regency. You are allowed to get in.")
  }else {
    alert ( "You can't access this website because of your zodiac sign")
  }