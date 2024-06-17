function getState(promise) {
    const t = {}
    return Promise.race([promise,t])
     .then(v=>(v===t)? "pending" : "fulfilled", () => "rejected");
   }
   
   