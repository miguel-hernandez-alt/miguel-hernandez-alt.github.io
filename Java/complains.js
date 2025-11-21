document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("submitComplaint");

    button.addEventListener("click", () => {
        const name = document.getElementById("username").value.trim();
        const email = document.getElementById("useremail").value.trim();
        const issue = document.getElementById("complaint").value.trim();

        if (!name || !email || !issue) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        const outputSection = document.getElementById("complaintOutput");

        outputSection.innerHTML = `
            <div class="complaint-box">
                <h2>Complaint Submitted</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Issue:</strong><br>${issue.replace(/\n/g, "<br>")}</p>
            </div>
        `;

        document.getElementById("complaintForm").reset();
    });
});
