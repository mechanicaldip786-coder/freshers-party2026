// Custom Cursor following mouse
const cursorTag = document.getElementById('cursor-tag');

document.addEventListener('mousemove', (e) => {
    cursorTag.style.left = e.pageX + 'px';
    cursorTag.style.top = e.pageY + 'px';
});

// Login Function
function unlockSite() {
    const nameInput = document.getElementById('user-name-input').value;
    
    if (nameInput.trim() !== "") {
        // Update cursor name
        cursorTag.innerText = "Hi, " + nameInput + "!";
        
        // Hide login and show main site
        document.getElementById('login-overlay').style.display = 'none';
        document.getElementById('main-site').style.display = 'block';
    } else {
        alert("Please enter your name to receive your invitation!");
    }
}

// Menu Navigation Function
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');
}