function submitForm() {
    // Collect form data
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

    // Collect experts
    const experts = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        experts.push(checkbox.nextElementSibling.innerText);
    });

    // Update modal content
    document.getElementById('confirmDate').innerText = `${day}/${month}/${year}`;
    document.getElementById('confirmTime').innerText = `${startTime} - ${endTime}`;
    document.getElementById('confirmService').innerText = type;
    document.getElementById('confirmExperts').innerText = experts.join(', ');

    // Show modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}