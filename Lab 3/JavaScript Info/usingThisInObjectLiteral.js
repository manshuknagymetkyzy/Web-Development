function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name );
//An error. because rules that set this do not look at object definition. Only the moment of call matters.