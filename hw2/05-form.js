// Exercise 05 - Form
const form = document.querySelector('form');

const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    // Collect form values
    const name = form.elements.fullName.value;
    const email = form.elements.email.value;
    const registrationStatus = form.elements.registrationStatus.value;

    const courseElements = form.elements.courses;
    const courses = [];
    const comments = form.elements.comments.value;

    // Get all checked course values from form, updated to follow AirBnb Javascript guidelines 
    courseElements.forEach((element) => {
        if (element.checked) {
            courses.push(element.value);
        }
    });

    // Simply need to join courses by comma 
    let coursesString = courses.join(', ');

    console.log(`Full name: ${name}\nEmail: ${email}\nRegistration Status: ${registrationStatus}\nClasses Taken: ${coursesString}\nComments: ${comments}`);
}

form.addEventListener('submit', handleSubmit);