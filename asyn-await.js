const posts=[{title:'Post One',body :'This is post one'},
            {title:'Post Two',body:'This is post two'}];
           
            function getPosts(){
                    setInterval(()=>{   
                    let output='';
                    posts.forEach((post,index)=>{ 
                        output +=`<li>${post.title}</li>`;
                    });
                    document.body.innerHTML=output;
                },1000);
            }
           
            function create(post){
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        posts.push(post);
                        let error=false;
                        if(!error)
                        {
                            resolve();
                        }
                        else{
                            reject("kuch sahi nahi hai");
                        }
                    },2000) 
                })
                
            }
            function deletepost(){
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        
                        if(posts.values!==0)
                        {
                            resolve(posts.pop());
                        }
                        else{
                            reject("Array is Empty");
                        }
                    },2000) 
                })
            }

        const p1=Promise.resolve("Hello World");
        const p2=10;
        const p3=new Promise((resolve,reject) =>setTimeout(resolve,2000,"Goodbye"));
        const p4=fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json());
        Promise.all([p1,p2,p3,p4]).then((values)=>console.log(values));
       
              create({title:'Post Three',body:'This is post three'})
             .then(()=>{
                getPosts(),  
                deletepost().then(()=>{console.log(posts)})
             })
             .then(getPosts).catch((error)=>console.log(error));

             async function start(){
                 await create({title:'Post Four',body:'This is post four'});
                 getPosts();
            }
            start();
