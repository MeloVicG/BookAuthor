package com.favoriteauthors.fullstackauthors.data;

import com.favoriteauthors.fullstackauthors.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
