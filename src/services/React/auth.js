
export const isAuthenticated = () => {
    const token = localStorage.getItem("usersToken");
        if (token) {
            return true;
        } else {
            return false;
        }
}
export  const convertTime = (apiTime) => {
    const getDate = new Date(apiTime);
    let getHours = getDate.getHours();
    let getMinutes = getDate.getMinutes();

    if (getHours<=9) {getHours=`0${getHours}`}
    if (getMinutes<=9) {getMinutes=`0${getMinutes}`}
    const correctTime = `${getHours}: ${getMinutes}`

    return correctTime;
}

export const convertDate = (apiDate) => {
   
    const getDate = new Date(apiDate);
    console.log(getDate)
    let getDay = getDate.getDate();
    let getMonth = getDate.getMonth() + 1;
    console.log( getDay, getMonth)


    if(getDay<=9) {getDay=`0${getDay}`};
    if(getMonth<=9) {getMonth=`0${getMonth}`};
    const correctDate = `${getDay}/${getMonth}`;

    return correctDate;
}
