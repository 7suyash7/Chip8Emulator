Virtual Machines - Wikipedia Definition

Architecture - In computer engineering, computer architecture is a set of rules and methods that describe the functionality, organization, and implementation of computer systems. Main components of it are: 
1. CPU - Executes Instructions
2. Registers - Small Memory Units
3. RAM - Large volatile memory unit to store running programs.

There are other components too, but these are the common ones every architecture has.

Each architecture has a different spec for these things, Eg. The instruction set a CPU can execute or the maximum amount of RAM it can have. That's what makes them different. That's why for example you might need different binaries for say an Intel Chip and an Apple M series Silicon Chip
Each program at the end has to be converted to the set of instructions for the particular processor.
That's why there are different programs for different architectures.

An Emulator or a Virtual Machine simulates the specific architecture through software. For eg, we will represent Registers as variables instead of actual Hardware Units as we will perform the same operation through code which the circuit does after seeing an instruction.

Chip-8

It is a programming language that runs on a virtual machine from the 1970s.
Made so that devs can easily make games for computers like COSMAC VIP
It's a simple Process Virtual Machine, but the structure of writing it is very similar to writing a System Virtual Machine.