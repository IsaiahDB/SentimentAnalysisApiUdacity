export const urlChecker = (articleUrl) => {
    let check = articleUrl.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if (check === null){
        alert("Please enter a valid URL beginning with http:// or https://")
    } else {
    return true }
}


