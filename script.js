function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("edu-and-xp").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function showAbout() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about-me").style.display = "block";
    document.getElementById("edu-and-xp").style.display = "none";
    document.getElementById("projects").style.display = "none";
}

function showEduAndXp() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("edu-and-xp").style.display = "block";
    document.getElementById("projects").style.display = "none";
}

function showProjects() {
    document.getElementById("home").style.display = "none";
    document.getElementById("about-me").style.display = "none";
    document.getElementById("edu-and-xp").style.display = "none";
    document.getElementById("projects").style.display = "block";
}

