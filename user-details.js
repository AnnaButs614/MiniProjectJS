// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку
//     post-details.html, котра має детальну інфу про поточний пост.
const url = new URL(location.href);
const id = url.searchParams.get('idt');
let main_div = document.createElement('div');
document.body.append(main_div);
let div = document.createElement('div');
fetch ('https://jsonplaceholder.typicode.com/users/'+ id)
.then (value => value.json())
.then (userObject => {
 let h2 = document.createElement('h2');
 h2.innerText=`id: ${userObject.id} name: ${userObject.name} username: ${userObject.username}
email: ${userObject.email} street: ${userObject.address.street} suite: ${userObject.address.suite}
 city: ${userObject.address.city} zipcode: ${userObject.address.zipcode} geo.lat: ${userObject.address.geo.lat}
 geo.lng: ${userObject.address.geo.lng} phone: ${userObject.phone} website: ${userObject.website} Company name: ${userObject.company.name}
 catchPhrase: ${userObject.company.catchPhrase} company bs: ${userObject.company.bs}`;
 main_div.append(h2);
    console.log(userObject);
})

        const btnDiv = document.createElement('div');
        btnDiv.className = 'btn_div';

        const button1 = document.createElement('button');
        button1.innerText = 'post of current user';
        button1.className = 'btn_post'
        btnDiv.append(button1);
        div.appendChild(btnDiv);
button1.onclick=()=>{
fetch ('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
    .then (value => value.json())
    .then (posts => {
     console.log(posts);

        let ps_div = document.createElement('div');
        ps_div.className='ps_div'
     i=1;j=0;
     for (const post of posts) {
      console.log(post);
      k=j;
      if (i%5===0){j++}
      //if (i%5===0){let ps_div_det = document.createElement('div');}
      //    document.body.append(ps_div);}
         ps_main = document.createElement('div');
         ps_main.className='ps_main';
         let ps = document.createElement('div');
             ps.className='ps'
             ps.innerText = post.title;
         let ps_lnk = document.createElement('a');
             ps_lnk.className='ps_lnk'
             ps_lnk.innerText = "Post details";
             ps_lnk.href = `post-details.html?post=${post.id}`
    ps_main.append(ps);
    ps_main.append(ps_lnk);
    ps_div.append(ps_main);
     i++
     }
    console.log(j);
        document.body.append(ps_div);
    }) }
document.body.appendChild(div);
