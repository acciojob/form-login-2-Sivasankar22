function submitForm() {
      // Get form values
      let firstName = document.getElementById('firstName').value;
      let lastName = document.getElementById('lastName').value;
      let phoneNumber = document.getElementById('phoneNumber').value;
      let emailId = document.getElementById('emailId').value;

      // Display the result using alert() with spaces
      alert(
       
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Phone Number: " + phoneNumber + "\n" +
        "Email ID: " + emailId
      );
    }