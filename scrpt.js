function openCategory(category) {
    // Hide all categories
    var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }
    let bg=document.getElementById("bg");
    bg.style.display= 'none';

    // Show the selected category
    document.getElementById(category).style.display = 'block';
}
