const path = require('path');


document.getElementById('teacher').onclick = () => {
    window.location.href = path.join(process.cwd(), 'templates/teacherClient/ListOfTests1.html');
}

document.getElementById('child').onclick = () => {
    window.location.href = path.join(process.cwd(), 'templates/childClient/TestSelection.html');
}