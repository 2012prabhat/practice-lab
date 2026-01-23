const obj = {
    a: 1,
    b: {
      a: 2,
      getA() {
        return this.a;
      }
    }
  };
  
  const getA = obj.b.getA;
  getA();
  