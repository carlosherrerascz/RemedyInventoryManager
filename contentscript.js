function Laptop(model, serialNumber) {
    this.setSpecs = function () {
        PC.model = model;
        PC.serialNumber = serialNumber;

        // Finding the CPU. For some reason, match creates three
        // strings repeatedly.
        var cpuRegex = /.(i[0-9])-([0-9]+)?([a-z]+)/gi;
        var cpu = document.body.innerText.match(cpuRegex);
        cpu = cpu[0];
        console.log("Processor: " + cpu);
        PC.cpu = cpu;

        // Finding the RAM.
        var ramRegex = /.GB.DDR[0-9]/gi
        var ram = document.body.innerText.match(ramRegex);
        console.log("Memory: " + ram);
        PC.ram = ram;

        // // Setting assignee and username.
        PC.assignee = prompt("Who was this computer's assignee?");
        PC.username = prompt("What is the client's username for this computer?")

        var jsonString = JSON.stringify(PC);
        // Use Chrome localStorage API to save to local sync. 
    }
}

// Create new PC. 
var PC = new Laptop(model, serialNum);
// Create a JSON object.
PC.setSpecs();