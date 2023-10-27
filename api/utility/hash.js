import bcrypt from "bcryptjs";

export const genHashPassword = (password) => {
    const generateSalt = bcrypt.genSaltSync(12);
    const generateHashPass = bcrypt.hashSync(password, generateSalt);
    return generateHashPass;
}

export const verifyPassword = (password, hash) => {
    const comparePassword = bcrypt.compareSync(password, hash);
    return comparePassword;
}

