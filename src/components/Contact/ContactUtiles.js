export async function sendData(data,url){
    const options = {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    } 

    const res = await fetch(url,options);

    if(res.ok){
        console.log(res.json);
    }
    else{
        console.log(res);
    }
}

