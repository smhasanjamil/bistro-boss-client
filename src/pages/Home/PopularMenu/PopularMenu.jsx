import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                subheading="---Check it out---"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;