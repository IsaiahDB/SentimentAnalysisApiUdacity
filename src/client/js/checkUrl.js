export const urlChecker = (articleUrl) => {
    
    let articleLink = new RegExp("http(s?):\/\/");
    if (!articleLink.test(articleUrl)){
        console.log("Enter Url with HTTPS or HTTP") 
        
    } else {
        return true
    }
}


