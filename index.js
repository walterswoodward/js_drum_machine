(function drumkit() {
  // i here is essentially the ascii equivalent of each keyboard letter
  const soundFileLoc = [
    "agogo.wav",
    "block1.wav",
    "block2.wav",
    "cabasa.wav",
    "clap.wav",
    "clave.wav",
    "conga.wav",
    "conga2.wav",
    "cowbell1.wav",
    "cowbell2.wav",
    "crash.wav",
    "hat1.wav",
    "hat2.wav",
    "hat3.wav",
    "hat4.wav",
    "hat5.wav",
    "kick1.wav",
    "kick2.wav",
    "kick3.wav",
    "kick4.wav",
    "kick5.wav",
    "kick6.wav",
    "maraca1.wav",
    "maraca2.wav",
    "ride1.wav",
    "ride2.wav",
    "rim.wav",
    "shaker.wav",
    "sidestick.wav",
    "snap.wav",
    "snare1.wav",
    "snare2.wav",
    "snare3.wav",
    "snare4.wav",
    "snare5.wav",
    "snare6.wav",
    "snare7.wav",
    "tambourine.wav",
    "timbale.wav"
  ];
  for (let i = 65; i < 90; i++) {
    let key = String.fromCharCode(i);
    document.write(
      `<html><body><div data-key="${i}" class="key" id="key${i}"><kbd>${key}</kbd><span></span></div></body></html>`
    );
  }
  for (let i = 65; i < 90; i++) {
    let soundFileIndex = i - 65;
    document.write(
      `<html><body><audio data-key="${i}" src="sounds/${
        soundFileLoc[soundFileIndex]
      }"></audio></body></html>`
    );
  }
})();

window.addEventListener("keydown", function(e) {
  this.console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0; // enables fast replay
  audio.play();
  key.classList.add("playing");
  this.addEventListener("keyup", function() {
    key.classList.remove("playing");
  });
});