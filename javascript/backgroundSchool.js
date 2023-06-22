function searchSchool() {
    var input = document.querySelector('.input-search-school');
    var filter = input.value.toUpperCase();
    var schools = document.querySelectorAll('.list-school .item-school');

    schools.forEach(function (school) {
        var name = school.querySelector('.name-category');
        var tag = school.querySelector('.tag-school');
        var textValue = name.textContent || name.innerText;

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            school.classList.remove('hidden');
        } else {
            school.classList.add('hidden');
        }
    });
}

document.querySelector('.input-search-school').addEventListener('input', searchSchool);