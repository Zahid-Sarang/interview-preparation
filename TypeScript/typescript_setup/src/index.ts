class User {
	email: string;
	name: string;
   readonly city: string ="khargahr"
	constructor(email: string, name: string) {
		this.email = email;
		this.name = name;
	}
}

const zahid = new User("zahid@gmail.com", "Zahid");
