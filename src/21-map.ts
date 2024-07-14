import { ListFormat } from "typescript";

export {};

function tidyUpString(str: string) {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string) {
  const firstCharUpper = str[0].toUpperCase()
  return firstCharUpper + str.substring(1)

}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy: string[] = [];

mentors.forEach(function(mentor) {
  const tidyName = tidyUpString(mentor)
  const capitalized = capitalise(tidyName)
  mentorsTidy.push(capitalized)
  }); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
