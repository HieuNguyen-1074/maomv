class User{
    constructor(){
      this.name = "s"
    }
    async getUsers(){
         let user = await fetch("./db.json");
          var users = user.json();
         return users;
    }
}
export default User;