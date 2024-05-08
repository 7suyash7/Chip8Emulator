class Chip8 {

  constructor(monitor, keyboard, speaker) {

    // Keyboard
    this.keyboard = keyboard;

    // Monitor
    this.monitor = monitor;

    // Speaker
    this.speaker = speaker;

    // 4KB Memory
    this.memory = new Uint8Array(4096);

    // 16 8-bit Registers
    this.v = new Uint8Array(16);

    // Store memory adresses
    this.index = 0;
    
    // 16-bit program count register (like a pointer to the line of code that is being currently executed)
    this.pc = 0x200; // following the specs here.

    // 16-level stack
    this.stack = new Array();
    // 8-bit register, stack pointer
    this.sp = 0;

    // Timers
    this.delayTimer = 0;
    this.soundTimer = 0;

    // Identify if system is paused, some instructions require pausing, eg. Fx0A
    this.paused = false;

    // Speed of cpu-cycles
    this.speed = 10;

  };

  loadSpritesIntoMemory() {
    const sprites = [
      // Array of hex values for each sprite (5 bytes per sprite).
        0xF0, 0x90, 0x90, 0x90, 0xF0, // 0
        0x20, 0x60, 0x20, 0x20, 0x70, // 1
        0xF0, 0x10, 0xF0, 0x80, 0xF0, // 2
        0xF0, 0x10, 0xF0, 0x10, 0xF0, // 3
        0x90, 0x90, 0xF0, 0x10, 0x10, // 4
        0xF0, 0x80, 0xF0, 0x10, 0xF0, // 5
        0xF0, 0x80, 0xF0, 0x90, 0xF0, // 6
        0xF0, 0x10, 0x20, 0x40, 0x40, // 7
        0xF0, 0x90, 0xF0, 0x90, 0xF0, // 8
        0xF0, 0x90, 0xF0, 0x10, 0xF0, // 9
        0xF0, 0x90, 0xF0, 0x90, 0x90, // A
        0xE0, 0x90, 0xE0, 0x90, 0xE0, // B
        0xF0, 0x80, 0x80, 0x80, 0xF0, // C
        0xE0, 0x90, 0x90, 0x90, 0xE0, // D
        0xF0, 0x80, 0xF0, 0x80, 0xF0, // E
        0xF0, 0x80, 0xF0, 0x80, 0x80  // F
    ];
    for (let i = 0; i < sprites.length; i++) {
        this.memory[i] = sprites[i];
    }
  };

  loadProgramIntoMemory(program) {
    for(let i = 0; i < program.length; i++) {
      this.memory[0x200 + i] = program[i];
    }
  };

  cycle() {
    for(let i = 0; i < this.speed; i++) {
      if(!this.paused) {
        let opcode = (this.memory[this.pc] << 8 | this.memory[this.pc + 1]);
        this.interpretInstruction(opcode);
      }
    }

    if(!this.paused) this.updateTimers();

    this.sound();
    this.monitor.paint();
    
  };

  updateTimers() {
    if(this.delayTimer > 0) this.delayTimer -= 1;

    if(this.soundTimer > 0) this.soundTimer -= 1;
  };

  sound() {
    if(this.soundTimer > 0) {
      this.speaker.play(440);
    } else {
      this.speaker.stop();
    }
  };

  interpretInstruction(instruction) {
    // console.log(`Opcode: ${instruction.toString(16)}`);
    // adding with two because each instruction is 2 bytes
    this.pc += 2;

    const x = (instruction & 0x0F00) >> 8;

    const y = (instruction & 0x00F0) >> 4;

    // the instructions, v = register

    switch(instruction & 0xF000) {
      case 0x0000:
        switch(instruction) {
          case 0x00E0:
            this.monitor.clear(); // CLR -> Clear
            break;
          
            case 0x0EE:
              this.pc = this.stack.pop(); // RET -> Return from a function
              break; 
        }
        break;
      case 0x1000:
        this.pc = instruction & 0xFFF; // JP addr
        break;
      case 0x2000:
        this.stack.push(this.pc);
        this.pc = instruction & 0xFFF; // CALL addr
        break;
      case 0x3000:
        if(this.v[x] === (instruction & 0xFF)) {
          this.pc +=2; // SE Vx, byte
        }
        break;
      case 0x4000:
        if(this.v[x] != (instruction & 0xFF)) {
          this.pc +=2; // SNE Vx, byte
        }
        break;
      case 0x5000:
        if(this.v[x] === this.v[y]) {
          this.pc += 2; // SE Vx, byte
        }
        break;
      case 0x6000:
        this.v[x] = (instruction & 0xFF); // LD Vx, byte
        break;
      case 0x7000:
        this.v[x] += (instruction & 0xFF); // ADD Vx, byte
        break;
      case 0x8000:
        switch(instruction & 0xF) {
          case 0x0:
            this.v[x] = this.v[y]; // LD Vx, Vy
            break;
          case 0x1:
            this.v[x] != this.v[y]; // OR Vx, Vy
            break;
          case 0x2:
            this.v[x] &= this.v[y]; // AND Vx, Vy
            break;
          case 0x3:
            this.v[x] ^= this.v[y]; // XOR Vx, Vy
          case 0x4:
            let sum = (this.v[x] += this.v[y]); // ADD Vx, Vy

            this.v[0xF] = 0;

            if (sum > 0xFF) {
              this.v[0xF] = 1;
            }

            this.v[x] = sum;
            break;
          case 0x5:
            this.v[0xF] = 0;
            
            if(this.v[x] > this.v[y]) {
              this.v[0xF] = 1; // SUB Vx, Vy
            }

            this.v[x] -= this.v[y];
            break;
          case 0x6:
            this.v[0xF] = this.v[x] & 0x1; // SHR Vx, Vy
            this.v[x] >>= 1;
            break;
          case 0x7:
            this.x[0xF] = 0;
            if(this.v[y] > this.v[x]) {
              this.v[0xF] = 1; // SUBN Vx, Vy
            }
            
            this.v[x] = this.v[y] - this.v[x];
            break;
          case 0xE:
            this.v[0xF] = this.v[x] & 0x80; // SHL Vx, {, Vy}
            this.v[x] << 1;
            break;
          default:
            throw new Error('INCORRECT OPCODE');
        }
        break;
      case 0x9000:
        if(this.v[x] != this.v[y]) {
          this.pc +=2; // SNE Vx, Vy
        }
        break;
      case 0xA000:
        this.index = instruction & 0xFFF; // LD I, addr
        break;
      case 0xB000:
        this.pc = (instruction & 0xFFF) + this.v[0]; // JP V0, addr
        break;
      case 0xC000:
        let rand = Math.floor(Math.random() * 0xFF); // RND Vx, byte
        this.v[x] = rand & (instruction & 0xFF);
        break;
      case 0xD000:
        let width = 8; // DRW Vx, Vy, nibble
        let height = (instruction & 0xF);

        this.v[0xF] = 0;

        for(let row = 0; row < height; row++) {
          let sprite = this.memory[this.index + row];

          for(let col = 0; col < width; col++) {
            if((sprite & 0x80) > 0) {
              if(this.monitor.setPixel(this.v[x] + col, this.v[y] + row)) {
                this.v[0xF] = 1;
              }
            }
            sprite <<= 1;
          }
        }

        break;
      case 0xE000:
        switch(instruction & 0xFF) {
          case 0x9E:
            if(this.keyboard.isKeyPressed(this.v[x])) {
              this.pc += 2; // SKP Vx
            }
            break;
          case 0xA1:
            if(!this.keyboard.isKeyPressed(this.v[x])) {
              this.pc += 2; // SKNP Vx
            }
            break;
          default:
            throw new Error('INCORRECT OPCODE');
        }
        break;
      case 0xF000:
        switch(instruction & 0xFF) {
          case 0x07:
            this.v[x]  = this.delayTimer; // LD Vx, DT
            break;
          case 0x0A:
            this.paused = true; // LD Vx, K

            let nextKeyPress = (key) => {
              this.v[x] = key;
              this.paused = false;
            };

            this.keyboard.onNextKeyPress = nextKeyPress.bind(this);
            break;
          case 0x15:
            this.delayTimer = this.v[x]; // LD Dt, Vx
            break;
          case 0x18:
            this.soundTimer = this.v[x]; // LD ST, Vx
            break;
          case 0x1E:
            this.index += this.v[x]; // ADD I, Vx
            break;
          case 0x29:
            this.index = this.v[x] * 5; // LD F, Vx
            break;
          case 0x33:
            this.memory[this.index] = parseInt(this.v[x] / 100); // LD B, Vx
            this.memory[this.index + 1] = parseInt((this.v[x] % 100) / 10);
            this.memory[this.index + 2] = parseInt(this.v[x] % 10);
            break;
          case 0x55:
            for(let ri = 0; ri <= x; ri++) { // LD [I], Vx
              this.memory[this.index + ri] = this.v[ri];
            }
            break;
          case 0x65:
            for(let ri = 0; ri <= x; ri++) { // LD Vx, [I]
              this.v[ri] = this.memory[this.index + 1];
            }
            break;
          default:
            throw new Error('0xF BAD OPCODE' + instruction);
        }
        break;
      default:
        throw new Error('BAD OPCODE');
    }
  };
  
};

export default Chip8;