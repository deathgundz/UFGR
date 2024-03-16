document.addEventListener('DOMContentLoaded', function() {
    // Define the correct navigation order
    const navigationOrder = [
        "index.html",
        "sf6_quiz.html",
        "sf6_result.html",
        "ggst_quiz.html",
        "ggst_result.html",
        "uni2sc_quiz.html",
        "uni2sc_result.html",
        "tekken8_quiz.html",
        "tekken8_result.html",
        "dnf_quiz.html",
        "dnf_result.html",
        "tkofxv_quiz.html",
        "tkofxv_result.html",
        "mbtl_quiz.html",
        "mbtl_result.html",
        "mk1_quiz.html",
        "mK1_result.html",
        "gbfvr_quiz.html",
        "gbfvr_result.html",
        "ssd_quiz.html",
        "ssd_result.html",
        "top32.html",
        "top32_matches.html",
        "top16.html",
        "top16_matches.html",
        "top8.html",
        "top8_matches.html",
        "top4.html",
        "top4_matches.html",
        "top2.html",
        "top2_matches.html",
        "top1.html"
    ];

    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();

    // Check if the current page is in the correct position in the navigation order
    const currentIndex = navigationOrder.indexOf(currentPage);
    const expectedPage = navigationOrder[currentIndex - 1];

    if (currentIndex === -1 || expectedPage !== document.referrer.split('/').pop()) {
        // Redirect to the index page
        window.location.href = 'index.html';
    }
});
