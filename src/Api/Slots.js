import AXIOS from '../Config/Axios';
import headers from '../helpers/headers';

const Slots = {
    getSlots() {
        return AXIOS.get("/slots", { headers: headers() });
    },
};

export default Slots;