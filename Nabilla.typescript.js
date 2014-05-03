var Nabilla = (function () {
    function Nabilla() {
        var $linkClickedHref = '';

        var audioPlayer = document.createElement('audio');
        audioPlayer.src = 'nabilla-allo-quoi.ogg';

        $('body').append(audioPlayer);

        $(document).on('click', 'a[target!="_blank"]', function (evt) {
            evt.preventDefault();

            $linkClickedHref = $(this).attr('href');
            audioPlayer.play();
        });

        audioPlayer.addEventListener('ended', function () {
            this.currentTime = 0;
            window.location.href = $linkClickedHref;
        }, false);

        document.getElementsByTagName('head')[0].innerHTML = '';

        var divs = document.getElementsByTagName('div');
        for (var i = 0; i < divs.length; i++) {
            divs[i].className += ' boobs';
        }
    }
    return Nabilla;
})();

$(function () {
    var nabilla = new Nabilla();
});
