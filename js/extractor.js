// Function to load the theme data from a JSON file
async function loadTheme() {
    // Fetch the theme data from the 'data/design.json' file
    const response = await fetch('data/design.json');
    // Parse the JSON response
    const themeData = await response.json();
    // Return the theme data
    return themeData;
}

// Function to apply the theme to the document
function applyTheme(theme) {
    // Get the <style> tag with the ID 'dynamic-styles'
    let styleTag = document.getElementById('dynamic-styles');
    // Create the <style> tag if it doesn't exist
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-styles';
        document.head.appendChild(styleTag);
    }
    // Initialize a string to hold CSS variables
    let cssVars = ':root {';

    // Loop through each key-value pair in the theme object
    for (const [key, value] of Object.entries(theme)) {
        // Add each theme property as a CSS variable
        cssVars += `--${key}: ${value};`;
    }

    // Add a default font variable, falling back to 'arial black' if not provided
    cssVars += `--body: ${theme.standard || 'lemon'};`;
    cssVars += '}';

    // Set the generated CSS variables in the <style> tag
    styleTag.innerHTML = cssVars;
}

// Function to set the theme based on the theme name
async function setTheme(themeName) {
    // Load the theme data
    const themeData = await loadTheme();
    // Get the specific theme by its name
    const theme = themeData[themeName];
    // Apply the selected theme
    applyTheme(theme);
}

function Time() {
    const date = new Date();
    const hour = date.getHours();
    let currentTheme = 'lightTheme';

    if (hour >= 2 && hour < 18) {
        currentTheme = 'lightTheme';
    } else {
        currentTheme = 'darkTheme';
    }

    // Apply the theme based on the time
    setTheme(currentTheme);
}

// Load the theme based on the time of day when the page is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    Time();
});
