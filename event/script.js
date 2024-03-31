document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var lecturerName = document.getElementById('lecturerName').value;
    var additionalText = "𝐘𝐎𝐔 𝐀𝐑𝐄 𝐈𝐍𝐕𝐈𝐓𝐄𝐃 𝐅𝐎𝐑 \n 𝐀𝐏𝐑, 𝟐𝐊𝟐𝟒 \n 𝐎𝐑𝐆𝐀𝐍𝐈𝐙𝐄𝐃 𝐁𝐘 - \n ★ 𝐂𝐎𝐌𝐏𝐔𝐓𝐄𝐑 𝐒𝐂𝐈𝐄𝐍𝐂𝐄 𝐃𝐄𝐏𝐀𝐑𝐓𝐌𝐄𝐍𝐓 ★ \n";
    var welcomeMessage = '𝐖𝐄𝐋𝐂𝐎𝐌𝐄, ' + lecturerName + ' (⁠≧⁠▽⁠≦⁠) !! ' + '\n\n' + additionalText;
    document.getElementById('welcomeMessage').innerText = welcomeMessage;
    document.getElementById('welcomeMessage').style.display = 'block';

    // Play audio
    var audio = document.getElementById('audio');
    audio.play();

    // Activate confetti
    var confettiSettings = {
        particleCount: 200,
        spread: 160
    };
    confetti.create(document.getElementById('confetti'), confettiSettings);
});