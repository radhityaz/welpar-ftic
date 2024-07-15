
const correctPassword = "ftic2024";

function checkCredentials() {
    const inputPassword = document.getElementById("password").value;
    
    if (inputPassword === correctPassword) {
        document.getElementById("content").style.display = "none";
        document.getElementById("welcome-message").classList.remove("hidden");
        document.getElementById("video-container").classList.remove("hidden");
        document.getElementById("welcome-video").play();
    } else {
        alert("Passcode salah. Silakan coba lagi.");
    }
}
