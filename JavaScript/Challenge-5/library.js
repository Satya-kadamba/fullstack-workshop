function createLibrary() {
  return {
    books: [],
    members: [],
    borrowed: [],
    history: [],

    addBook(book) {
      const b = this.books.find(x => x.isbn === book.isbn);
      b ? b.copies += book.copies : this.books.push(book);
    },

    addMember(member) {
      this.members.push(member);
    },

    borrowBook(memberId, isbn) {
      const book = this.books.find(b => b.isbn === isbn);
      if (!book || book.copies === 0) return;
      book.copies--;
      this.borrowed.push({ memberId, isbn, borrowedAt: new Date() });
      this.history.push({ memberId, isbn, title: book.title, borrowedAt: new Date(), returnedAt: null });
    },

    returnBook(memberId, isbn) {
      this.borrowed = this.borrowed.filter(b => !(b.memberId === memberId && b.isbn === isbn));
      const book = this.books.find(b => b.isbn === isbn);
      if (book) book.copies++;
      const h = this.history.find(x => x.memberId === memberId && x.isbn === isbn && x.returnedAt === null);
      if (h) h.returnedAt = new Date();
    },

    getAvailableCopies(isbn) {
      const b = this.books.find(x => x.isbn === isbn);
      return b ? b.copies : 0;
    },

    getMemberHistory(id) {
      return this.history.filter(h => h.memberId === id);
    },

    getOverdueBooks() {
      return this.borrowed.filter(b => ((new Date() - b.borrowedAt) / 86400000) > 14);
    },

    searchBooks(q) {
      q = q.toLowerCase();
      return this.books.filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q));
    }
  };
}
//------------------------- given code ----------------
const library = createLibrary();

// Add books
library.addBook({ isbn: '123', title: '1984', author: 'Orwell', copies: 3 });
library.addBook({ isbn: '456', title: 'Dune', author: 'Herbert', copies: 2 });

// Add members
library.addMember({ id: 'M1', name: 'John', email: 'john@example.com' });
library.addMember({ id: 'M2', name: 'Jane', email: 'jane@example.com' });

// Borrow books
library.borrowBook('M1', '123'); 
library.borrowBook('M2', '123');  

console.log(library.getAvailableCopies('123'));  // 1

library.returnBook('M1', '123');  

console.log(library.getMemberHistory('M1'));

console.log(library.getOverdueBooks());  
console.log(library.searchBooks('orwell'));  