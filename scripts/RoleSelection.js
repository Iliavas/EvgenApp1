const path = require('path');


document.getElementById('teacher').onclick = () => {
    window.location.href = path.join('../templates/teacherClient/ListOftests1.html');
}

document.getElementById('child').onclick = () => {
    window.location.href = path.join('../templates/childClient/TestSelection.html');
}