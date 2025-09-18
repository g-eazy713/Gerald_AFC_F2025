const form = document.getElementById('nowHiringForm');
const firstNameInput = document.getElementById('Fname');
const lastNameInput = document.getElementById('Lname');
const ageInput = document.getElementById('Age');
const ageError = document.getElementById('AgeError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');
const moreInfoInput = document.getElementById('moreInfo');
const moreInfoError = document.getElementById('moreInfoError');
const charCounter = document.getElementById('charCounter');

moreInfoInput.addEventListener('input', () => {
    charCounter.textContent = `${30 - moreInfoInput.value.length} characters remaining`;

});
moreInfoInput.addEventListener("keydown", function (e) {
    const lines = this.value.split("\n");
    if (e.key === "Enter" && lines.length >= 4) {
        e.preventDefault(); // Stop adding new lines
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Age validation
    const age = Number(ageInput.value);
    if (isNaN(age) || age < 21 || age > 99) {
        ageError.textContent = 'Age must be a number between 21 and 99.';
        isValid = false;
    } else {
        ageError.textContent = '';
    }

    // Phone validation
    const digits = phoneInput.value.replace(/\D/g, '');
    if (digits.length !== 10) {
        phoneError.textContent = 'Phone number must be 10 digits in format xxx-yyy-zzzz.';
        isValid = false;
    } else {
        phoneError.textContent = '';
    }


    // More Info
    if (moreInfoInput.value.length > 30) {
        moreInfoError.textContent = 'Maximum 30 characters allowed.';
        isValid = false;
    } else {
        moreInfoError.textContent = '';
    }

    if (isValid) {
        const formData = {
            firstName: firstNameInput.valueOf(),
            lastName: lastNameInput.valueOf(),
            age: age,
            phone: phoneInput.value.trim(),
            moreInfo: moreInfoInput.valueOf(),
            isMarried: form.querySelector('input[name="isMarried"]:checked'),
            colors: Array.from(form.querySelectorAll('input[name="color"]:checked')).map(cb => cb.value)
        };
        console.log('Form Submission:', formData);
        alert('Form submitted! Check console for data.');
        form.reset();
        charCounter.textContent = '30 characters remaining';
    }

});


