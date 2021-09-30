import React, { useState } from "react";
import { Route } from "react-router";
import BookInput from "./BookInput";
import BookList from "./BookList";
import AppContextProvider from "../context/AppContextProvider";

const BookMain = () => {
  return (
    <>
      <AppContextProvider>
        <Route path="/" component={BookMain} exact>
          HOME
        </Route>
        <Route path="/insert" component={BookInput} exact />
        <Route path="/list" exact>
          <BookList />
        </Route>
      </AppContextProvider>
    </>
  );
};

export default BookMain;
