function submit() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const message = document.getElementById('message').value;

    //Get AM/PM time
    const startAMPM = formatAMPM(startTime);
    const endAMPM = formatAMPM(endTime);

    const experts = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        experts.push(checkbox.nextElementSibling.innerText);
    });

    //Put the inputted values into the modal
    document.getElementById('confirmDate').innerText = `${day}/${month}/${year}`;
    document.getElementById('confirmTime').innerText = `${startAMPM} - ${endAMPM}`;
    document.getElementById('confirmService').innerText = type;
    document.getElementById('confirmExperts').innerText = experts.join(', ');

    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}

// formats the time
function formatAMPM(time) {
    const [hour, minute] = time.split(':');
    let hours = parseInt(hour);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours + ':' + minute + ' ' + ampm;
    return strTime;
}

// extra function to print values as a txt file
function save() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const message = document.getElementById('message').value;

    const startAMPM = formatAMPM(startTime);
    const endAMPM = formatAMPM(endTime);

    const experts = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        experts.push(checkbox.nextElementSibling.innerText);
    });

    const details = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nType: ${type}\nStart Time: ${startAMPM}\nEnd Time: ${endAMPM}\nDate: ${day}/${month}/${year}\nMessage: ${message}\nExperts: ${experts.join(', ')}`;

    const blob = new Blob([details], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'booking_details.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target = '_blank';
    anchor.style.display = 'none'; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
