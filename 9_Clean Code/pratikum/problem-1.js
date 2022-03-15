class UserData {
	var id;
	var username;
    var password;
}

class UserService {
    UserData[] users = [{
        id : "anindya1201",
        username : "anindyadeffa",
        password : "*****",
    }];

    User [] getAllUsers() {
        return users;
    }

/* This is the function for taking user
*
* @param userid string
*/

    UserData getUserById(userId) {
        return users.filter(user) => {
            if (user.id === userId) {
                return user;
            }
        });
    }
}