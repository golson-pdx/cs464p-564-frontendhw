// Add your code here
const form = document.querySelector('form');

const handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    const name = form.elements.fullName.value;
    const email = form.elements.email.value;
    const registrationStatus = form.elements.registrationStatus.value;

    const courseElements = form.elements.courses;
    const courses = [];
    const comments = form.elements.comments.value;

    console.log(courseElements);

    for (let i = 0; i < courseElements.length; i++) {
        if (courseElements[i].checked) {
            courses.push(courseElements[i].value);
        }
    }

    let coursesString = "";
    if (courses.length > 0) {
        for (let i = 0; i < courses.length; i++) {
            coursesString += `${courses[i]}`;
            if (i+1 < courses.length) {
                coursesString += `, `
            }
        }
    }

    console.log(`Full name: ${name}\nEmail: ${email}\nRegistration Status: ${registrationStatus}\nClasses Taken: ${coursesString}\nComments: ${comments}`);
}

form.addEventListener("submit", handleSubmit);