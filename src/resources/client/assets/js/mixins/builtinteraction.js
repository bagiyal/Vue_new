function built_interaction(remark,type,status,title) {
    return {"title":title,"status":status,"type":type,"remark":remark,"agent":document.querySelector("meta[name='user-name']").getAttribute('content'),"time":Math.round(+new Date()/1000)}

}



export default built_interaction

