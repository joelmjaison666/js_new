/*3. 📆 Days Left Till New Year

    Ask for today's date (or use new Date()).

    Calculate how many days are left until Jan 1st next year.

    🔍 Use: date objects, math, variables*/

    const todays_date = new Date();
    const year = todays_date.getFullYear() + 1; // just the number
    const new_year_date = new Date(year, 0, 1); // Jan 1st of next year
    const milli = new_year_date - todays_date; // future - today = positive
    const days_left = Math.floor(milli / (1000 * 60 * 60 * 24));
    alert("Days left until New Year: " + days_left);
    