$(document).ready(function() {
    $('div[data-testid="fbfeed_story"]').find('a[href*="/ads"]:contains("Sponsored")').closest('div[data-testid="fbfeed_story"]').css("display", "none");
    $('body').on('click', function() {
        $('div[data-testid="fbfeed_story"]').find('a[href*="/ads"]:contains("Sponsored")').closest('div[data-testid="fbfeed_story"]').css("display", "none");
    });
});

$(window).scroll(function() {
    $('div[data-testid="fbfeed_story"]').find('a[href*="/ads"]:contains("Sponsored")').closest('div[data-testid="fbfeed_story"]').css("display", "none");
});
