
    // Function to check if two values are of the same type, considering NaN
    function isSameType(value1, value2) {
      if (isNaN(value1) && isNaN(value2)) {
        return true; // Both values are NaN
      }
      return typeof value1 === typeof value2;
    }

    // Prompt user for input
    let firstName = prompt("Enter First Name:");
    let lastName = prompt("Enter Last Name:");
    let phoneNumber = prompt("Enter Phone Number:");
    let emailId = prompt("Enter Email ID:");

    // Display the result using alert() with spaces
    alert(
      
      "First Name: " + firstName + "\n" +
      "Last Name: " + lastName + "\n" +
      "Phone Number: " + phoneNumber + "\n" +
      "Email ID: " + emailId
    );
