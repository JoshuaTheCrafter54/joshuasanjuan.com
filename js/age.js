//This is birthday or age calculator
//just insert the "age" words in like [id = "age"]

function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust if the birthday hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Define the birthdate (format: YYYY-MM-DD)
const birthdate = '2003-02-05'; // Change this to any birthdate you want

// Get age
const age = calculateAge(birthdate);

// Display age in the HTML
document.getElementById('age').textContent = `${age}`;