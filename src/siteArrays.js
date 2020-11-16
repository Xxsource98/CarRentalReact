import CarWidget from './Components/Cars/carWidget'
import NavbarElement from './Components/Navbar/navbarElement'

export const navbarItems = [
    <NavbarElement 
        elementText="News"
        urlTo="/"
        key="News"
    />,
    <NavbarElement 
        elementText="About Renting"
        urlTo="/aboutr"
        key="About Renting"
        contextArray={[
            {
                elementText: "Terms of Use",
                urlTo: "/aboutr/tou",
                id: 2 << 1
            },
            {
                elementText: "Bails",
                urlTo: "/aboutr/bails",
                id: 2 << 2
            }
        ]}
    />,
    <NavbarElement 
        elementText="Our Cars"
        urlTo="/cars"
        key="Our Cars"
        contextArray={[
            {
                elementText: "Mercedes",
                urlTo: "/cars?brands=mercedes",
                id: 1 << 1
            },
            {
                elementText: "Lamborghini",
                urlTo: "/cars?brands=lamborghini",
                id: 1 << 2
            },
            {
                elementText: "Ferrari",
                urlTo: "/cars?brands=ferrari",
                id: 1 << 3
            },
            {
                elementText: "Porsche",
                urlTo: "/cars?brands=porsche",
                id: 1 << 4
            },
            {
                elementText: "Audi",
                urlTo: "/cars?brands=audi",
                id: 1 << 5
            },
            {
                elementText: "BMW",
                urlTo: "/cars?brands=bmw",
                id: 1 << 6
            }
        ]}
    />,
    <NavbarElement 
        elementText="About Us"
        urlTo="/aboutus"
        key="About Us"
    />,
    <NavbarElement 
        elementText="Contact"
        urlTo="/contact"
        key="Contact"
    />,
]

export const filterBrandArray = [
    {
        ElementClassName: "mercedes_brand",
        ElementID: "mercedes",
        ElementText: "Mercedes"
    },
    {
        ElementClassName: "lamborghini_brand",
        ElementID: "lamborghini",
        ElementText: "Lamborghini"
    },
    {
        ElementClassName: "ferrari_brand",
        ElementID: "ferrari",
        ElementText: "Ferrari"
    },
    {
        ElementClassName: "porsche_brand",
        ElementID: "porsche",
        ElementText: "Porsche"
    },
    {
        ElementClassName: "audi_brand",
        ElementID: "audi",
        ElementText: "Audi"
    },
    {
        ElementClassName: "bmw_brand",
        ElementID: "bmw",
        ElementText: "BMW"
    }
]

export const filterPriceArray = [
    {
        ElementClassName: "price_to_high",
        ElementID: "pricetohigh",
        ElementText: "Price to High"
    },
    {
        ElementClassName: "price_to_small",
        ElementID: "pricetosmall",
        ElementText: "Price to Small"
    }
]

