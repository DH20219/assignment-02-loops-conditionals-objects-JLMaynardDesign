function sentences(list) {
  // Hint: "ministers" is an ARRAY of OBJECTS. The simplest way to solve this problem
  // is to use the "for...of" loop syntax to loop through the array,
  // and the object[attribute] or object.attribute reference format to access
  // the internal components of the objects.
  let result = list.fullName + "\'s reign was " + (list.to - list.from) + "years long." + "\n";
  for (let i = 0; i < list.length; i++) {
      const result = list.fullName + "\'s reign was " + (list.to - list.from) + "years long." + "\n";
      return result;
    }
  };