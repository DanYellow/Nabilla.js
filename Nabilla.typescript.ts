/// <reference path="jquery.d.ts"/>

class Nabilla {
    constructor () {
        var $linkClickedHref = '';

        var audioPlayer:HTMLAudioElement = document.createElement('audio');
        audioPlayer.src = 'nabilla-allo-quoi.ogg';

        $('body').append(audioPlayer);

        $(document).on('click', 'a[target!="_blank"]', function(evt) {
            evt.preventDefault();

            $linkClickedHref = $(this).attr('href');
            audioPlayer.play();
        });

        audioPlayer.addEventListener('ended', function() {
            this.currentTime = 0;
            window.location.href = $linkClickedHref;
        }, false);

        document.getElementsByTagName('head')[0].innerHTML = '';

        var divs:NodeListOf<HTMLDivElement> = document.getElementsByTagName('div');
        for(var i = 0; i < divs.length; i++){
           divs[i].className += ' boobs';
        }
    }
}

$(() => {
    var nabilla = new Nabilla();
});
