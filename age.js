    // Function to calculate age based on birth date
    function calculateAge(birthDate) {
        const currentDate = new Date();
        const birthYear = birthDate.getFullYear();
        const birthMonth = birthDate.getMonth();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth();
        
        let ageYears = currentYear - birthYear;
        let ageMonths = currentMonth - birthMonth;
  
        if (ageMonths < 0) {
          ageYears--;
          ageMonths += 12;
        }
  
        return {
          years: ageYears,
          months: ageMonths
        };
      }
  
      // Update the age on the webpage
      function updateAge() {
        const birthDate = new Date('2004-20-03'); // Replace this with your birth date
        const age = calculateAge(birthDate);
        document.getElementById('age').textContent = age.years + " years and " + age.months + " months";
      }
  
      // Call the updateAge function when the page loads
      updateAge();