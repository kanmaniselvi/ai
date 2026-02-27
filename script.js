// script.js for Smart Travel Planner with Gemini API integration

// Function to generate travel plans
async function generateTravelPlan(destination, travelDates) {
    const apiKey = 'YOUR_GEMINI_API_KEY'; // Replace with your Gemini API key

    try {
        const response = await fetch(`https://api.gemini.com/v1/travelplan?destination=${destination}&dates=${travelDates}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error generating travel plan:', error);
    }
}

// Example usage
const destination = 'Paris';
const travelDates = '2026-03-01 to 2026-03-07';
generateTravelPlan(destination, travelDates).then(plan => console.log(plan));