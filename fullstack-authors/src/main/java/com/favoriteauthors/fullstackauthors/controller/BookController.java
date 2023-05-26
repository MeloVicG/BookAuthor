package com.favoriteauthors.fullstackauthors.controller;


import com.favoriteauthors.fullstackauthors.data.BookRepository;
import com.favoriteauthors.fullstackauthors.exception.BookNotFoundException;
import com.favoriteauthors.fullstackauthors.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RequestMapping("/")
@RestController
@CrossOrigin("http://localhost:3000") // connects backend to front like CORS...???
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    //constructor
    public BookController(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    @ModelAttribute("list")  //what does this do?
    public Iterable<Book> getBooks() {
        return bookRepository.findAll();
    }

    @PostMapping("/create")
    Book newBook(@RequestBody Book newBook){
        System.out.println("this is new book --------------: " + newBook.toString());
        return bookRepository.save(newBook);
//        return "list";
    }

    @GetMapping("/list")
    List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/book/{id}")
    Book getBookById(@PathVariable Long id){
        return bookRepository.findById(id)
                .orElseThrow( () -> new BookNotFoundException(id));
    }

    @PutMapping("/book/{id}")
    Book updateBook(@RequestBody Book newBook, @PathVariable Long id){
        return bookRepository.findById(id)
                .map(book -> {
                    book.setBook(newBook.getBook());
                    book.setAuthor(newBook.getAuthor());
                    book.setRead(newBook.isRead());
                    return bookRepository.save(book);
                }).orElseThrow(()-> new BookNotFoundException(id));
    }

    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable Long id){
        if(!bookRepository.existsById(id)){
            throw new BookNotFoundException(id);
        }
        bookRepository.deleteById(id);
        return "user id " + id + " has been deleted";
    }


}
