package Assignments;

public class BankAccount {
	private static String bankName = "UnionBankOfIndia";
	private static int totalAccounts = 0;
	 private static long accountCounter = 10000000; // static counter
	private long accountNumber;
	private String holderName;
	private double balance;
	
	public BankAccount(String holderName,double balance)
	{
		this.holderName = holderName;
		this.balance = balance;
		
		 totalAccounts++;  
		 this.accountNumber = accountCounter++; 
	}
	
	public static String getBankInfo() {
		
		return bankName + " - Total Accounts: " + totalAccounts;
	}
	
	public void deposit(double amount) {
		 if (amount <= 0) {
	            System.out.println("Invalid deposit amount");
	            return;
	        }
	        balance += amount;
	}
	
	public void withdraw(double amount) { 
		  if (amount <= 0 || amount > balance) {
	            System.out.println("Invalid withdrawal amount");
	            return;
	        }
	        balance -= amount;
	}
	
	public double getBalance()
	{
		return balance;
	}
	
	public long getAccNum() {
		return accountNumber;
	}
	
	public static void main(String[] args) {
		BankAccount acc1 = new BankAccount("Satya",112);
		BankAccount acc2 = new BankAccount("Srinivas",99323);
		BankAccount acc3 = new BankAccount("nivas",62723);
		
		System.out.println(BankAccount.getBankInfo());
		
	}
}

