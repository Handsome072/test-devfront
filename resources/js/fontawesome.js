import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faChevronRight, faChevronLeft, faChevronDown, faLocationDot, faPaperPlane, faTimes, faStar, faUser, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'; // Ajoutez faPlus et faMinus
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
library.add(faArrowRight, faChevronRight ,faFacebook, faInstagram, faTwitter, faYoutube, faLinkedin, faChevronLeft, faTimes, faStar, faUser, faPlus, faMinus, faLocationDot,faChevronDown, faPaperPlane);

export default FontAwesomeIcon;
