class User {
    id;
    username;
    email;
    phone;
    citizenship;

    set password(hashed) {
        
    }

    get password() {
        throw new Error(``);
    }
}