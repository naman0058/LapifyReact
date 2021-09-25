import React,{useState} from 'react'
import Product from "./Data"
import { useHistory } from "react-router-dom";
import '../Footer'
import Footer from '../Footer';
import '../css/More.css'
//this page showing (select more brands, it showing all the brands )
export default function More(props) {
    const history=useHistory()

    const [te,setTe]=useState()

    const data=[
        {
            name:'Dell',data:[
                { "Name": "Inspiron Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d9a238b9-05c5.jpg","Price":"1800$" },
                { "Name": "XPS Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/082b2afc-85c7.jpg", "Price": "1200$" },
                { "Name": "Studio Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/0da459cd-1d35.jpg", "Price": "1700$"},
                { "Name": "Alienware Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/5a9959b4-c401.jpg", "Price": "1600$"}
            ] 
        },

        {
            name:"LG",data:[

                { "Name": "LG gram series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/260071b4-ef46.jpg", "Price": "1500$"},
                { "Name": "Lg2", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d5b8fe4d-ac2e.jpg", "Price": "1900$"},
                { "Name": "Lg3", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1800$"},
                { "Name": "Lg4", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1900$"}

            ]
        },
    
        {
            name: "Sony", data: [

                { "Name": "Vaio Duo series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/6360e7e9-0b5c.jpg", "Price": "1400$"},
                { "Name": "Vaio pro series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/60b69ee0-7b29.jpg", "Price": "1800$" },
                { "Name": "Vaio Tap Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d91e77bd-ea21.jpg", "Price": "800$"},
                { "Name": "Vaio Flip Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/0855bb0c-dc08.jpg", "Price": "800$"}
            ]},
        {
            name: "Lenovo", data: [

                { "Name": "IdeaPad D series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8eab44d2-ea5a.jpg", "Price": "1100$"},
                { "Name": "IdeaPad 500 Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/86730ffb-68bc.jpg", "Price": "1600$"},
                { "Name": "IdeaPad Flex Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/24ee4703-8f4a.jpg", "Price": "1700$"},
                { "Name": "IdeaPad 300 series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1000$" }
            ]
        },

        {
            name: "Agb", data: [

                { "Name": "Orion series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/c584fee6-4c6c.jpg", "Price": "1700$" },
                { "Name": "Octev Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/cc3542e6-67d1.jpg", "Price": "1800$" },
                { "Name": "Tiara Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d540fa8a-fc21.jpg", "Price": "1600$"}
            ]
        },

        {
            name: "Toshiba", data: [

                { "Name": "Satellite Pro Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d2bfca5d-430f.jpg", "Price": "1100$" },
                { "Name": "Tecra Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/262e2845-b09e.jpg", "Price": "1900$" },
                { "Name": "KiraBook series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d1ccdb9d-1fd1.jpg", "Price": "1400$"},
                { "Name": "Portege Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/1df39489-94b9.jpg", "Price": "1300$"}
            ]
        },

        {
            name: "Micromax", data: [

                { "Name": "Ignite Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/47dc81b2-fb65.jpg", "Price": "2800$" },
                { "Name": "Canvas series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/5cb33f08-8e61.jpg", "Price": "1100$"},
                { "Name": "Alpha Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/19a7034f-fcc5.jpg", "Price": "1200$"}
            ]
        },

        {
            name: "Acer", data: [

                { "Name": "Spin Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/965118bb-28b0.jpg", "Price": "1100$" },
                { "Name": "Predator Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/a6ceb593-90cd.jpg", "Price": "1300$"},
                { "Name": "Acer Chromebook Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b5ad822f-f6ff.jpg", "Price": "1500$"}
            ]
        },

        {
            name: "Iball", data: [

                { "Name": "Slide Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/ad9b9063-d9a6.jpg", "Price": "5800$" },
                { "Name": "Compbook Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/98c01b82-7077.jpg", "Price": "1200$"},
                { "Name": "iball3", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1300$"},
                { "Name": "iball4", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1700$"}
            ]
        },

        {
            name: "Lava", data: [

                { "Name": "Helium Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/566ea814-093a.jpg", "Price": "1809$"},
                { "Name": "Twinpad Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/0b51fc52-15f3.jpg", "Price": "1880$"},
                { "Name": "lava3", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1600$"},
                { "Name": "lava4", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1700$"}
            ]
        },

        {
            name: "Microsoft", data: [

                { "Name": "Surface Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/31295413-1992.jpg", "Price": "1890$" },
                { "Name": "Surface Book series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/5da9e1fd-f9f2.jpg", "Price": "6800$" },
                { "Name": "Surface Pro Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/03823bb4-a77e.jpg", "Price": "1700$"},
                { "Name": "Surface Go Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8357551e-f73d.jpg", "Price": "1890$"}
            ]
        },

        {
            name: "Hp", data: [

                { "Name": "G Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/7c1254af-b6aa.jpg", "Price": "6800$"},
                { "Name": "Hp 14 Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d5b8fe4d-ac2e.jpg", "Price": "1700$" },
                { "Name": "Omen Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1890$" },
                { "Name": "Z Book Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1860$"}
            ]
        },

        {
            name: "Avita", data: [

                { "Name": "Liber Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8b10756c-f6a8.jpg", "Price": "1100$" },
                { "Name": "Pura Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/09d4686b-66d9.jpg", "Price": "1830$"},
                { "Name": "Cosmos Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/571ee55b-3992.jpg", "Price": "1840$"},
                { "Name": "Admiror Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/2e4f824e-5977.jpg", "Price": "1900$"}
            ]
        },

        {
            name: "Msi", data: [

                { "Name": "Gl Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/aa885668-9a45.jpg", "Price": "1860$"},
                { "Name": "WT Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/89c227df-6994.jpg", "Price": "1890$"},
                { "Name": "Alpha Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/6420c9f2-02fb.jpg", "Price": "1600$"},
                { "Name": "WS Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/9d073b38-f3ce.jpg", "Price": "1400$" }
            ]
        },


        {
            name: "Honor", data: [

                { "Name": "MagicBook Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/94b7caf5-290e.jpg", "Price": "1840$" },
                { "Name": "honor2", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d5b8fe4d-ac2e.jpg", "Price": "1200$"},
                { "Name": "honor3", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1200$" },
                { "Name": "honor4", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1600$" }
            ]
        },


        {
            name: "Smartron", data: [

                { "Name": "T book Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/5885c42e-7ae1.jpg", "Price": "1820$"},
                { "Name": "T book Flex Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/d5b8fe4d-ac2e.jpg", "Price": "1830$"},
                { "Name": "smartron3", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2905e0b-c3e2.jpg", "Price": "1870$"},
                { "Name": "smartron4", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/8202c9e8-1a66.jpg", "Price": "1880$" }
            ]
        },


        {
            name: "Asus", data: [

                { "Name": "ROG Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/486a4239-2e1e.jpg", "Price": "1805$" },
                { "Name": "Vivo Book Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/be6ef27e-5636.jpg", "Price": "1809$" },
                { "Name": "Eee Book Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/85142e42-2961.jpg", "Price": "1810$" },
                { "Name": "Gaming Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/9212e7e1-a429.jpg", "Price": "1880$"}
            ]
        },

        {
            name: "Apple", data: [

                { "Name": "Macbook Retina Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/49d8a05e-9550.jpg", "Price": "1870$"},
                { "Name": "Macbook Air Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/0410328d-75b5.jpg", "Price": "1800$"},
                { "Name": "Macbook Pro Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/da9e5fc5-c9dd.jpg", "Price": "1600$" },
                { "Name": "Macbook Touch Bar series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/35f14ea5-0e39.jpg", "Price": "1890$"}
            ]
        },
        {
            name: "Xiaomi", data: [

                { "Name": "Mi Notebook Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/00a8ac92-5526.jpg", "Price": "1700$" },
                { "Name": "Mi Air Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/2f67dc72-7806.jpg", "Price": "1700$"},
                { "Name": "Mi Pro Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/2e4e84e5-82a3.jpg", "Price": "9800$"}
            ]
        },
        {
            name: "Samsung", data: [

                { "Name": "Odyssey Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b01daf4c-8daf.jpg", "Price": "1809$"},
                { "Name": "Samsung Q Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/0df83d1d-3a39.jpg", "Price": "1900$"},
                { "Name": "Samsung RC Series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/cdc3fade-52e2.jpg", "Price": "8800$"},
                { "Name": "Samsung Notebook series", "Url": "https://s3n.cashify.in/cashify/product/img/xhdpi/b2cfb586-ff30.jpg", "Price": "1700$"}
            ]
        },



    ]

    const Logic=(n)=>{
      
       console.log("from name",n) 
       data.map(e=>{
           if(e.name==n){
               history.push({
                   pathname:"/product",
                   state:e.data
               })
           }
       }) 

    }

    return (
        <>

            {/* {console.log("Props from the more",props)} */}

            <div className="container">

            <div className="brand-section">

                    <h3 className="select" >Select Brands</h3>
            

                   <div className="row">  

                    {
                      props.location.state.map(e=><>
                            <div className="col-md-2 brand-box">
                                <img src={e.Url} onClick={()=>Logic(e.Name)} className="img-fluid" alt=""/>
                            </div>
                            
                              </>)}

                          </div>
          
                                </div>
                              
    <div>
            
            <h3 style={{fontFamily: "Montserrat",marginTop:30}}>Sell Your Old Laptop On Lapify</h3>
            <span>
                <p style={{fontFamily:"serif"}}>Every year many laptops with more added features arrive in the market. Due to this the temptation
                to upgrade is quite strong. Many users have the old laptops lurking in their almirah or lying on their desks.
                Selling your old laptop or Upgrading your laptop can be much more expensive so make the right choice by reselling
                 your old laptop at its right value. </p> <br />
                <p style={{fontFamily: "serif"}}>When your laptop goes old and you are willing to sell old laptop, It is very difficult to go to each market or
                ask person to person to get or analyze the right value of your laptop. Even if you do this and sell old laptop online,
                the chances are very less that you would be satisfied with the value you have got. </p><br />

            </span>
            
            <span>
                <ul style={{ fontFamily: "serif" }}>
                    <li>Selling is Very Easy: You will be able to choose your specific laptop model and
                    condition and get an estimated value on the spot. By getting the real estimated value for your laptop,
                     you can move on to a new one as quickly and effortlessly as possible.</li>
                    <li>Quick Payment: After you sell your used laptop, you don’t have to wait for weeks to receive your payment.
                    We are serving in 1500+ cities and we pay you on the same day. </li>
                    <li>Best Value: When you sell used laptop to us, you will be getting the best possible value for it as compared to the market. </li>
                    <li>Any Model: With us, you don’t have to worry about the model of your laptop. We offer various models and devices and that allows you to sell old
                    laptop to us no matter what make or model it is.</li>
                </ul>
            </span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