export const carsList = [
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG C63s Coupe"
        carImage={{
            Source: "https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/models/c-class/coupe-c205/amg/equipment/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20191119203244.jpeg",
            Creator: "Mercedes Benz",
            Art: "https://www.mercedes-benz.pl/passengercars/mercedes-benz-cars/models/c-class/coupe-c205/amg.html"
        }}
        carPrice={{
            caution: 2500,
            forDay: 111,
            forWeek: 750,
            forMonth: 3250
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 4,
            numberOfDoors: 3,
            carMileage: 22000,
            carFuelType: "Petrol",
            carPower: 510,
            carTransmission: "Automat",
            carColor: "Black",
            carTorque: 700,
            carProdYear: 2015,
            accelerationTo100: 3.9,
            maximumSpeed: 250
        }}
        key="Mercedes AMG C63s Coupe"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.  
        `}
    />,
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG GT63s"
        carImage={{
            Source: "https://profiauto.pl/blog/wp-content/uploads/2018/12/Mercedes-AMG-GT-63S-4-Door-Coupe.jpg",
            Creator: "profiauto.com",
            Art: "https://profiauto.pl/blog/2018/12/27/tak-przyspiesza-mercedes-amg-gt-63s-4-door-coupe/"
        }}
        carPrice={{
            caution: 2500,
            forDay: 200,
            forWeek: 1300,
            forMonth: 5800
        }}
        carParameters={{
            bodyStyle: "Sedan",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 134000,
            carFuelType: "Petrol",
            carPower: 585,
            carTransmission: "Automat",
            carColor: "Black",
            carTorque: 800,
            carProdYear: 2019,
            accelerationTo100: 3.4,
            maximumSpeed: 310
        }}
        key="Mercedes AMG GT63s"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />,
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG G65"
        carImage={{
            Source: "https://cdn.statically.io/img/moto.rp.pl/wp-content/uploads/2019/04/mercedes-g-1.jpg",
            Creator: "https://milanoitali.blogspot.com",
            Art: "https://milanoitali.blogspot.com/2019/12/mercedes-g-klasa-amg-2019-cena_29.html"
        }}
        carPrice={{
            caution: 2500,
            forDay: 200,
            forWeek: 1300,
            forMonth: 5800
        }}
        carParameters={{
            bodyStyle: "SUV",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 134000,
            carFuelType: "Petrol",
            carPower: 612,
            carTransmission: "Automat",
            carColor: "Red",
            carTorque: 850,
            carProdYear: 2014,
            accelerationTo100: 5.3,
            maximumSpeed: 230
        }}
        key="Mercedes AMG G65"
        description={` 
                
        `}
    />,
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG GTR"
        carImage={{
            Source: "https://www.tuningblog.eu/wp-content/uploads/2017/11/Mercedes-AMG-GT-R-ADV05-Felgen-Tuning-7.jpg",
            Creator: "tuningblog.eu",
            Art: "https://www.tuningblog.eu/pl/kategorien/autos-von-a-z/mercedes-amg-gtr-adv05-tuning-180560/"
        }}
        carPrice={{
            caution: 3200,
            forDay: 200,
            forWeek: 1300,
            forMonth: 5800
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 245000,
            carFuelType: "Petrol",
            carPower: 585,
            carTransmission: "Automat",
            carColor: "Lime Green",
            carTorque: 700,
            carProdYear: 2014,
            accelerationTo100: 3.6,
            maximumSpeed: 318
        }}
        key="Mercedes AMG GTR"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />,
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG GTS"
        carImage={{
            Source: "https://cylindersi.pl/wp-content/uploads/2019/10/GTS-lowres-6.jpg",
            Creator: "cylindersi.pl",
            Art: "https://cylindersi.pl/wynajem-samochodow-sportowych/mercedes-amg-gt-s/"
        }}
        carPrice={{
            caution: 3000,
            forDay: 150,
            forWeek: 1000,
            forMonth: 4350
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 2,
            carMileage: 215650,
            carFuelType: "Petrol",
            carPower: 510,
            carTransmission: "Automat",
            carColor: "Gray",
            carTorque: 650,
            carProdYear: 2018,
            accelerationTo100: 3.7,
            maximumSpeed: 310
        }}
        key="Mercedes AMG GTS"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.       
        `}
    />,
    <CarWidget 
        carBrand="mercedes"
        carName="Mercedes AMG GLA 220"
        carImage={{
            Source: "https://drivetribe.imgix.net/Xa8Qfyn_QseBXtkLr0V7RQ",
            Creator: "drivetribe.com",
            Art: "https://drivetribe.com/p/the-d_trb-review-2017-mercedes-UzD_BECFTJm1LORFF5Jxyg?iid=GuN4YYeVQcKcORRPmvLFvg"
        }}
        carPrice={{
            caution: 1250,
            forDay: 75,
            forWeek: 500,
            forMonth: 2150
        }}
        carParameters={{
            bodyStyle: "SUV",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 62720,
            carFuelType: "Petrol",
            carPower: 184,
            carTransmission: "Automat",
            carColor: "Bronze",
            carTorque: 300,
            carProdYear: 2019,
            accelerationTo100: 7.1,
            maximumSpeed: 230
        }}
        key="Mercedes AMG GLA 220"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="audi"
        carName="Audi RS6"
        carImage={{
            Source: "https://img.wprost.pl/img/nowe-audi-rs6-avant/06/54/052a3abefd988b4f5e6a181b53eb.jpeg",
            Creator: "auto.wprost.pl",
            Art: "https://auto.wprost.pl/rynek/10263701/jest-cennik-szalonego-audi-rs6-avant.html"
        }}
        carPrice={{
            caution: 700,
            forDay: 50,
            forWeek: 330,
            forMonth: 1450
        }}
        carParameters={{
            bodyStyle: "Combi",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 122760,
            carFuelType: "Petrol",
            carPower: 560,
            carTransmission: "Automat",
            carColor: "Gray",
            carTorque: 700,
            carProdYear: 2019,
            accelerationTo100: 3.9,
            maximumSpeed: 300
        }}
        key="Audi RS6"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="audi"
        carName="Audi RS7"
        carImage={{
            Source: "https://www.carsmag.pl/wp-content/uploads/2019/09/audi-rs6-audi-rs7-2019-promo.jpg",
            Creator: "carsmag.pl",
            Art: "http://www.carsmag.pl/audi-rs6-avant-i-rs7-sportback-potwory-i-spolka/"
        }}
        carPrice={{
            caution: 1250,
            forDay: 75,
            forWeek: 500,
            forMonth: 2150
        }}
        carParameters={{
            bodyStyle: "Combi",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 62720,
            carFuelType: "Petrol",
            carPower: 600,
            carTransmission: "Automat",
            carColor: "Red",
            carTorque: 800,
            carProdYear: 2020,
            accelerationTo100: 3.6,
            maximumSpeed: 280
        }}
        key="Audi RS7"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="audi"
        carName="Audi R8"
        carImage={{
            Source: "https://bi.im-g.pl/im/73/4d/11/z18144883Q,Audi-R8-V10.jpg",
            Creator: "moto.pl",
            Art: "https://moto.pl/MotoPL/1,88389,18144351,nowe-audi-r8-ceny-w-polsce-dla-wybranych.html"
        }}
        carPrice={{
            caution: 2500,
            forDay: 100,
            forWeek: 650,
            forMonth: 2900
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 5,
            carMileage: 435132,
            carFuelType: "Petrol",
            carPower: 620,
            carTransmission: "Automat",
            carColor: "Light Blue",
            carTorque: 580,
            carProdYear: 2020,
            accelerationTo100: 3.0,
            maximumSpeed: 280
        }}
        key="Audi R8"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.       
        `}
    />,
    <CarWidget 
        carBrand="audi"
        carName="Audi Q8"
        carImage={{
            Source: "https://img.chceauto.pl/audi/q8/audi-q8-suv-4227-44974_head.jpg",
            Creator: "chceauto.pl",
            Art: "https://www.chceauto.pl/audi-q8-40-tdi-435km-2019-87122/"
        }}
        carPrice={{
            caution: 2500,
            forDay: 100,
            forWeek: 650,
            forMonth: 2900
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 154123,
            carFuelType: "Petrol",
            carPower: 340,
            carTransmission: "Automat",
            carColor: "Gray",
            carTorque: 500,
            carProdYear: 2019,
            accelerationTo100: 5.9,
            maximumSpeed: 250
        }}
        key="Audi Q8"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="bmw"
        carName="BMW M2"
        carImage={{
            Source: "https://i.etsystatic.com/16581340/r/il/efa3e2/1375955688/il_570xN.1375955688_itwb.jpg",
            Creator: "etsy.com",
            Art: "https://www.etsy.com/pl/listing/578720245/bmw-m2-blue-vector-vectorized-print"
        }}
        carPrice={{
            caution: 1500,
            forDay: 50,
            forWeek: 330,
            forMonth: 1350
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 4,
            numberOfDoors: 3,
            carMileage: 154123,
            carFuelType: "Petrol",
            carPower: 450,
            carTransmission: "Automat",
            carColor: "Blue",
            carTorque: 500,
            carProdYear: 2019,
            accelerationTo100: 4.2,
            maximumSpeed: 280
        }}
        key="BMW M2"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.         
        `}
    />,
    <CarWidget 
        carBrand="bmw"
        carName="BMW M8"
        carImage={{
            Source: "https://i.wpimg.pl/1920x1281/m.autokult.pl/bmw-m8-gc-4-71fcbe29a87b88df7e02,0,0,0,0.jpg",
            Creator: "autokult.pl",
            Art: "https://autokult.pl/35141,poznajcie-bmw-m8-gran-coupe-ktore-idealnie-laczy-osiagi-i-styl"
        }}
        carPrice={{
            caution: 1500,
            forDay: 50,
            forWeek: 330,
            forMonth: 1350
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 4,
            numberOfDoors: 3,
            carMileage: 154123,
            carFuelType: "Petrol",
            carPower: 600,
            carTransmission: "Automat",
            carColor: "Blue",
            carTorque: 750,
            carProdYear: 2019,
            accelerationTo100: 3.3,
            maximumSpeed: 250
        }}
        key="BMW M8"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.          
        `}
    />,
    <CarWidget 
        carBrand="bmw"
        carName="BMW i8"
        carImage={{
            Source: "https://m.autocentrum.pl/ac-file/car-version/5acba3e357502afc9e471ba1/bmw-i8-roadster-elektryczny-r3-1499-374km-275kw-od-2018.jpg",
            Creator: "autocentrum.pl",
            Art: "https://www.autocentrum.pl/nowe/bmw/i8/roadster/"
        }}
        carPrice={{
            caution: 3000,
            forDay: 120,
            forWeek: 800,
            forMonth: 3500
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 4,
            numberOfDoors: 3,
            carMileage: 54333,
            carFuelType: "Petrol",
            carPower: 275,
            carTransmission: "Automat",
            carColor: "Blue",
            carTorque: 250,
            carProdYear: 2020,
            accelerationTo100: 4.4,
            maximumSpeed: 250
        }}
        key="BMW i8"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />,
    <CarWidget 
        carBrand="bmw"
        carName="BMW X6"
        carImage={{
            Source: "https://www.autocentrum.pl/ac-file/car-version/5cda9b4357502af734102d4b/bmw-x6-f16.jpg",
            Creator: "autocentrum.pl",
            Art: "https://www.autocentrum.pl/dane-techniczne/bmw/x6/"
        }}
        carPrice={{
            caution: 2000,
            forDay: 80,
            forWeek: 500,
            forMonth: 2200
        }}
        carParameters={{
            bodyStyle: "SUV",
            numberOfSeats: 4,
            numberOfDoors: 5,
            carMileage: 89436,
            carFuelType: "Diesel",
            carPower: 340,
            carTransmission: "Automat",
            carColor: "Blue",
            carTorque: 700,
            carProdYear: 2020,
            accelerationTo100: 5.5,
            maximumSpeed: 245
        }}
        key="BMW X6"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.              
        `}
    />,
    <CarWidget 
        carBrand="lamborghini"
        carName="Lamborghini Aventador"
        carImage={{
            Source: "https://profiauto.pl/blog/wp-content/uploads/2018/08/Lamborghini-Aventador-SVJ-1.jpg",
            Creator: "profiauto.pl",
            Art: "https://profiauto.pl/blog/2018/08/24/lamborghini-aventador-svj-5-rzeczy-ktore-musisz-o-nim-wiedziec/"
        }}
        carPrice={{
            caution: 20000,
            forDay: 190,
            forWeek: 1330,
            forMonth: 5500
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 56000,
            carFuelType: "Petrol",
            carPower: 700,
            carTransmission: "Automat",
            carColor: "Green",
            carTorque: 690,
            carProdYear: 2015,
            accelerationTo100: 2.9,
            maximumSpeed: 350
        }}
        key="Lamborghini Aventador"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.       
        `}
    />,
    <CarWidget 
        carBrand="lamborghini"
        carName="Lamborghini Urus"
        carImage={{
            Source: "https://motofilm.pl/wp-content/uploads/2020/06/lamborghini-urus-pearl-capsule-9.jpg",
            Creator: "motofilm.pl",
            Art: "https://motofilm.pl/2020/06/lamborghini-urus-2021-z-nowym-pakietem-stylistycznym-pearl-capsule/"
        }}
        carPrice={{
            caution: 15000,
            forDay: 145,
            forWeek: 1000,
            forMonth: 4300
        }}
        carParameters={{
            bodyStyle: "SUV",
            numberOfSeats: 5,
            numberOfDoors: 5,
            carMileage: 76332,
            carFuelType: "Petrol",
            carPower: 650,
            carTransmission: "Automat",
            carColor: "Orange",
            carTorque: 850,
            carProdYear: 2017,
            accelerationTo100: 3.6,
            maximumSpeed: 305
        }}
        key="Lamborghini Urus"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.         
        `}
    />,
    <CarWidget 
        carBrand="porsche"
        carName="Porsche 718 Cayman"
        carImage={{
            Source: "https://blogmedia.dealerfire.com/wp-content/uploads/sites/1150/2019/03/2019-Porsche-718-GTS-White_o.jpg",
            Creator: "porschedelaware.pl",
            Art: "https://www.porschedelaware.com/blog/2019-porsche-718-cayman-gts-exterior-color-options/"
        }}
        carPrice={{
            caution: 3500,
            forDay: 175,
            forWeek: 1220,
            forMonth: 5200
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 99120,
            carFuelType: "Petrol",
            carPower: 300,
            carTransmission: "Manual",
            carColor: "White",
            carTorque: 380,
            carProdYear: 2016,
            accelerationTo100: 5.1,
            maximumSpeed: 275
        }}
        key="Porsche 718 Cayman"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />,
    <CarWidget 
        carBrand="porsche"
        carName="Porsche Cayenne III"
        carImage={{
            Source: "https://moto.rp.pl/wp-content/uploads/2020/06/Porsche-Cayenne_GTS-1.jpg",
            Creator: "moto.rp.pl",
            Art: "https://moto.rp.pl/parking/43528-porsche-cayenne-gts-powrot-do-swiata-v8"
        }}
        carPrice={{
            caution: 3500,
            forDay: 175,
            forWeek: 1220,
            forMonth: 5200
        }}
        carParameters={{
            bodyStyle: "SUV",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 99120,
            carFuelType: "Petrol",
            carPower: 550,
            carTransmission: "Automat",
            carColor: "Gray",
            carTorque: 770,
            carProdYear: 2017,
            accelerationTo100: 4.1,
            maximumSpeed: 286
        }}
        key="Porsche Cayenne III"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="ferrari"
        carName="Ferrari 458 Italia"
        carImage={{
            Source: "https://m.autokult.pl/ferrari-458-b8bcc9724bd54042aa73,750,470,0,0.jpg",
            Creator: "autokult.pl",
            Art: "https://autokult.pl/t/51756,ferrari-458"
        }}
        carPrice={{
            caution: 3500,
            forDay: 175,
            forWeek: 1220,
            forMonth: 5200
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 12000,
            carFuelType: "Petrol",
            carPower: 490,
            carTransmission: "Manual",
            carColor: "Gray",
            carTorque: 540,
            carProdYear: 2009,
            accelerationTo100: 3.4,
            maximumSpeed: 325
        }}
        key="Ferrari 458 Italia"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.        
        `}
    />,
    <CarWidget 
        carBrand="ferrari"
        carName="Ferrari F430"
        carImage={{
            Source: "https://leftlane.pl/wp-content/uploads/2019/01/IMG_9067-940x627.jpg",
            Creator: "leftlane.pl",
            Art: "https://leftlane.pl/2019/01/07/sprzedawca-ma-zaplacic-5-mln-dolarow-za-ukryte-usterki-w-ferrari/"
        }}
        carPrice={{
            caution: 5000,
            forDay: 150,
            forWeek: 1000,
            forMonth: 4400
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 214765,
            carFuelType: "Petrol",
            carPower: 490,
            carTransmission: "Red",
            carColor: "Gray",
            carTorque: 465,
            carProdYear: 2009,
            accelerationTo100: 4.0,
            maximumSpeed: 315
        }}
        key="Ferrari F430"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />,
    <CarWidget 
        carBrand="ferrari"
        carName="Ferrari 812"
        carImage={{
            Source: "https://i.wpimg.pl/1920x1357/m.autokult.pl/072b7a6f-ferrari-812-gts-7d97b26,0,0,0,0.jpg",
            Creator: "autokult.pl",
            Art: "https://autokult.pl/34842,ferrari-812-gts-to-najmocniejszy-kabriolet-na-swiecie"
        }}
        carPrice={{
            caution: 30000,
            forDay: 165,
            forWeek: 1100,
            forMonth: 4800
        }}
        carParameters={{
            bodyStyle: "Coupe",
            numberOfSeats: 2,
            numberOfDoors: 3,
            carMileage: 78432,
            carFuelType: "Petrol",
            carPower: 800,
            carTransmission: "Dark Grey",
            carColor: "Gray",
            carTorque: 718,
            carProdYear: 2009,
            accelerationTo100: 2.9,
            maximumSpeed: 340
        }}
        key="Ferrari F430"
        description={` 
            Elit adipisicing excepteur esse qui esse cillum ut aliqua velit id deserunt consequat. Excepteur anim nostrud nulla do aliquip dolor consectetur exercitation consectetur.
            Eiusmod consectetur quis id excepteur cupidatat amet. Elit nostrud dolor id magna. Reprehenderit eu culpa aliquip ut. 
            Aliquip ea laborum do nostrud deserunt proident ea nulla occaecat mollit esse.
            Ipsum ullamco fugiat cillum dolor aliquip dolore id consequat velit. 
            Reprehenderit in id voluptate dolore occaecat laboris voluptate excepteur esse in ad cupidatat adipisicing tempor. 
            Elit Lorem proident laborum sunt duis minim proident reprehenderit eu pariatur et id esse. Enim minim qui nulla occaecat ipsum cupidatat. 
            Lorem minim incididunt amet irure. Voluptate excepteur enim labore nisi. Commodo laboris non irure non qui ipsum sint.
            Proident eu deserunt consequat officia sint laborum. Commodo deserunt sunt laborum in quis nostrud enim. Amet amet Lorem do culpa enim eu.
            Ipsum officia adipisicing labore elit amet sunt magna dolore consequat. Proident incididunt sit ex reprehenderit mollit sit. 
            Non occaecat tempor eiusmod velit. Voluptate laboris nulla consequat nostrud Lorem pariatur eiusmod dolore voluptate. 
            Sit proident ex duis dolore cillum labore eu pariatur nulla minim non nostrud. Laborum voluptate ipsum esse aute reprehenderit nostrud dolor. 
            Non veniam dolor eiusmod reprehenderit nisi ipsum exercitation ullamco.      
        `}
    />
    
]