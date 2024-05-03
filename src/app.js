        //toggle lightmode and darkmode
        const darkModeToggle = document.querySelector('#darkModeToggle');
        const lightModeToggle = document.querySelector('#lightModeToggle');
      
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.add('dark');
        });
      
        lightModeToggle.addEventListener('click', () => {
            document.body.classList.remove('dark');
        });
        //cancel button
        document.addEventListener('DOMContentLoaded', function () {
            const cancelButton = document.getElementById('cancelButton');
            const inputFields = document.querySelectorAll('input, textarea');

            cancelButton.addEventListener('click', function () {
                inputFields.forEach(function (field) {
                    field.value = ''; // Clear the value of each input field and textarea
                });
            });
        });