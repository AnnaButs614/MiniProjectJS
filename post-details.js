//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post
// на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного
// поста (ендпоінт  -
// https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location.href);
const id = url.searchParams.get('post');
main_div = document.createElement('div');
console.log('https://jsonplaceholder.typicode.com/posts/'+ id);
let div = document.createElement('div');
fetch ('https://jsonplaceholder.typicode.com/posts/'+ id)
    .then (value => value.json())
    .then (userPost => {
        let h2 = document.createElement('h2');
        h2.innerText=`Title: ${userPost.title} body: ${userPost.body}`;
        div.append(h2);
        console.log(userPost);
    })
const button1 = document.createElement('button');
button1.innerText = 'Comments of post';
div.append(button1);
button1.onclick=()=>{
    fetch ('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then (value => value.json())
        .then (comments => {
            console.log(comments);
            cm_div = document.createElement('div');
            cm_div.className='cm_div'
            document.body.append(cm_div);
            for (const comment of comments) {
                console.log(comment);
                let c = document.createElement('div');
                c.className='comm'
                let cm = document.createElement('div');
                cm.className='cm';
                cm.innerText =`${comment.name} ${comment.email} `
                let cm_body=document.createElement('div')
                cm_body.innerText=`${comment.body}`
                c.append(cm,cm_body);
                cm_div.append(c);

            }

        }) }

document.body.append(div);
