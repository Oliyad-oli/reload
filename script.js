function askReload() {
    const answer = confirm("Do you want to reload the page?");

    if (answer) {
        location.reload();
    }
}
