package Assignments;

public class Person {
	private String name;
	private int age;
	private String email;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		if (age < 0 || age > 150) {
			System.out.println("Invalid age");
			return;
		}
		this.age = age;
	}

	public String getEmail() {
		return email;

	}

	public void setEmail(String email) {
		if (email == null || !email.contains("@")) {
			System.out.println("Invalid email");
			return;
		}

		this.email = email;
	}

	public Person() {

	}

	public Person(String name, int age, String email) {
		setName(name);
		setAge(age);
		setEmail(email);
	}

	@Override
	public String toString() {
		return "Person = { name = '" + name + "', age = " + age + ", email = '" + email + "' }";
	}

	public static void main(String[] args) {
		Person p = new Person();
		Person p2 = new Person("Satya", 22, "satyakadamba99@gmail.com");

		p2.setAge(30);
		System.out.println(p2);
	}

}
