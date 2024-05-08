import Chip8 from "./Chip8";
import Monitor from "./Monitor";
import Keyboard from "./Keyboard";
import Speaker from "./Speaker";
import '../styles.css';

const FPS = 60;
let loop, fpsInterval, startTime, now, then, elapsed;

const romSelector = document.getElementById('roms');
romSelector.addEventListener('change', () => {
  const rom = romSelector.options[romSelector.selectedIndex].value;
  console.log(rom);
  loadRom(rom);
});

const reloadButton = document.getElementById('reload');
reloadButton.addEventListener('click', () => {
  console.log('Click');
  const rom = romSelector.options[romSelector.selectedIndex].value;
  console.log(rom);
  loadRom(rom);
});

const loadingText = document.getElementById('loading-text');

function loadRom(romName) {
  const monitor = new Monitor(15);
  const keyboard = new Keyboard();
  const speaker = new Speaker();
  const chip8 = new Chip8(monitor, keyboard, speaker);

  window.cancelAnimationFrame(loop);

  function step() {
    now = Date.now();
    elapsed = now - then;

    if(elapsed > fpsInterval) {
      chip8.cycle();
      then = now - (elapsed % fpsInterval);
    }

    loop = requestAnimationFrame(step);
  }

  const url = `/rom/${romName}`;
  reloadButton.disabled = true;
  loadingText.innerHTML = 'Loading' + romName + '...';

  fetch(url).then(res => res.arrayBuffer())
          .then(buffer => {
            console.log(buffer.byteLength);

            const program = new Uint8Array(buffer);
            console.log('Loaded Program: ${program}', program);

            fpsInterval = 1000 / FPS;
            then = Date.now();
            startTime = then;
            reloadButton.disabled = false;

            chip8.loadSpritesIntoMemory();
            chip8.loadProgramIntoMemory(program);
            console.log(program);

            loop = requestAnimationFrame(step);
            loadingText.innerHTML = 'Playing ' + romName + ' !';
          });
}

loadRom('BLITZ');
