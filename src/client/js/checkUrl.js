export const urlChecker = (articleUrl) => {
    let check = articleUrl.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if (check === null){
        alert("Enter a website with http:// or https://")
    } else {
    return true }
}


