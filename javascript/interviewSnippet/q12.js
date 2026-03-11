const obj = {
    name: "JS",
    print() {
      console.log("My name is",this.name);
    }
  };
  setTimeout(obj.print, 0);
  