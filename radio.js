document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
  
    // Event listener for the change event on the radio buttons
    form.addEventListener('change', function (event) {
        // Get the clicked radio button
        const clickedRadioButton = event.target;
        
        // Check if the clicked element is a radio button
        if (clickedRadioButton.type === 'radio') {
            // Log true to the console
            console.log(true);
  
            // Store the selected value in local storage
            localStorage.setItem('selectedRadioButton', clickedRadioButton.value);
  
            // Open and display the corresponding HTML file based on the selected value
            const selectedValue = clickedRadioButton.value;
  
            // Open and display the corresponding HTML file based on the selected value
            if (selectedValue === 'MRR') {
                window.location.href = '2021.html';
            } else if (selectedValue === 'LYL') {
                window.location.href = '2022.html';
            } else if (selectedValue === 'LYY') {
                window.location.href = 'bubble_avg.html';
            }
        }
    });

    // Check local storage for previously selected radio button value
    const selectedRadioButton = localStorage.getItem('selectedRadioButton');
    if (selectedRadioButton) {
        // Find the corresponding radio button and set it as checked
        const radioButton = form.querySelector(`input[value="${selectedRadioButton}"]`);
        if (radioButton) {
            radioButton.checked = true;
        }
    }
});
