package com.favoriteauthors.fullstackauthors.exception;

public class BookNotFoundException  extends RuntimeException{
    public BookNotFoundException(Long id){
        super("could not find the book id with " + id);
    }
}
