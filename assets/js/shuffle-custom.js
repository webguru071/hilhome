<!-- Shuffle js filter and masonry Start -->
<script>

var Shuffle = window.Shuffle;
var jQuery = window.jQuery;

var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
    itemSelector: '.shuffle-item',
    buffer: 1
});

jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
    var input = evt.currentTarget;
    if (input.checked) {
        myShuffle.filter(input.value);
    }
});

</script>
<!-- Shuffle js filter and masonry Start -->