function confirmEmail() {
    var comment = document.getElementById("address").value;
    var emailLink = "mailto:ak3011514@gmail.com?subject=Comment&body=" + encodeURIComponent(comment);

    var confirmation = confirm("Êtes-vous sûr de vouloir envoyer cet e-mail ?");
    if (confirmation) {
        window.location.href = emailLink;
    }
}
