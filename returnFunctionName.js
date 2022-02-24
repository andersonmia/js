function myName() {
    return arguments.callee.name;
}

console.log(myName());