function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('toggle-btn');
    if (sidebar.style.left === '-240px'||sidebar.style.left==='') {
        button.style.backgroundImage="url('Arrowleft.jpg')";
        sidebar.style.left = '10px';
        button.style.left = '250px';
            button.style.backgroundImage="url('Arrowleft.png')";
    } else {
        sidebar.style.left = '-240px';
        button.style.left = '0px';
       button.style.backgroundImage="url('Arrowright.png')";
    }
}

/*function toggleDropdown(id) {
    var content = document.getElementById(id);
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}*/

function toggleDropdown(id){
    var content = document.getElementById(id);
    if(content.classList.contains('show')){
        content.classList.remove('show');
        setTimeout(() =>content.style.display = 'none',300);
    }
    else
    {
        content.style.display = 'block';
        setTimeout(() =>content.classList.add('show'),10);
    }
}