Work Day Scheduler

This application enabled users to create a schedule from 9:00 am to 5:00 pm and input to-do items for each hour. When the save button is clicked, the input items remain after the page is refreshed. The colors of the inout fields change to grey on the current hour, red for hours in the past, and green for hours in the future.

For the Work Day Schedule homework assignment, I started with the html file and created a div in the header to hold the current day text. I then created time blocks  for each hour with with bootstrap rows and columns and a text area, button, and more divs with classes and ids.

For the script.js file, the main technologies used were jQuery and moment.js. I used moment.js to set the current day and hour. I created click event handlers for the save buttons and used setItem.localStorage to save the value of the text area's description when the page was refreshed. I then looped through each time block element and used condiitonal statements to change the colors/classes depending on the time of day.

Finally, I used getItem.localStorage rto etreieve the user iput form local storage so that they remain on the screen after the page is refreshed.

Link to completed work: https://katiesutehall.github.io/work-day-scheduler/
Screenshot of deployed work:
<img width="840" alt="work-day-scheduler-screenshot" src="https://user-images.githubusercontent.com/66810951/89358593-66190200-d689-11ea-98db-d8e6e9c831a3.png">
