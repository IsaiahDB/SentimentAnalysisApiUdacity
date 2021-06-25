export const urlChecker = (articleUrl) => {
    //const articleLink = articleUrl.match(/^(ftp|http|https):\/\/[^ "]+$/);
    let articleLink = new RegExp("http(s?):\/\/");
    if (articleUrl == articleUrl.match(articleLink)){
        return true
    } else {
        console.log("Enter Url with HTTPS or HTTP") 
        alert("Enter Url with HTTPS or HTTP")
    }
}


