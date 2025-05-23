"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.form = void 0;
exports.form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resume-display');
exports.form.addEventListener('submit', function (event) {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(Name, "</p>\n<p><b>email:</b>").concat(email, "</p>\n<p><b>phone:</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
