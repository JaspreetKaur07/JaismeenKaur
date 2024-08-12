function viewDetails(certId) {
    document.getElementById(`${certId}-modal`).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    const analyticsModal = document.getElementById('analytics-modal');
    const marketingModal = document.getElementById('marketing-modal');

    if (event.target == analyticsModal) {
        analyticsModal.style.display = "none";
    } else if (event.target == marketingModal) {
        marketingModal.style.display = "none";
    }
    function toggleAnswer(answerId) {
        var answerElement = document.getElementById(answerId);
        if (answerElement.style.display === "none" || answerElement.style.display === "") {
            answerElement.style.display = "block";
        } else {
            answerElement.style.display = "none";
        }
    }
    
}


