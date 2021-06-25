export const urlChecker = (articleUrl) => {
    let articleLink = new RegExp("http(s?):\/\/");
    if (articleLink.test(articleUrl)){
        return true
    } else {
        console.log("Enter Url with HTTPS or HTTP") 
    }
}


