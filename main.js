$('form').submit(function(e) {
    var formData = $(this).serializeArray();
    var tableHTML = "<tr>";
    formData.forEach(function(userObj) {
        tableHTML += "<td>" + userObj.value + "</td>";
    });
    tableHTML += "</tr>";
    $('table tbody').append(tableHTML);
    $('form input').val('');
    e.preventDefault();
});