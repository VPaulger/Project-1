# Project-1

content in index.html and style.css are in relative cronological order
eg. from top to bottom, html and styling are both identical in terms navigation

throughout this project learned how to implement flexbox styling and css grid
to layout of website.

with the help of peers and google was able to implement smooth scrolling functionality,
updating cart & email validation.

the site has been optomized responsively for mobile, tablet and desktop screens.

troubleshooting & difficulties:
- initial difficulty was implementing css grid for shopping category section.
had trouble applying space between category tiles. at first tried to use grid columns and rows
then apply margins for spacing. determined that I could use grid area and a grid gap to solve.

- the following difficulty had to do with applying a tint to background images.
at first tried to apply a linear gradient to background but was not able to apply tint
to multiple overlapping backgrounds in the banner section. overcame this by creating
a div with a black background and 25% opacity. then applied div to entire background to solve.

- had trouble accounting for the 100px header for smooth scrolling. after some research determined
that I could subtract 100px from the offset position of the funtion  ex. $(hash).offset().top - 100;

- was challenging to create a responsive mobile header/navigation section. tried to use flexbox
but then used css grid to solve. after some margin styling was able to create fluid mobile navigation.

- was unable to create responsivity for the female model in banner section.
played with different percentages and position properties but failed to obtain
desired result.

- after running out of time to debug last error was unable to create a responsive
subscribe for updates section. through trial and error this can be solved but unfortunately 
have reached a deadline for submission and have to ignore this last issue.

- learning git and uploading files to repository was quite daunting at first as I only
learned this skill the day before submission. with some practice git is becoming more
familiar and approachable.

**Project 1 was challenging yet rewarding. As I continue to learn I look forward to building
upon this project and expanding the scope of my potential as a web dev.