// console.log(process.argv);

function printType(type) {
  if (type === "--dev" || type === "-D") {
    return "desarrollo";
  }

  return ""
}

function installPackages(type, packages) {
  console.log(`Instalando \`${packages.join(", ")}\` de tipo \`${printType(type)}\``);
}

function removePackages(type, packages) {
  console.log(`Removiendo \`${packages.join(", ")}\` de tipo \`${printType(type)}\``);
}

// const params = process.argv
// const action = params[2]
// const type = params[3]
// const packages = params[4]

const [, , action, type, ...packages] = process.argv;

if (action === "install") {
  installPackages(type, packages);
}

if (action === "remove") {
  removePackages(type, packages);
}
