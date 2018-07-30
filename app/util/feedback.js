import axios from 'axios';
import qs from 'qs';
function feedback(category, text)
{
    const url ="https://script.google.com/macros/s/AKfycbwaeyBnsnO-zOXopeVfEF5r3cszfs6xOo_2WRb_vMduIY5Xy2c/exec";
    return axios.post(url, qs.stringify({
        category: category,
        text: text
    }));
};

export default feedback;