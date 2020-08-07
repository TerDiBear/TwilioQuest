function construct(name) {
  let user = {
    name : '${name}',
    material :'human',
    assemble : true,
    duration : 1000,
  }
  return user;
}

//const somePerson = construct ('Gene');
//console.log('name is: ' + somePerson.name);
//console.log('duration is: ' + somePerson.duration);
