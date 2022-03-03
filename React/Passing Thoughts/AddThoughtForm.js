import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "./utilities";

export function AddThoughtForm(props) {
  //defining state
  const [text, setText] = useState("");

  //handles text being added to the text box
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  //handle submission
  const handleSubmit = (event) => {
    //default behavior is reset page on submission. This prevents it
    event.preventDefault();

    //create a new thought object on submit
    const thought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };

    //Don't add unless there is text
    //note - will still add only spaces "     "
    if (text.length > 0) {
      //add thought to list
      props.addThought(thought);
      //clear entry box
      setText('');
    }

  };

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        value={text}
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add" />
    </form>
  );
}
