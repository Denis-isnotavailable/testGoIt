export const changeFollowers = (followers) => {
    let uiFollowers = [];
    let arr = followers.toString().split('');
    let count = 0;
    for (let i = arr.length - 1; i >= 0; i -= 1) {        
        count += 1;
        if (count === 3 && i !== 0) {            
            uiFollowers.unshift(arr[i]);
            uiFollowers.unshift(',');
            count = 0;
        } else {
            uiFollowers.unshift(arr[i]);
        }     
    }

    return uiFollowers.join('');
}