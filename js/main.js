import { CheckStringLength } from './check.js';
// import { CreatePost } from './get-posts.js';

import {renderPictures, clearRenderedPictures } from './pictures.js';
import {renderPopup} from './popup.js';
import { showFilterBar } from './showfiltres.js';
import { applyFilter } from './show-filtered-pics.js';
import './upload-form-open.js';
import './photo-form-validation.js';
import './show-filtered-pics.js';
import './show-uploaded-file.js';


fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderPictures(data);
    renderPopup(data);
    showFilterBar();
    applyFilter(data);


  }).catch((err) => {console.log(err)});



