import { myAdviseData } from '../data.js';
import { getListItems } from '../services/services.js';

const itemCreaterForm = document.forms.itemCreaterForm;
const addNewAdv = document.querySelector('.addNewAdv');
const myAdviseList = document.querySelector('.myAdviseList');

const AdsPage = () => {

    function toggleStateForm() {
        itemCreaterForm.classList.toggle('hide');
    }

    const data = {
        title: '',
        anchor: '',
        price: '',
        description: ''
    }

    function getNewItemInfo(e) {
        data[e.target.name] = e.target.value;
    }

    function clear(data) {
        const keys = Object.keys(data);
        keys.map(key => data[key] = '')
    }

    function addNewItem(e) {
        e.preventDefault();
        myAdviseData.push({ id: `${Date.now()}`, ...data });
        itemCreaterForm.reset();
        console.log(myAdviseData);
        clear(data);
        toggleStateForm();
    }

    getListItems(myAdviseList, myAdviseData);

    addNewAdv.addEventListener('click', toggleStateForm);
    itemCreaterForm.addEventListener('change', getNewItemInfo);
    itemCreaterForm.addEventListener('submit', addNewItem);
}

export default AdsPage;



