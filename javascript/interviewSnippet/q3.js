const obj = {
    value: 100,
    getValue() {
      return this.value;
    }
  };
  
  const fn = obj.getValue;
  const result = fn();
  console.log(result)