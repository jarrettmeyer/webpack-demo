// Import statements come first, including third-party libraries and packages that
// we have written and included in this project.
import * as _ from "lodash";
import { addParagraph } from "./addParagraph";
import { stringifyArray } from "./stringifyArray";

// First, grab the body element and add a generic text paragraph.
let body = document.getElementsByTagName("body")[0];
addParagraph(body, "This is a new paragraph. It was added from JavaScript.");

// Second, create an array and write this to the body.
let myArray = [[1, 2], [3, 4], [5, 6]];
addParagraph(body, "myArray = " + stringifyArray(myArray) + ".");

// Third, use lodash to flatten the multi-level array. This is only done to demonstrate
// using a third-party library.
let myFlattenedArray = _.flatten(myArray);
addParagraph(body, "myFlattenedArray = " + stringifyArray(myFlattenedArray) + ".");
