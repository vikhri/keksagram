import { CheckStringLength } from './check.js';
// import { CreatePost } from './get-posts.js';

import {renderPictures} from './pictures.js';
import {renderPopup} from './popup.js';
import { showFliterBar } from './showfiltres.js';
import './upload-form-open.js';
import './photo-form-validation.js';
import './show-filtered-pics.js';



fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderPictures(data);
    renderPopup(data);
    showFliterBar();

  }).catch((err) => {console.log(err)});



