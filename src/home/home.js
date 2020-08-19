import User from '../../user.js';



 function displayLogin(){
     const elementBtnLogin = document.querySelector('.btn-login');
     const elementClose = document.querySelector('.fa-times');
     const elementContainerLogin = document.querySelector('.login-container');
     const elementTitleH1 = document.querySelector('.title-h1');
     const elementTitleP = document.querySelector('.title-p');
     elementBtnLogin.addEventListener('click', ()=>{
      elementContainerLogin.classList.add('login-container-act');
      elementTitleH1.classList.add('title-h1-act');
      elementTitleP.classList.add('title-p-act');
      elementBtnLogin.classList.add('btn-login-act');
     })
     elementClose.addEventListener('click', ()=>{
     elementContainerLogin.classList.remove('login-container-act');
     elementTitleH1.classList.remove('title-h1-act');
     elementTitleP.classList.remove('title-p-act');
     elementBtnLogin.classList.remove('btn-login-act');
    })
    
 }
function checkUsers(users){
   const elementInputUserName = document.getElementById('login-form-username');
   const elementInputUserPassword = document.getElementById('login-form-password');
   const elementUserAlert = document.querySelector('.login-alert-user');
   const elementPasswordAlert = document.querySelector('.login-alert-password');
   const elementLoginForm = document.querySelector('.login-form')
  
  elementLoginForm.addEventListener('submit',(e)=>{
      
       var valueUserName = elementInputUserName.value;
       var valueUserPassword = elementInputUserPassword.value;
       var s = {};
       
       for (const user of users) {
           console.log(user);
           if(user.userName === valueUserName && user.password === valueUserPassword){
            s.name = user.userName;
            s.password = user.password;
            break;
           }
         else if(user.userName === valueUserName){
             s.name = user.userName;
            
             break;
         }
          else if(user.password === valueUserPassword){
            s.password = user.password;
            break;
        }
       }
       console.log(s);
       if(!s.password && !s.name ) {
        console.log(s);
        
           elementUserAlert.innerHTML = 'pleass import right';
           elementPasswordAlert.innerHTML = 'pleass import right';
           e.preventDefault();
       }
      else  if(!s.password){
        elementPasswordAlert.innerHTML = 'pleass import right';
        elementUserAlert.innerHTML = '';
        e.preventDefault();
      }
        else  if(!s.name){
            elementPasswordAlert.innerHTML = '';
            elementUserAlert.innerHTML = 'pleass import right';
            e.preventDefault();
    }
       else{
        elementPasswordAlert.innerHTML = '';
        elementUserAlert.innerHTML = '';
        Cookies.set('name', `${s.name}`);
        elementLoginForm.setAttribute("action","/src/productshop/shop.html");
       }
  })
   
}
function main(){
  
    var users = new User();
    users.getUsers().then((data)=>{
     var users = data.user;
      checkUsers(users);
});
   displayLogin();
}
main();