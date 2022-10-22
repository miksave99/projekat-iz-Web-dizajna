const form = document.getElementById('form');

form.addEventListener('focusin', (event) => {
    event.path[1].classList.add('active');
    event.target.style.background = '#3a8bcd40';
    event.target.style.shadow = 'none';
  });

form.addEventListener('focusout', (event) => {
    event.path[1].classList.remove('active');
  event.target.style.background = '';
});


function validateForm(event) {
    event.preventDefault();
   
    var status=true;

    let name = document.forms["form"]["name"].value;
    if(name == "" || name == null || !name.match(new RegExp(/^[A-Z]{1}[a-z]{2,}/))) {
        document.getElementById('error-name').style.display='block';
        status = false;
    } else {
        document.getElementById('error-name').style.display='none';
    }


    let lastname = document.forms["form"]["lastname"].value;
    if(lastname == "" || lastname == null || !lastname.match(new RegExp(/^[A-Z]{1}[a-z]{2,}/))) {
        document.getElementById('error-last-name').style.display='block';
        status = false;
    } else {
        document.getElementById('error-last-name').style.display='none';
    }

    let email = document.forms["form"]["email"].value;
    if(email == "" || email == null || !email.match(new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        document.getElementById('error-email').style.display='block';
        status = false;
    } else {
        document.getElementById('error-email').style.display='none';
    }

    let message = document.forms["form"]["message"].value;
    if(message == "" || message == null || !message.match(new RegExp(/^[A-Za-z]{1,}/))) {
        document.getElementById('error-message').style.display='block';
        status = false;
    } else {
        document.getElementById('error-message').style.display='none';
    }

    if(status) {
        document.getElementById('success').style.display='block';
        document.getElementById("form").reset();
    }
    return true;
}
