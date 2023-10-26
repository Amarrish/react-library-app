import { BASE_URL  } from "./baseURL";
import { commonAPI } from "./commonAPI";

// uploading books
export const uploadBooks = async(book)=>{
    return await commonAPI("POST", `${BASE_URL}/books`,book)
   
}

// get all books
export const getAllBooks = async()=>{
    return await commonAPI("GET", `${BASE_URL}/books`,"")
}

// delete books
export const deleteBooks = async(id)=>{
    return await commonAPI("DELETE", `${BASE_URL}/books/${id}`,{})
}

// Get a book by its ID
export const getBookById = async (id) => {
    return await commonAPI("GET", `${BASE_URL}/books/${id}`, "");
  };

  
// Update a book by its ID
export const updateBook = async (id, updatedBookData) => {
    return await commonAPI("PUT", `${BASE_URL}/books/${id}`, updatedBookData);
  };


