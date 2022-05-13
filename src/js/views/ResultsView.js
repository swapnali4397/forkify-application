import icons from "url:../../img/icons.svg";
import PreviewView from "./PreviewView.js";
import View from "./View.js";
// import { API_URL } from "../config.js";

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again ;)";
  _message = "";

  _generateMarkup() {
    return this._data
      .map((result) => PreviewView.render(result, false))
      .join("");
  }
}

export default new ResultsView();
