/*3. 📆 Days Left Till New Year

    Ask for today's date (or use new Date()).

    Calculate how many days are left until Jan 1st next year.

    🔍 Use: date objects, math, variables

4. 👶 Age in Days Calculator

    Ask for your birth year.

    Calculate your age in days.

    Bonus: Add months/weeks too!

    🔍 Use: numbers, date math, variables*/

const today = parseInt(prompt("enter birth year"));
const currentYear = new Date().getFullYear();
const age=currentYear-today;
const birth_year= alert("you are "+age+" years old");
const days=alert("you are "+age*365.25+" days old")