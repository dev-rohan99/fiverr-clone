
export const isEmail = (email) => {
    return /^[a-z0-9-_\.]{1,}@[a-z0-9]{1,}\.[a-z\.]{2,}$/.test(email);
}

export const isUsername = (username) => {

    const pattern = /^[a-z0-9-_]{3,}$/;
    const checkUsername = pattern.test(username);
    return checkUsername

}


