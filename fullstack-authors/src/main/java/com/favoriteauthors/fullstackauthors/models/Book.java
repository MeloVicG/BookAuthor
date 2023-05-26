package com.favoriteauthors.fullstackauthors.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue
    private Long id;

    private String book;
    private String author;

    private boolean haveRead;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean isRead() {
        return haveRead;
    }

    public void setRead(boolean haveRead) {
        this.haveRead = haveRead;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", book='" + book + '\'' +
                ", author='" + author + '\'' +
                ", haveRead=" + haveRead +
                '}';
    }
}
