import { FaHome , FaPhone , FaMailBulk} from 'react-icons/fa'

const FootApi = [
    {
        id: 1,
        content:"123 Housing Society" ,
        content2:"Pakistan",
        icon: <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
    },
    {
       id: 2,
       content: "112-234-456-789",
       icon: <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
    },
    {
       id: 3,
       content: "info@gmail.com",
       icon: <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
    }
]

export default FootApi;