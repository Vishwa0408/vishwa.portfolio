// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Let\'s talk! Reach out to me on LinkedIn or GitHub.');
});

// Function to Toggle Education Details
function toggleDetails(id) {
    var details = document.getElementById(id);
    var button = document.querySelector(`button[onclick="toggleDetails('${id}')"]`);
	if(!details){
	console.error("Element with ID'"+id+"' not found.");
	return;
}

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.innerText = "Hide Details"; // Change button text
    } else {
        details.style.display = "none";
        button.iInnerText = "View Details"; // Change button text
    }
}

function toggleProject(id) {
    var details = document.getElementById(id);
    var button = document.querySelector(`button[onclick="toggleProject('${id}')"]`);

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show details
        button.innerText = "Hide Details"; // Change button text
    } else {
        details.style.display = "none"; // Hide details
        button.innerText = "View Details"; // Change button text
    }
}

function toggleCertificate(id) {
    var details = document.getElementById(id);
    var button = document.querySelector(`button[onclick="toggleCertificate('${id}')"]`);

    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block"; // Show details
        button.innerText = "Hide Certificate"; // Change button text
    } else {
        details.style.display = "none"; // Hide details
        button.innerText = "View Certificate"; // Change button text
    }
}
// Smooth Scroll for All Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});



