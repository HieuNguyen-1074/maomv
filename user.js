class User{
    constructor(){
      this.name = "s"
    }
    async getUsers(){
         let users = await fetch("/db.json");
         users = users.json();
         return users;
    }
}
export default User;